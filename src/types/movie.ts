export type MovieType = {
  title: string;
  url: string;
  sharedBy: string;
  sharedAt?: number;
  description: string;
};

export interface ResponseMovieType extends MovieType {
  id: string;
}
