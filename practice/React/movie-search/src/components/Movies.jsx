/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import MovieCard from "./MovieCard";

function Movies({ searchValue, isAscending }) {
    function compare(a, b) {
        if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
        }
        if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
        }
        return 0;
    }

    const [movieData, setMovieData] = useState([]);

    useEffect(() => {
        const url = `https://api.tvmaze.com/search/shows?q=${searchValue}`;
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                console.log(data[0]);
                prepareData(data);
            });
    }, [searchValue, isAscending]);

    const prepareData = (data) => {
        var movies = [];
        for (let i = 0; i < data.length; i++) {
            let movie = data[i].show;
            if (movie.name.toLowerCase().includes(searchValue.toLowerCase()))
                movies.push({
                    name: movie.name,
                    image: movie.image,
                });
        }

        movies.sort(compare);
        if (!isAscending) {
            movies.reverse();
        }

        setMovieData(movies);
    };

    return (
        <>
            <div className="movies">
                {movieData.map((movie, index) => (
                    <MovieCard {...movie} key={index} />
                ))}
            </div>
        </>
    );
}

export default Movies;
