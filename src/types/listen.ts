export interface IListen {
  id: string;
  name: string;
  description: string | null;
  author: string;
  year: number;
  country: string;
  duration: number;
  imageUrl: string | null;
  audioUrl: string;
  free: boolean;
}
