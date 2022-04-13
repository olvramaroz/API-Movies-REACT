import React, { useEffect, useState } from 'react'
import Axios from 'axios'

function Main() {
    const apiKey = 'b1e3eec6badf8d3df7fd027c7d4dd4f1';
    const baseURL = 'https://api.themoviedb.org/3';
    const trendingWeekly = '/trending/movie/week?api_key='
    const apiURL = baseURL + trendingWeekly + apiKey;
    const imagePoster = 'https://image.tmdb.org/t/p/w500'


    // on doit stocker les données qu'on a récupéré de l'API dans un []
    const [data, setData] = useState([]);


    /* permet de fetch la data */
    useEffect(() => {

        Axios.get(apiURL)
        .then(res => {
            console.log('on a bien les données ->', res.data)
            
            /* maintenant qu'on a vérifié qu'on a bien récupéré les données, 
                on va les envoyer à setData
             sans oublier le nom de l'objet à envoyer 'results' */
            setData(res.data.results)

        })
        .catch(err => console.log(err))

    }, [])


    /* on va boucler à l'intérieur de la data pour tout afficher*/
    return(
        <>
        {console.log('render ::', data)}
        
        {
            data.length && data.map(movie => {
                return (
                
                    <section className="card">
                        <section className="front">
                            <img className="images" src={imagePoster+movie.poster_path} alt={movie.title} />
                            <div className="title-rating">
                                <h2 className="title">{movie.title}</h2>
                                <p className="rating">{movie.vote_average}</p>
                            </div>
                        </section>
                        <section className="back">
                            <p className="description">{movie.overview}</p>
                            <p className="date">Date de sortie : {movie.release_date}</p>
                        </section>
                    </section>
              
                )
            })
        }

        </>
    )
    
}
export default Main;