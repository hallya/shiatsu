export interface Article {
  author: string;
  content: string;
  created_at: string;
  id: string;
  image: Image | null;
  subtitle: string;
  tag: Tag[];
  title: string;
  updated_at: string;
  video: string | null;
}

export interface ArticleFormated {
  author: string;
  content: string;
  contentIsVisible?: boolean;
  created_at: string;
  id: string;
  image: Image | null;
  shareLink: string;
  subtitle: string;
  tag: Tag[];
  title: string;
  updated_at: string;
  video: string | null;
}

export interface Tag {
  created_at: string;
  id: string;
  name: string;
  updated_at: string;
}

interface Image {
  created_at: string;
  ext: string;
  hash: string;
  id: string;
  mime: string;
  name: string;
  provider: string;
  related: string[];
  sha256: string;
  size: string;
  updated_at: string;
  url: string;
}
