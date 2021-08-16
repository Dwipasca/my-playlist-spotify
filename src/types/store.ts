import { UserProfile, Track } from "./spotify";

export interface IPlaylistState {
  tracks: Track[];
  selectedTracks: string[];
  form: {
    title: string;
    description: string;
  };
}

export interface IAuthState {
  isAuthenticated: boolean;
  accessToken: string;
  user: UserProfile | null;
}
