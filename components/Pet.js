const React = require('react');
// const allPets = require(./data/pets)

class Pet extends React.Component {
  constructor(props) {
    super(props);
    // debugger
    this.genderSymbol = this.genderSymbol.bind(this)
    this.adoptThePet = this.adoptThePet.bind(this)

  }

  genderSymbol(){
    let gender = this.props.pet.gender
    if (gender === "male"){
      return "♂"
    }else{
      return "♀"
    }
  }

  adoptThePet(){
    this.props.onAdoptPet(this.props.pet.id)
  }

  render() {
    return (

      <div className="card">
        <div className="content">
          <a className="header"> {this.props.pet.name} ({this.genderSymbol()})</a>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">

        {this.props.isAdopted ? <button className="ui disabled button" >Already adopted</button> :
        <button className="ui primary button" onClick={this.adoptThePet}>Adopt pet</button> }

        </div>
      </div>
    );
  }
}

module.exports = Pet;
