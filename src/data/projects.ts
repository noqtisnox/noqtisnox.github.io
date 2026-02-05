export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  link?: string;
  image?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  language: string;
  topics: string[];
  updated_at: string;
  stargazers_count: number;
}