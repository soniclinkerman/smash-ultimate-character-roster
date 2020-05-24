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
        const x = characters[this.props.match.params.id - 1]
        // // const x = characters[this.props.match.params.name]
        console.log(this.props.match.params)
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