import React from "react";

function MovieCard({ name, image }) {
    return (
        <div className="movie-card">
            <img src={image && image.medium} alt={name} />
            <p>{name}</p>
        </div>
    );
}

export default MovieCard;
