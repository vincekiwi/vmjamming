import React from 'react';
import './App.css';
import Spotify from '../../util/Spotify.js';
import SearchBar from '../SearchBar/SearchBar.js';
import SearchResults from '../SearchResults/SearchResults.js';
import Playlist from '../Playlist/Playlist.js';

class App extends React.Component {
  constructor(props) {
    super(props);
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
        this.updatePlaylistName = this.updatePlaylistName.bind(this);
        this.savePlaylist = this.savePlaylist.bind(this);
        this.search = this.search.bind(this);
    this.state = {
      searchResults: [],
      playlistName: "New Playlist",
      playlistTracks: []
    }
  }

  addTrack(track) {
    if (this.state.playlistTracks.every(plTrack => plTrack.id !== track.id)) {
      let newPlaylistTracks = this.state.playlistTracks.concat(track);
      this.setState({playlistTracks: newPlaylistTracks});
    }
  }

  removeTrack(track) {
    let newPlaylistTracks = this.state.playlistTracks.filter(plTrack =>
			plTrack.id !== track.id);
		this.setState({playlistTracks: newPlaylistTracks});
  }

  updatePlaylistName(name) {
    this.setState({
      playlistName: name
    });
  }

  savePlaylist () {
    let playlistArray = this.state.playlistTracks;
    let uriArray = playlistArray.map(track => track.uri);
    Spotify.savePlaylist(this.state.playlistName, uriArray);
    this.setState({
      playlistTracks: [],
      playlistName: 'New Playlist' });
  }

  search(searchTerm) {
    Spotify.search(searchTerm).then(tracks => {
      this.setState({
        searchResults: tracks
      })
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
            <SearchBar onSearch={this.search} />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack}/>
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onSave={this.savePlaylist} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
