import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Characters from './components/Characters/App';
import Locations from './components/Locations/App';
import Episodes from './components/Episodes/App'

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Characters} />
            <Route path="/char/:id" component={Characters} />
            <Route path="/locations" component={Locations} />
            <Route path="/episodes" component={Episodes} />
        </Router>
    )
};

export default App;