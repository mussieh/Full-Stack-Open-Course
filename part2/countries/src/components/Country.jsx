import { useState } from "react";

const Country = ({ country, visible }) => {
    const [isCountryViewVisible, setIsCountryViewVisible] = useState(false);

    return (
        <>
            <p>
                {country.name.common}
                <button
                    onClick={() =>
                        setIsCountryViewVisible(!isCountryViewVisible)
                    }
                >
                    {isCountryViewVisible ? "hide" : "show"}
                </button>
            </p>
            {isCountryViewVisible || visible ? (
                <div className="country-view">
                    <h1>{country.name.common}</h1>
                    <p>Capital {country.capital ? country.capital[0] : ""}</p>
                    <p>Area {country.area}</p>

                    <h4>Languages: </h4>
                    <ul className="country-language-list">
                        {Object.values(country.languages).map((language) => {
                            return <li key={language}>{language}</li>;
                        })}
                    </ul>
                    <img className="country-img" src={country.flags.svg} />
                </div>
            ) : null}
        </>
    );
};

export default Country;
