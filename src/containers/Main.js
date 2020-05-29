import React, { Component } from "react";
import CardList from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import {characters} from "../characters";


class Main extends Component {
    constructor(props){
        super(props);
        this.state = {
            characters: [],
            searchfield: ""
        }
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    componentDidMount(){
        this.setState({
            characters: characters
        })
    }

    onSearchChange(e){
        this.setState({
            searchfield: e.target.value
        })
    }

    render(){
        const {characters, searchfield} = this.state;
        const filteredCharacters = characters.filter(character => {
            return (character.name.toLowerCase().includes(searchfield.toLowerCase()));
        })

        return !characters.length ? 
        <h1>Loading</h1> :
        (
            <div className="tc">
                <h1 className="main-title">Super Smash Brothers Ultimate<br/> Characters</h1>
                <SearchBox searchChange={this.onSearchChange}/>

                <Scroll>
                    <CardList characters={filteredCharacters}/>
                </Scroll>

            </div>
        )
}

}

export default Main