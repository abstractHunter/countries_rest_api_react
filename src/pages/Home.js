import React, {useEffect, useState} from 'react'
import Card from '../components/Card'
import ToolBar from '../components/ToolBar'
import { Loader } from '../styles/components/loader'
import { Container } from '../styles/pages/home'
import { Page } from '../styles/pages/page'

function Home() {

    const [countries, setCountries] = useState([])
    const [allCountries, setAllCountries] = useState([]);
    const [isLoading, setIsLoading] = useState(true)
    const [isSearchingByName, setIsSearchingByName] = useState(false);


    const fetchCountries = async () => {
        const response = await fetch(
            "https://restcountries.com/v3.1/all"
        );
        const data = await response.json();

        
        setAllCountries(data)

        // shuffle data array to have different countries at top on each reload
        for (var a = 0; a < data.length; a++) {
            var x = data[a];
            var y = Math.floor(Math.random() * (a + 1));
            data[a] = data[y];
            data[y] = x;
        }

        const initialData = data.filter(country => country.region === "Africa")
        setCountries(initialData)
        setIsLoading(false)
    }

    useEffect(() => {
        fetchCountries()
    }, []);


    function searchByName(name) {
        setIsSearchingByName(true)

        setCountries([])
        setIsLoading(true)

        if (name === "") {
            setCountries(allCountries)
        }

        let response = allCountries.filter(country => country.name.common.toLowerCase().includes(name))

        setCountries(response)
        setIsLoading(false)
    }


    function filterByRegion(region) {
        setIsSearchingByName(false)

        setCountries([])
        setIsLoading(true)

        let response

        if (region === "All countries") {
            response = allCountries
        }
        else {
            response = allCountries.filter(country => country.region === region)
        }        

        // sort countries alphabetically
        response.sort((countryA, countryB) => {
            if (countryA.name.common.toLowerCase() < countryB.name.common.toLowerCase()) {
                return -1;
            }
            else if (countryA.name.common.toLowerCase() > countryB.name.common.toLowerCase()) {
                return 1;
            }
            return 0;
        });
        
        setCountries(response)
        setIsLoading(false)
    }


    return (
        <Page>
            <ToolBar searchByName={searchByName} filterByRegion={filterByRegion} isSearchingByName={isSearchingByName} />
            <Container>
                {isLoading && (
                    <Loader />
                )}
                
                {countries.map((item, key) => {
                    return (
                        <Card key={key} country={item} />
                    )
                })}
            </Container>
        </Page>
    )
}

export default Home
