export type Event = {
  id: string;
  name: string;
  location: Location;
  time: string;
  coverSrc: string;
}


export type Location = {
  placement: string;
  city: string;
}
