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
                placeholder="Type a episode's name"
                onChange={handleInputChange}
                autoFocus
            />
            <div className="selectWrapper">
                <label className="label" htmlFor="air_date">Air Date</label>
                <select
                    className="select"
                    name="air_date"
                    id="air_date"
                    onChange={handleInputChange}
                >
                    <option value="all">All</option>
                    <option value="December 2, 2013">December 2, 2013</option>
                    <option value="December 9, 2013">December 9, 2013</option>
                    <option value="December 16, 2013">December 16, 2013</option>
                    <option value="January 13, 2014">January 13, 2014</option>
                    <option value="January 20, 2014">January 20, 2014</option>
                    <option value="January 27, 2014">January 27, 2014</option>
                    <option value="March 10, 2014">March 10, 2014</option>
                </select>
                <label className="label" htmlFor="episode">Episode</label>
                <select
                    className="select"
                    name="episode"
                    id="episode"
                    onChange={handleInputChange}
                >
                    <option value="all">All</option>
                    <option value="S01E01">S01E01</option>
                    <option value="S01E02">S01E02</option>
                    <option value="S01E03">S01E03</option>
                    <option value="S01E04">S01E04</option>
                    <option value="S01E05">S01E05</option>
                    <option value="S01E06">S01E06</option>
                    <option value="S01E07">S01E07</option>
                </select>
            </div>
        </form>
    );
};

export default Filter;