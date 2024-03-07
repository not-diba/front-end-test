// Create a simple React application that displays a list of countries and their capitals

// The application should have the following features:
//
// The list of countries and capitals should be fetched from an API
// The list should be displayed in the `CountriesPage`
// Each country should be displayed in a separate component
// The user should be able to filter the list by capital

/**
 * To fetch all countries, use the `/all/{capital}` endpoint.
 * */


const BASE_URL ="https://restcountries.com/v3.1";

/**
 * To filter by capital city, use the `/capital/{capital}` endpoint.
 * */
import React, { useEffect, useState } from 'react';


const CountryItem = ({country, capital}) => {
    return  <><strong>{country}</strong> - {capital}</>
}

const CountryList = ({ countries }) => {
    return (
        <ul>
            {countries.map((country, index) => (
                <li key={index}>
                   <CountryItem country={country.name.common} capital={country.capital}/>
                </li>
            ))}
        </ul>
    );
};

const CountriesPage = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch(`${BASE_URL}/all`);
                const data = await response.json();
                setCountries(data);
            } catch (error) {
                console.error('Error fetching countries:', error);
            }
        };

        fetchCountries();
    }, []);

    return (
        <div>
            <h1>Countries Page</h1>
            <CountryList countries={countries} />
        </div>
    );
};

export default CountriesPage;
