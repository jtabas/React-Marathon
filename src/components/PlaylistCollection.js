import React from 'react';
import Playlist from './Playlist'

class PlaylistCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let selectedPlaylistId = this.props.selectedPlaylistId
    let playlists = this.props.playlists.map((playlist) => {
      let className;
      if (selectedPlaylistId == playlist.id) {
        className = 'selected'
      } else {
        className = ''
      }

      let handlePlaylistClick = () => this.props.handlePlaylistSelect(playlist.id)


        return <Playlist
          key={playlist.id}
          id={playlist.id}
          name={playlist.name}
          songs={playlist.songs}
          className={className}
          handlePlaylistClick={handlePlaylistClick}
        />
    })

    return(
      <ul>
        {playlists}
      </ul>
    )
  }
}

export default PlaylistCollection
