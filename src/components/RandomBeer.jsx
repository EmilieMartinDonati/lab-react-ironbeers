import React, {useState, useEffect} from "react";
import Header from "./Header";
import axios from 'axios';


const RandomBeer = () => {

    const [randomBeer, setRandomBeer] = useState([]); 

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
            .then((dbResponse) => setRandomBeer(dbResponse.data))
            .catch((e) => console.log(e))
    }, []);

    return (
        <>
        <Header />
        <h1>Random beer</h1>
        <div className="card" style={{width: "50rem;"}}>
                            <img src={randomBeer.image_url} class="card-img-top" alt={randomBeer.name} />
                                <div class="card-body">
                                    <h5 class="card-title">{randomBeer.name}</h5>
                                    <p class="card-text">{randomBeer.tagline}</p>
                                    <p class="card-text">{randomBeer.first_brewed}</p>
                                    <p class="card-text">{randomBeer.attenuation_level}</p>
                                    <p class="card-text">{randomBeer.contributed_by}</p>
                                    <p class="card-text"><bold>Created by :</bold> {randomBeer.contributed_by}</p>
                                </div>
                        </div>
        </>
    )
}


export default RandomBeer;