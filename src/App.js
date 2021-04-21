import "./App.css";
import { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
    // this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((response) => this.setState({ monsters: response }))
      .catch((error) => console.log(error));
  }

  // handleChange(value) {
  //   this.setState({
  //     searchField: value,
  //   });
  // }

  handleChange = (value) => {
    this.setState({
      searchField: value,
    });
  };

  render() {
    const { monsters, searchField } = this.state;
    const regex = new RegExp(searchField.toLowerCase(), "i");
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().match(regex)
    );

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
          placeholder="Search Monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
