import React from 'react';
import Song from './Song'

class SongCollection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let selectedSongId = this.props.selectedSongId
    let songs = this.props.songs.map((song) => {
      let className;
      if (selectedSongId == song.id) {
        className = 'selected'
      } else {
        className = ''
      }

        return <Song
          key={song.id}
          id={song.id}
          song={song}
          className={className}
        />
    })

    return(
      <ul>
        {songs}
      </ul>
    )
  }
}

export default SongCollection
