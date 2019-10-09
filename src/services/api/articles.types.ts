export interface Article {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  author: string;
  image: Image | null;
  video: string | null;
  tag: Tag[];
  createdAt: string;
  updatedAt: string;
}

export interface ArticleFormated {
  id: string;
  title: string;
  subtitle: string;
  content: string;
  contentIsVisible?: boolean;
  author: string;
  shareLink: string;
  image: Image | null;
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

interface Image {
  createdAt: string;
  ext: string;
  hash: string;
  id: string;
  mime: string;
  name: string;
  provider: string;
  related: string[];
  sha256: string;
  size: string;
  updatedAt: string;
  url: string;
}