import { useState, useEffect } from 'react';
import { type GitHubRepo } from '@data/projects';

export default function useProjects(username: string) {
  const [projects, setProjects] = useState<GitHubRepo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}/repos?sort=updated`)
      .then((res) => res.json())
      .then((data) => {
        const filtered = data.filter((repo: GitHubRepo) => repo.name !== username);
        setProjects(filtered);
        setLoading(false);
      });
  }, [username]);

  return { projects, loading };
};