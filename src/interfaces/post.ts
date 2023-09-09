export default interface Post {
  id: number;
  attributes: {
    title: string;
    description: string;
    author: string;
    content: string;
    slug: string
    publishedAt: string;
    createdAt: string;
    updatedAt: string;
  };
}