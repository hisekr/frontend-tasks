'use client'
import React from "react";
import { useCallback, useRef, useState } from "react";
import usePosts from "@/hooks/usePosts";
import Navbar from "@/components/Navbar";

const page = () => {
  const [page, setPage] = useState(1);
  const { posts, hasMore, loading, error } = usePosts(page);

  const observer = useRef();

  const lastPostRef = useCallback(
    (node) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting && hasMore) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    [loading, hasMore]
  );
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar name="Infinite Scroll" codeLink="/react/infinte-scroll" />
        <main className="bg-gray-100 p-8 flex flex-col items-center">
          <h1 className="text-2xl font-bold mb-6">
            Infinite Scroll (DummyJSON)
          </h1>

          <div className="w-full max-w-2xl space-y-4">
            {posts.map((post, index) => {
              if (posts.length === index + 1) {
                return (
                  <div
                    ref={lastPostRef}
                    key={post.id}
                    className="p-4 bg-white rounded-lg shadow"
                  >
                    <h2 className="font-semibold text-lg">{post.title}</h2>
                    <p className="text-gray-600">{post.body}</p>
                  </div>
                );
              } else {
                return (
                  <div key={post.id} className="p-4 bg-white rounded-lg shadow">
                    <h2 className="font-semibold text-lg">{post.title}</h2>
                    <p className="text-gray-600">{post.body}</p>
                  </div>
                );
              }
            })}
          </div>

          {loading && <div className="mt-4 text-blue-600">Loading...</div>}
          {error && (
            <div className="mt-4 text-red-500">Something went wrong</div>
          )}
        </main>
      </div>
    </>
  );
};

export default page;
