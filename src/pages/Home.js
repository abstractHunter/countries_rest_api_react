import React, {useEffect, useState} from 'react'
import Card from '../components/Card'
import ToolBar from '../components/ToolBar'
import { Loader } from '../styles/components/loader'
import { Container } from '../styles/pages/home'
import { Page } from '../styles/pages/page'

function Home() {

    const [countries, setCountries] = useState([])
    const [loading, setLoading] = useState(true)

    const fetchCountries = async () => {
        const response = await fetch(
            "https://restcountries.com/v3.1/all"
        );
        const data = await response.json();
        
        // sort countries alphabetically
        data.sort((a, b) => {
            if (a.name.common.toLowerCase() < b.name.common.toLowerCase()) {
                return -1;
            }
            else if (a.name.common.toLowerCase() > b.name.common.toLowerCase()) {
                return 1;
            }
            return 0;
        });

        setCountries(data)
        setLoading(false)
    }

    useEffect(() => {
        fetchCountries()
    }, []);

    return (
        <Page>
            <ToolBar />
            <Container>
                {loading && (
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
