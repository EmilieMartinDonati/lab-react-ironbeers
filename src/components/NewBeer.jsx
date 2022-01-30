import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import axios from "axios";

const NewBeer = () => {

    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [tagline, setTagline] = useState('');
    const [description, setDescription] = useState('');
    const [first_brewed, setFirst_brewed] = useState('');
    const [brewers_tip, setBrewers_tip] = useState('');
    const [attenuation_level, setAttenuation_level] = useState(0);
    const [contributed_by, setContributed_by] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const data = {
            name,
            tagline,
            description,
            first_brewed,
            brewers_tip,
            attenuation_level,
            contributed_by,
        };

        axios
            .post(`https://ih-beers-api2.herokuapp.com/beers/new`, data)
            .then((response) => {
                console.log(response);
                navigate("/beers");
            })
            .catch((error) => console.log(error))

    };

        return (
            <>
                <Header />
                <form>
                    <label htmlFor="name" onSubmit={handleSubmit}>NAME</label>
                    <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
                    <label htmlFor="tagline">TAGLINE</label>
                    <input type="text" name="tagline" onChange={(e) => setTagline(e.target.value)} />
                    <label htmlFor="description">DESCRIPTION</label>
                    <input type="text" name="description" onChange={(e) => setDescription(e.target.value)} />
                    <label htmlFor="first_brewed">FIRST BREWED</label>
                    <input type="text" name="first_brewed" onChange={(e) => setFirst_brewed(e.target.value)} />
                    <label htmlFor="brewers_tip">BREWERS TIP</label>
                    <input type="text" name="brewers_tip" onChange={(e) => setBrewers_tip(e.target.value)} />
                    <label htmlFor="attenuation_level">ATTENUATION LEVEL</label>
                    <input type="number" name="attenuation_level" onChange={(e) => setAttenuation_level(e.target.value)} />
                    <label htmlFor="contributed_by">CONTRIBUTED BY</label>
                    <input type="text" name="contributed_by" onChange={(e) => setContributed_by(e.target.value)} />
                    <button>Add a new beer</button>
                </form>
            </>
        )
    }


    export default NewBeer;