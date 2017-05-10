import React from 'react';
import Playlist from './Playlist'

class PlaylistCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    let playlists = this.props.playlists.map((playlist) => {
        return <Playlist
          key={playlist.id}
          id={playlist.id}
          name={playlist.name}
          songs={playlist.songs}
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
