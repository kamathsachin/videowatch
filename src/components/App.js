import React, { Component } from "react";
import SearchBar from "./SearchBar";
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
        <SearchBar onFormSubmit={this.onSearchTermSubmit} />I have{" "}
        {this.state.videos.length} videos found
      </div>
    );
  }
}

export default App;
