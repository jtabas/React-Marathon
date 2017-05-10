import React from 'react';

class Playlist extends React.Component {
  constructor(props) {
    super(props)

  }

  render() {

    return(
      <li className = {this.props.className} onClick={this.props.handlePlaylistClick}>
        {this.props.name}
      </li>

    )
  }
}

export default Playlist;
