import React from "react";
import Form from "react-bootstrap/Form";

class SearchBar extends React.Component {
  state = { term: "" };

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onFormSubmit(this.state.term);
  };

  render() {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="d-flex flex-column">
            <h1>Search git users</h1>
            <Form inline onSubmit={this.onFormSubmit}>
              <Form.Label htmlFor="user" srOnly>
                User
              </Form.Label>
              <Form.Control
                type="text"
                minLength="4"
                className="mb-2 mr-sm-2"
                id="user"
                placeholder="Search by username"
                value={this.state.term}
                onChange={this.onInputChange}
              />
            </Form>
          </div>
        </div>
      </div>
    );
  }
}

export default SearchBar;
