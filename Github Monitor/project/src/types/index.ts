export interface UserActivity {
  id: string;
  type: string;
  repo: {
    name: string;
  };
  created_at: string;
  payload: {
    commits?: Array<{
      message: string;
    }>;
    action?: string;
  };
}

export interface Repository {
  id: number;
  name: string;
  description: string;
  html_url: string;
  stargazers_count: number;
  language: string;
  updated_at: string;
}