import { create } from "zustand";
import { v4 as uuidv4 } from "uuid";

type Playlist = {
  title: string;
  id: string;
};

type PlaylistStore = {
  playlists: Playlist[] | [];
  handleAddNewPlaylist: () => void;
};

export const usePlaylistStore = create<PlaylistStore>((set) => ({
  playlists: [],
  handleAddNewPlaylist: () =>
    set((prevState) => ({
      playlists: [
        ...prevState.playlists,
        {
          title: `Playlist nº ${prevState.playlists.length + 1}`,
          id: uuidv4(),
        },
      ],
    })),
}));
