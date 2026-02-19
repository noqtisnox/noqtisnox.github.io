import { useState, useEffect } from "react";
import { type GitHubRepo } from "@data/projects";

export default function useProjects(username: string) {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((repo: GitHubRepo) => {
          const isNotUsername = repo.name !== username;
          const isNotSpecificRepo = repo.name !== "noqtisnox.github.io";

          const nameMatches = repo.name.toLowerCase().includes("educational");

          const topicMatches = repo.topics?.some(
            (topic: string) => topic.toLowerCase() === "educational",
          );

          return (
            isNotUsername && isNotSpecificRepo && !nameMatches && !topicMatches
          );
        });

        setProjects(filtered);
        setLoading(false);
      });
  }, [username]);

  return { projects, loading };
}
