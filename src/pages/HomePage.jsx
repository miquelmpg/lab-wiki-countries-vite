
import CountryCard from "../components/country-card/country-card";
import { useState, useEffect } from "react";
import * as CountryService from '../services/countries-service';

function HomePage() {
    const [countries, setCountries] = useState(null);
    
    useEffect (() => {
        async function getCountries() {
            const countries = await CountryService.getAllCountries();
            setCountries(countries);
        }
        getCountries();
    }, []);

    return (
        <>
            <div className="fs-2 fw-semibold m-3">WikiCountries: Your Guide to the World</div>
            {!countries ? <div className="mt-5">Loading...</div> : countries.map((country) => <CountryCard key={country.cca3} {...country} home={true} detail={false}/>)}
        </>
    );
}

export default HomePage;
