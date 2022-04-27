import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    {
      title: "Epiphany",
      duration: "4:05",
    },
    {
      title: "Spring Day",
      duration: "3:05",
    },
    {
      title: "Waiting",
      duration: "4:07",
    },
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
