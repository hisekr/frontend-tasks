import React from "react";
import GitHubLogo from "./GithubLogo";

const Navbar = ({ name, codeLink }) => {
  const githubUrl = process.env.NEXT_PUBLIC_GITHUB_PROJECT_URL;
  const fullUrl = githubUrl.endsWith("/")
    ? `${githubUrl}${codeLink.slice(1)}`
    : `${githubUrl}${codeLink}`;

  return (
    <div className="flex justify-between items-center px-40 py-8 bg-gray-100">
      <div className="text-lg font-semibold">{name}</div>
      <a
        href={fullUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-gray-700 hover:text-black transition"
      >
        <GitHubLogo />
      </a>
    </div>
  );
};

export default Navbar;
