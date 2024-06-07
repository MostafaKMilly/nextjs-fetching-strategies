export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
}

export interface Photo {
  id: number;
  url: string;
  thumbnailUrl: string;
  title: string;
  albumId: number;
}

export interface Comment {
  id: number;
  postId: number;
  name: string;
  email: string;
  body: string;
}
