import React from "react";
// import {characters} from "../characters";
import "./App.css"
import ErrorBoundary from "../components/ErrorBoundary";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Main from "../components/Main";
import CharacterDetail from "../containers/CharacterDetail";

function App() {
    // constructor(props){
    //     super(props);
    //     this.state = {
    //         characters: [],
    //         searchfield: ""
    //     }
    //     this.onSearchChange = this.onSearchChange.bind(this);
    // }

    // componentDidMount(){
    //     this.setState({
    //         characters: characters
    //     })
    // }

    // onSearchChange(e){
    //     this.setState({
    //         searchfield: e.target.value
    //     })
    // }

    // render(){
    //     const {characters, searchfield} = this.state;
    //     const filteredCharacters = characters.filter(character => {
    //         return (character.name.toLowerCase().includes(searchfield.toLowerCase()));
    //     })

        // return 
        // !characters.length ? 
        // <h1>Loading</h1> :
        return (
            
            <div className="tc">
                <Router>
                        <ErrorBoundary>
                            <Route path="/" exact component={Main}/>
                            <Route path="/character/:id" component={CharacterDetail}/>
                        </ErrorBoundary>
  
                </Router>

                <div>
                    <p className="copyright">Zaltick 2020 ©</p>
                </div>

            </div>
        )
}

// }

export default App