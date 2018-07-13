import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Post from './post/Post';

class Routes extends React.Component {
    render() {
        return(
            <Router>
                <div>
                    <Route exact path="/" component={App}></Route>
                    <Route path="/post" component={Post}></Route>
                </div>
            </Router>
        );
    }
}

export default Routes;