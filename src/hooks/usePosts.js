import { useEffect, useState } from "react";
import axios from "axios";

export default function usePosts(page) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [posts, setPosts] = useState([]);
  const [hasMore, setHasMore] = useState(false);

  useEffect(() => {
    let cancel;

    const fetchPosts = async () => {
      setLoading(true);
      setError(false);

      try {
        const res = await axios.get("https://dummyjson.com/posts", {
          params: { limit: 10, skip: (page - 1) * 10 },
          cancelToken: new axios.CancelToken((c) => (cancel = c)),
        });

        setPosts((prev) => [...prev, ...res.data.posts]);
        setHasMore(res.data.posts.length > 0);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) return;
        setError(true);
      }
    };

    fetchPosts();

    return () => cancel && cancel();
  }, [page]);

  return { loading, error, posts, hasMore };
}
