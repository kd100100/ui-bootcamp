const createMovieCard = (movieData, movieIndex) => {
    const sectionElement = document.createElement("section");
    sectionElement.classList.add("movie-card");

    const imageElement = document.createElement("img");
    imageElement.src = movieData.imageUrl;
    imageElement.alt = movieData.title;
    imageElement.classList.add("movie-image");

    const titleElement = document.createElement("h1");
    titleElement.innerText = movieData.title;

    const buttonElement = document.createElement("button");
    buttonElement.innerText = "View Details";
    buttonElement.addEventListener("click", () => openModal());
    buttonElement.classList.add("book-now-button");

    sectionElement.appendChild(imageElement);
    sectionElement.appendChild(titleElement);
    sectionElement.appendChild(buttonElement);

    return sectionElement;
};

const displayMovies = () => {
    const movieContainer = document.getElementById("movie-container");
    console.log(movieContainer);
    movieList.forEach((movieData, index) => {
        movieContainer.appendChild(createMovieCard(movieData, index));
    });
};

const showDetails = (movieIndex) => {
    const movieBanner = document.getElementById("movie-banner");
    const movieData = movieList[movieIndex];

    const movieDetails = `
        <img src="${movieData.imageUrl}" alt="${movieData.title}" />
        <div>
            <h1>${movieData.title}</h1>
            <p class="movie-description">${movieData.description}</p>
            <h2>Seats Available: ${movieData.seats}</h2>
        </div>
    `;

    movieBanner.innerHTML = movieDetails;
};

displayMovies();
showDetails(0);
