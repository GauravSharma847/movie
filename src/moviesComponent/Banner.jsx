import React from 'react'
// banner
function Banner() {
    let [firstMovie, setFirstMovie] = React.useState("");         // initially there is no movie
    React.useEffect(function () {          // data mangane wala kaam useEffect me hota hai iske andar ka function just 
                                                // after first render run hota hai
        async function fetchData() {
            // it is used to make request
            let response = await fetch("https://api.themoviedb.org/3/trending/movie/week?api_key=16e7df484a81f634d85b2f25f938585d");
            // response -> you will get in buffer -> convert it into json
            let data = await response.json();
            console.log("data", data);
            let movies = data.results;
            // console.log("movies", movies)
            setFirstMovie(movies[0]);
        }
        fetchData();
    }, []);
    return (
        <> 
            {firstMovie === "" ?      // if the movie is empty thast means it is  still loading otherwise it will print 
                                                        // title and image after some time
                <h2>Movies are yet to come</h2 > : <>
                    <h2>{firstMovie.original_title}</h2>
                    <img src={"https://image.tmdb.org/t/p/original" + firstMovie.backdrop_path} className="banner_img"></img>
                </>

            }
        </>
    )
}
export default Banner;