import React, { Component } from 'react';
import './Characters.css';
import { connect } from 'react-redux';
import * as charactersActions from '../../actions/charactersActions'


class Characters extends Component {
  
  componentDidMount() {
    this.props.getAll()
  }

  render() {
    const { characters } = this.props;
    return (
      <div className="cards">
        {
          characters.map(character => (
            <div className="container" key={character.id}>
              <div className="card">
                <span>{character.name}</span>
                <img src={character.image} alt={character.name}/>
                <p className="text-center">{character.status} : {character.species}</p>
              </div>
            </div>
          ))
        }
      </div>
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.charactersReducer;
}

export default connect(mapStateToProps, charactersActions)(Characters)