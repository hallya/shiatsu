export interface Post {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  author: string;
  image: string | null;
  video: string | null;
  tag: Tag[];
  createdAt: string;
  updatedAt: string;
}

export interface PostFormated {
  id: string;
  title: string;
  subtitle: string;
  preview: string;
  content: string;
  contentIsVisible?: boolean;
  author: string;
  image: string | null;
  video: string | null;
  tag: Tag[];
  createdAt: string;
  updatedAt: string;
}

export interface Tag {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}
