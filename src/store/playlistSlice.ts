import { createSlice } from "@reduxjs/toolkit";

import { IPlaylistState } from "types/store";

const initialState: IPlaylistState = {
  tracks: [],
  selectedTracks: [],
};

const playlistSlice = createSlice({
  name: "playlist",
  initialState,
  reducers: {
    setTracks: (state, action) => {
      state.tracks = action.payload;
    },
    addSelectedTracks: (state, action) => {
      state.selectedTracks.push(action.payload);
    },
    substractSelectedTracks: (state, action) => {
      const index = state.selectedTracks.indexOf(action.payload);
      state.selectedTracks.splice(index, 1);
    },
    clearSelectedTracks: (state) => {
      state.selectedTracks = [];
    },
    clearState: () => initialState,
  },
});

export const {
  setTracks,
  addSelectedTracks,
  substractSelectedTracks,
  clearSelectedTracks,
  clearState,
} = playlistSlice.actions;

export default playlistSlice.reducer;
