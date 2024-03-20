import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import CountryList from "./components/CountryList";

const countriesBaseURL = "https://studies.cs.helsinki.fi/restcountries/api/all";
const baseURL = "https://studies.cs.helsinki.fi/restcountries/api/name";

function App() {
    const [countryName, setCountryName] = useState("");
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        axios.get(countriesBaseURL).then((response) => {
            setCountries(response.data);
        });
    }, []);

    return (
        <div>
            <span>Find Countries</span>{" "}
            <input
                type="text"
                value={countryName}
                onChange={(e) => setCountryName(e.target.value)}
            />
            <CountryList countryName={countryName} countries={countries} />
        </div>
    );
}

export default App;
