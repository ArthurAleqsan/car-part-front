export interface ICrumb {
  title: string;
  path: string;
}
export interface IGamesFilterSearch {
  offset: number;
  id?: number;
  namePart?: string;
  integrator?: string;
  integrators: string[];
  providerName?: string;
}
export type Game = {
  device: 1 | 2 | 3;
  gameMode: string;
  gameType: 'casino' | 'liveCasino';
  id: number;
  integrator: string;
  lastUpdate: Date;
  name: string;
  priority: number;
  productId: number;
  provider: string;
  status: string;
  tags: string[];
  thumbnail: string;
};

