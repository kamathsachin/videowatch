import React, { Component } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./VideoList";
import youtube from "../api/YouTube";

class App extends Component {
  state = { videos: [] };

  onSearchTermSubmit = async (term) => {
    const response = await youtube.get("/search", { params: { q: term } });

    this.setState({ videos: response.data.items });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onSearchTermSubmit} />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

export default App;
