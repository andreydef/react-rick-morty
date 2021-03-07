import { React, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Filter from "./Filter";
import LocationList from "./LocationList";
import LocationDetail from "./LocationDetail";

import Header from "../Main/Header";
import Footer from "../Main/Footer";
import NavBar from '../NavBar/index'

import "../../stylesheets/_App.scss";

import { getLocationsFromAPI } from "../../services/getDataFromAPI";

function App() {
    const [locations, setLocations] = useState([]);
    const [nameFilter, setNameFilter] = useState("");
    const [typeFilter, setTypeFilter] = useState("all");
    const [dimensionFilter, setDimensionFilter] = useState("all");

    useEffect(() => {
        getLocationsFromAPI().then((data) => {
            setLocations(data);
        });
    }, []);

    locations.sort(function (a, b) {
        const charA = a.name.toUpperCase();
        const charB = b.name.toUpperCase();
        if (charA < charB) {
            return -1;
        }
        if (charA > charB) {
            return 1;
        }
        return 0;
    });

    const handleFilter = (filterData) => {
        if (filterData.key === "searchBox") setNameFilter(filterData.value);
        else if (filterData.key === "type") setTypeFilter(filterData.value);
        else if (filterData.key === "dimension") setDimensionFilter(filterData.value);
    };

    const renderUnfilteredList = () => {
        setNameFilter("");
        setTypeFilter("all");
        setDimensionFilter("all");
    };

    const filteredLocations = locations
        .filter((location) => {
            return location.name.toUpperCase().includes(nameFilter.toUpperCase());
        })
        .filter((location) => {
            if (typeFilter === "all") return location;
            else return location.type === typeFilter;
        })
        .filter((location) => {
            if (dimensionFilter === "all") return location;
            else return location.dimension === dimensionFilter;
        });

    const renderLocationDetail = (props) => {
        const locationId = parseInt(props.match.params.id);
        const foundLocation = locations.find((location) => {
            return location.id === locationId;
        });
        return <LocationDetail location={foundLocation} />;
    };

    return (
        <div className="App">
            <NavBar />
            <Header renderUnfilteredList={renderUnfilteredList} />
            <main>
                <Switch>
                    <Route exact path="/location">
                        <Filter handleFilter={handleFilter} />
                        <LocationList filteredLocations={filteredLocations} />
                    </Route>
                    <Route path="/location/:id" render={renderLocationDetail} />
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

export default App;