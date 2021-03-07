import React from 'react';

import { BrowserRouter as Router, Route } from 'react-router-dom';

import Characters from './components/Characters/App';
import Location from './components/Locations/App';

const App = () => {
    return (
        <Router>
            <Route path="/" exact component={Characters} />
            <Route path="/char/:id" component={Characters} />
            <Route path="/location" component={Location} />
        </Router>
    )
};

export default App;