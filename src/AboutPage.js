import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom';
const AboutPage = () => {
    const [movie, setMovie] = useState({});
    const [searchparam]=useSearchParams()
    const id=JSON.parse(searchparam.get('object')).id ;
    useEffect(()=>{
          (async function getMovie(){
            const response = await fetch(`http://localhost:9000/api/movies/${id}`);
            const payload =await response.json();
            setMovie(payload[0]);
            console.log(payload[0])
          }())
    },[])
  return (
    <div class="card" style={{width: "90vw", margin:'10px'}} >
      <div class="card-body">
        <h5 class="card-title">{movie.title}</h5>
        <p class="card-text">{movie.overview}</p>
        <p class="card-text"><b>Tagline:</b> {movie.tagline}</p>
        <p class="card-text"><b>Runtime:</b> {movie.runtime} minutes</p>
        <p class="card-text"><b>Vote average:</b> {movie.vote_average}</p>
        <p class="card-text"><b>Vote Count:</b> {movie.vote_count}</p>
        <p class="card-text"><b>Status:</b> {movie.status}</p>
        <p class="card-text"><b>Release Date:</b> {movie.release_date}</p>
      </div>
    </div>
  )
}

export default AboutPage