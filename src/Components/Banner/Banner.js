import React, {useEffect, useState} from 'react'
import {API_KEY, imageUrl} from "../../constants/constants";

import axios from '../../constants/axios'

import './Banner.css'
function Banner() {
    const [movie, setMovie] = useState()
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 21);
        axios
            .get(`trending/all/week?api_key=${API_KEY}&language=en-US`)
            .then((res) => {

                const movies = res.data.results;
                const randomMovie = movies[randomIndex];
                setMovie(randomMovie);
            })
    }, []);
    return (

        <div
            className="banner"
            style={{
                backgroundImage: `URL(${movie
                    ? imageUrl + movie.backdrop_path
                    : ''})`
            }}>
            <div className='content'>
                <h1 className='title'>{
                        movie
                            ? movie.title
                            : " "
                    }
                </h1>
                <div className='banner_buttons'>
                    <button className='button'>Play</button>
                    <button className='button'>My List</button>

                </div>
                <h1 className='description'>{
                        movie
                            ? movie.overview
                            : " "
                    }</h1>

            </div>
            <div className="fade_bottom"></div>

        </div>
    )
}

export default Banner
