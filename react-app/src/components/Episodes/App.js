import { React, useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";

import Filter from "./Filter";
import EpisodeList from "./EpisodeList";
import EpisodeDetail from "./EpisodeDetail";

import Header from "../Main/Header";
import Footer from "../Main/Footer";
import NavBar from '../NavBar/index'

import "../../stylesheets/_App.scss";

import { getEpisodesFromAPI } from "../../services/getDataFromAPI";

function App() {
    const [episodes, setEpisodes] = useState([]);
    const [nameFilter, setNameFilter] = useState("");
    const [air_dateFilter, setAir_DateFilter] = useState("all");
    const [episodeFilter, setEpisodeFilter] = useState("all");

    useEffect(() => {
        getEpisodesFromAPI().then((data) => {
            setEpisodes(data);
        });
    }, []);

    episodes.sort(function (a, b) {
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
        else if (filterData.key === "air_date") setAir_DateFilter(filterData.value);
        else if (filterData.key === "episode") setEpisodeFilter(filterData.value);
    };

    const renderUnfilteredList = () => {
        setNameFilter("");
        setAir_DateFilter("all");
        setEpisodeFilter("all");
    };

    const filteredEpisodes = episodes
        .filter((result) => {
            return result.name.toUpperCase().includes(nameFilter.toUpperCase());
        })
        .filter((result) => {
            if (air_dateFilter === "all") return result;
            else return result.air_date === air_dateFilter;
        })
        .filter((result) => {
            if (episodeFilter === "all") return result;
            else return result.episode === episodeFilter;
        });

    const renderEpisodeDetail = (props) => {
        const episodeId = parseInt(props.match.params.id);
        const foundEpisode = episodes.find((result) => {
            return result.id === episodeId;
        });
        return <EpisodeDetail episode={foundEpisode} />;
    };

    return (
        <div className="App">
            <NavBar />
            <Header renderUnfilteredList={renderUnfilteredList} />
            <main>
                <Switch>
                    <Route exact path="/episodes">
                        <Filter handleFilter={handleFilter} />
                        <EpisodeList filteredEpisodes={filteredEpisodes} />
                    </Route>
                    <Route path="/episodes/:id" render={renderEpisodeDetail} />
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

export default App;