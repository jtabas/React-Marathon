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

    let handleSongClick = () => this.props.handleSongSelect(song.id)

        return <Song
          key={song.id}
          id={song.id}
          song={song}
          className={className}
          handleSongClick={handleSongClick}
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
