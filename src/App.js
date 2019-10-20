import React from 'react';
import './App.css';
import Card from "./CardList";
import SearchBox from "./SearchBox";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      SearchField: ""
    };
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(event) {
    this.setState({SearchField: event.target.value} )
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(user => this.setState({ monsters: user }));
  }
  render() {
    const { monsters, SearchField } = this.state;
    const FilteredMonster = monsters.filter(monster =>
     monster.name.toLowerCase().includes(SearchField.toLowerCase())
    )
    return (
      <div>
        <h1 className="appHeader">Mlg Monsters</h1>
        <SearchBox handleChange={this.handleChange} />
        <Card monster={FilteredMonster} />
      </div>
    );
  }
}


export default App
