const React = require('react');

const Filters = require('./Filters');
const PetBrowser = require('./PetBrowser');

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      pets: [],
      adoptedPets: [],
      filters: {
        type: 'all',
      }
    };

    this.onAdoptPet = this.onAdoptPet.bind(this)
    this.onFindPetsClick = this.onFindPetsClick.bind(this)
    this.onChangeType = this.onChangeType.bind(this)
  }

  onAdoptPet(id){
    this.setState({
      adoptedPets: [...this.state.adoptedPets, id]

    })

  }

  onChangeType(selection){
    this.setState({
      filters: Object.assign({}, this.state.filters, {
        type: selection
      })
    })
  }


  onFindPetsClick(){
        let url = '/api/pets'
    if (this.state.filters.type !== 'all') {
      url += `?type=${this.state.filters.type}`
    }
    fetch(url)
      .then(response => response.json())
      .then(pets => this.setState({ pets }))
    // if (this.state.filters.type === "all"){
    //   this.state.pets = fetch('/api/pets')
    // }else{
    //   this.state.pets = fetch(`/api/pets?type=${this.state.filters.type}`)
    // }
  }


  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filters={this.state.filters} onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.onAdoptPet} pets={this.state.pets} adoptedPets={this.state.adoptedPets}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

module.exports = App;
