import React from "react";
import Card from "./Card";
import {Link} from "react-router-dom"


const CardList = ({ characters}) => {
    return(
    <div>
        {
            characters.map((character, i) => {
                return (
                <Link  key={i}  to={`/character/${character.name}`}>
                <Card 
               
                id={characters[i].id} 
                name={characters[i].name} 
                series={characters[i].series}
                image={characters[i].images}
               

                />
                </Link>
            ); 
        })
        }
        
        </div>
    )

}

export default CardList