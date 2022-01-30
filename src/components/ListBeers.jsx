import React, { useEffect, useState} from "react";
import Header from "./Header";
import axios from "axios";
import {NavLink, Outlet} from "react-router-dom";


const ListBeers = () => {

    const [beers, setBeers] = useState([]);

    useEffect(() => {
        axios.get(`https://ih-beers-api2.herokuapp.com/beers`)
            .then((dbResponse) => setBeers(dbResponse.data))
            .catch((e) => console.log(e))
    }, []);

    return (
        <>
            <Header />
            <Outlet context={beers}/>
            <>
                {beers.map((beer) => {
                    return (
                        <div className="card" style={{width: "50rem;"}}>
                            <img src={beer.image_url} class="card-img-top" alt={beer.name} />
                                <div class="card-body">
                                    <h5 class="card-title">{beer.name}</h5>
                                    <p class="card-text">{beer.tagline}</p>
                                    <p class="card-text"><bold>Created by :</bold> {beer.contributed_by}</p>
                                    <NavLink to={`/beers/${beer._id}`}>See details</NavLink>
                                </div>
                        </div>
                    )
                })}


        </>
        </>
    )
}


export default ListBeers;