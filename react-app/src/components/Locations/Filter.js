import "../../stylesheets/_Filter.scss";

const Filter = (props) => {
    const handleInputChange = (event) => {
        props.handleFilter({
            value: event.target.value,
            key: event.target.id,
        });
    };

    const handleFormSubmit = (event) => {
        event.preventDefault();
    };

    return (
        <form className="form" onSubmit={handleFormSubmit}>
            <input
                type="text"
                name="searchBox"
                id="searchBox"
                className="searchBox"
                placeholder="Type a locations's name"
                onChange={handleInputChange}
                autoFocus
            />
            <div className="selectWrapper">
                <label className="label" htmlFor="type">
                    Type
        </label>
                <select
                    className="select"
                    name="type"
                    id="type"
                    onChange={handleInputChange}
                >
                    <option value="all">All</option>
                    <option value="Planet">Planet</option>
                    <option value="Cluster">Cluster</option>
                    <option value="Microverse">Microverse</option>
                    <option value="Resort">Resort</option>
                </select>
                <label className="label" htmlFor="dimension">
                    Dimension
        </label>
                <select
                    className="select"
                    name="dimension"
                    id="dimension"
                    onChange={handleInputChange}
                >
                    <option value="all">All</option>
                    <option value="Dimension C-137">Dimension C-137</option>
                    <option value="Dimension 5-126">Dimension 5-126</option>
                    <option value="Post-Apocalyptic Dimension">Post-Apocalyptic Dimension</option>
                    <option value="Replacement Dimension">Replacement Dimension</option>
                    <option value="Cronenberg Dimension">Cronenberg Dimension</option>
                    <option value="Fantasy Dimension">Fantasy Dimension</option>
                    <option value="unknown">Unknown</option>
                </select>
            </div>
        </form>
    );
};

export default Filter;