import React, { Component } from "react";
import {characters} from "../characters";
import "./App.css"
import {Link} from "react-router-dom"

class CharacterDetail extends Component{
    constructor(props){
        super();
        this.state= {
            characterdetail: []
        }
    }

    render(){
        // let x = characters[this.props.match.params.id - 1].name
        // // const x = characters[this.props.match.params.name]
        const x = characters.filter(character => character.name.toLowerCase() === this.props.match.params.id.toLowerCase())[0];
        // console.log(characters.filter(character => character.name === this.props.match.params.id))

        return(
            <div>
                <nav>
                    <Link  to={"/"}>
                    <li className="go-back-link">Go Back</li>
                    </Link>
                </nav>
                

            <div className="container">
               

                <div className="container-2">
                <div className="character--card">

                    <h1 className="character-name">{x.name}</h1>
                    <p className="character-series">Series: {x.series}</p>
                    <img className="character-image" src={`${x.images}`} alt={x.name} />
                    <p className="character-desc">{x.description}</p>
                    
            </div>

            </div>
            </div>
            </div>
        )
    }
}

export default CharacterDetail