import React from 'react';
import PlaylistCollection from './PlaylistCollection'
import SongCollection from './SongCollection'


class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedSongId: this.props.data.selectedSongId,
      selectedPlaylistId: this.props.data.selectedPlaylistId
    }
    this.handleSongSelect = this.handleSongSelect.bind(this)
    this.handlePlaylistSelect = this.handlePlaylistSelect.bind(this)

  }

  handleSongSelect(id) {
    if(this.state.selectedSongId != id) {
      this.setState({selectedSongId: id})
    }
  }

  handlePlaylistSelect(id) {
    if(this.state.selectedPlaylistId != id) {
      this.setState({selectedPlaylistId: id});
      this.setState({selectedSongId: this.props.data.playlists[this.state.selectedPlaylistId-1].songs[1]})
      debugger;
    }
  }

  render() {

    let data = this.props.data

    let selectedPlaylistSongIds = data.playlists[this.state.selectedPlaylistId-1].songs;

    let filterById = (obj) => {
      return selectedPlaylistSongIds.includes(obj.id);
    }

    let selectedPlaylistSongs = data.songs.filter(filterById);

    return (
      <div className="App row">
        <div className="large-6 columns">
          <h1>Playlist</h1>
            <PlaylistCollection
              selectedPlaylistId = {this.state.selectedPlaylistId}
              playlists = {data.playlists}
              handlePlaylistSelect = {this.handlePlaylistSelect}
            />
        </div>
        <div className="large-6 columns">
          <h1>Selected Song</h1>
            <SongCollection
              songs = {selectedPlaylistSongs}
              selectedSongId = {this.state.selectedSongId}
              handleSongSelect = {this.handleSongSelect}
            />
        </div>
      </div>
    );
  }
}

export default App;
