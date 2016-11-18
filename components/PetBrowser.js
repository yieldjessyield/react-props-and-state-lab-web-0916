const React = require('react');

const Pet = require('./Pet');

class PetBrowser extends React.Component {

  render() {
    const pets = this.props.pets.map((pet) => (
      < Pet onAdoptPet={this.props.onAdoptPet} pet={pet} isAdopted={this.props.adoptedPets.includes(pet.id)} />
      ))

    return(
      <div className="ui cards">
       {pets}
      </div>
    );
  }
}

module.exports = PetBrowser;
