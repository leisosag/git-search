import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "./components/SearchBar";
import SearchResults from "./components/SearchResults";
import github from "./apis/github";
import gitlab from "./apis/gitlab";

class App extends React.Component {
  state = { usersGitHub: [], usersGitLab: [] };

  onTermSubmit = async (term) => {
    const responseGitHub = await github.get("/search/users", {
      params: {
        q: term,
        per_page: 5,
      },
    });

    fetch(`https://gitlab.com/api/v4/users?username=${term}`)
      .then((respose) => respose.json())
      .then((responseGitLab) => console.log(responseGitLab[0]));

    this.setState({ usersGitHub: responseGitHub.data.items });
    console.log(this.state.usersGitHub);
  };

  render() {
    return (
      <div className="container pt-5">
        <SearchBar onFormSubmit={this.onTermSubmit} />
        <SearchResults users={this.state.usersGitHub} />
      </div>
    );
  }
}

export default App;
