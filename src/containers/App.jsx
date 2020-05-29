import React from "react";
// import {characters} from "../characters";
import "./App.css"
import ErrorBoundary from "../components/ErrorBoundary";
import { BrowserRouter as Router, Route} from "react-router-dom";
import Main from "./Main";
import CharacterDetail from "../containers/CharacterDetail";

function App() {
        return (
            
            <div className="tc body">
                <Router>
                        <ErrorBoundary>
                            <Route path="/" exact component={Main}/>
                            <Route path="/character/:id" component={CharacterDetail}/>
                        </ErrorBoundary>
  
                </Router>

                <div>
                    <p className="copyright"><strong>Zaltick 2020 ©</strong></p>
                </div>

            </div>
        )
}

// }

export default App