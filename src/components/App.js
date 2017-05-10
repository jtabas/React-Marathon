import React from 'react';
import PlaylistCollection from './PlaylistCollection'
import SongCollection from './SongCollection'


class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[this.props.data.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App row">
        <div className="large-6 columns">
          <h1>Playlist</h1>
            <PlaylistCollection
              playlists = {data.playlists}
            />
        </div>
        <div className="large-6 columns">
          <h1>Selected Songs</h1>
            <SongCollection
              songs = {selectedPlaylistSongs}
              selectedSongId = {data.selectedSongId}
            />
        </div>
      </div>
    );
  }
}

export default App;
