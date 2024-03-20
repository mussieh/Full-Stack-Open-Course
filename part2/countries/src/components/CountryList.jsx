import Country from "./Country";

const CountryList = ({ countryName, countries }) => {
    const filteredCountries = countries.filter((country) =>
        country.name.common.toLowerCase().includes(countryName.toLowerCase())
    );

    if (filteredCountries.length === 1) {
        const country = filteredCountries[0];
        return <Country country={country} visible={true} />;
    } else if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
        console.log(filteredCountries);
        return (
            <>
                <ul className="countries-list">
                    {filteredCountries.map((country) => {
                        return (
                            <>
                                <Country
                                    key={country.name.common}
                                    country={country}
                                />
                            </>
                        );
                    })}
                </ul>
            </>
        );
    } else {
        return <p>Too many matches, specify another filter</p>;
    }
};

export default CountryList;
