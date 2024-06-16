export default interface Project {
  id: number;
  post_id: number;
  name: string;
  image: string;
  description: string;
  tags: string[];
  live: boolean;
  thumbnail_url: string;
  website_url: string;
  created_at: string;
  updated_at: string;
}
