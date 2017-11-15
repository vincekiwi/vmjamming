import React from 'react';
import './Playlist.css';
import TrackList from '../TrackList/TrackList.js';

class Playlist extends React.Component {
  render() {
    return (
      <div className="Playlist">
      <input defaultValue={'New Playlist'}/>
        <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} />
      <a className="Playlist-save" onClick={this.props.onSave} >SAVE TO SPOTIFY</a>
    </div>
  );
  }
}


export default Playlist;
