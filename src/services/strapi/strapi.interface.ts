export interface Article {
  id: string;
  title: string;
  content: string;
  cover: string | null;
  tag: Tag[];
  createdAd: string;
  updatedAt: string;
}

export interface Tag {
  id: string;
  name: string;
  createdAd: string;
  updatedAt: string;
}
