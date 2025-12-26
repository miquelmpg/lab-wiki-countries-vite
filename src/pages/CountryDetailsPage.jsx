
import { useParams } from "react-router-dom";
import CountryCard from "../components/country-card/country-card";
import { useState, useEffect } from "react";
import * as CountryService from '../services/countries-service'

function CountryDetails() {
    const [country, setCountry] = useState(null);
    const { countryId } = useParams();

    useEffect(()=> {
        async function getCountry(id) {
            const countryInfo = await CountryService.getCountryById(id);
            setCountry(countryInfo);
        }
        getCountry(countryId);
    }, [countryId]);
    
    return (
        <div> 
            {!country && <div className="mt-5">Loading...</div>}
            
            {country && 
            <>
                <div className="fs-2 fw-semibold m-3">Country Details</div>
                {<CountryCard {...country} home={false} detail={true}/>}
            </>}
        </div>
    );
}

export default CountryDetails;
