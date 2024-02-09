import { IListen } from './listen';

interface IUpcomingEvent {
  name: string;
  date: string;
  time: string;
  location: string;
  description: string;
}

export interface IArtist {
  name: string;
  img: string;
  link: string;
  banner: string;
  genre: string;
  followers: number;
  NFTMinted: number;
  upcomingEvent: IUpcomingEvent;
  playlist?: IListen[];
}
