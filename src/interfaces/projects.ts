export default interface Project {
  id: number;
  post_id: number;
  name: string;
  status: string
  image: string
  url: string
  description: string
  tags: string[]
  coming_soon: boolean
  created_at: string
  updated_at: string
}