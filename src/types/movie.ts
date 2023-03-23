export type MovieType = {
  title: string;
  url: string;
  sharedBy: string;
  description: string;
  sharedAt?: number;
};

export interface ResponseMovieType extends MovieType {
  id: string;
}
