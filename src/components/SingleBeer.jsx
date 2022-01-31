import React, {useState, useEffect} from "react";
import Header from "./Header";
import axios from 'axios';
import {useOutletContext, useParams} from 'react-router-dom';

const SingleBeer = () => {

    const params = useParams();

    const [beer, setBeer] = useState([]);

    const beers = useOutletContext();

    console.log(beers);

    console.log(params.beerId);

    useEffect(() => {
        const foundBeer = beers.find((elem) => elem._id === params.beerId);

        console.log(foundBeer);
   
       setBeer(foundBeer);
    })

   
    

    return (
        
        <div className="card">
                            <img src={beer.image_url} class="card-img-top" alt={beer.name} />
                            
                                <div class="card-body">
                                    <h5 class="card-title">{beer.name}</h5>
                                    <p class="card-text">{beer.tagline}</p>
                                    <p class="card-text"><bold>Created by :</bold> {beer.contributed_by}</p>
                                </div>
                        </div>

    )
}


export default SingleBeer;