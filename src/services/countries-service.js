
import axios from "axios";

export async function getAllCountries() {
    try {
        const response = await axios.get('https://restcountries.com/v3.1/all?fields=name,cca3,cca2,flags,capital,area,borders');
        return response.data;
    } catch (error) {
        console.log('An error has happened obtaining all countries data', error);
    }
}

export async function getCountryById(cca3) {
    try {
        const response = await axios.get(`https://restcountries.com/v3.1/alpha/${cca3}`);
        return response.data[0];
    } catch (error) {
        console.log('An error has happened obtaining a country data', error);
    }
}

export function getTransformedFlag(cca2) {
    const newFlag = (`https://flagpedia.net/data/flags/icon/72x54/${cca2}.png`);
    return newFlag;
}