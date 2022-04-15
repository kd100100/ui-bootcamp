const movieList = [
    {
        title: 'Batman1',
        description: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi animi voluptates ab quibusdam quidem iste, ratione molestiae fugiat architecto quasi sunt aut.',
        imageUrl:
            'https://img.ticketnew.com/tn/movie/24508/7.jpg?479925&x-oss-process=image/resize,m_mfit,w_330,h_400/quality,q_80',
        seats: 54,
    },
    {
        title: 'Batman2',
        description: 'ates ab quibusdam quidem iste, ratione molestiae fugiat architecto quasi sunt aut.',
        imageUrl:
            'https://img.ticketnew.com/tn/movie/24508/7.jpg?479925&x-oss-process=image/resize,m_mfit,w_330,h_400/quality,q_80',
        seats: 54,
    },
    {
        title: 'Batman3',
        description: 'L consectetur adipisicing elit. Nisi animi voluptates ab quibusdam quidem iste, ratione molestiae fugiat architecto quasi sunt aut.',
        imageUrl:
            'https://img.ticketnew.com/tn/movie/24508/7.jpg?479925&x-oss-process=image/resize,m_mfit,w_330,h_400/quality,q_80',
        seats: 54,
    },
    {
        title: 'Batman4',
        description: 'psum dolor sit amet consectetur adipisicing elit. Nisi animi voluptates ab quibusdam quidem iste, ratione molestiae fugiat architecto quasi sunt aut.',
        imageUrl:
            'https://img.ticketnew.com/tn/movie/24508/7.jpg?479925&x-oss-process=image/resize,m_mfit,w_330,h_400/quality,q_80',
        seats: 54,
    },
    {
        title: 'Batman5',
        description: 'quidem iste, ratione molestiae fugiat architecto quasi sunt aut.',
        imageUrl:
            'https://img.ticketnew.com/tn/movie/24508/7.jpg?479925&x-oss-process=image/resize,m_mfit,w_330,h_400/quality,q_80',
        seats: 54,
    },
];

const createMovieCard = (movieData, movieIndex) => {
    const sectionElement = document.createElement("section");
    sectionElement.classList.add("movie-card");
    const movieItem = `
            <img src="${movieData.imageUrl}" alt="${movieData.title}" />
            <div>
                <h1>${movieData.title}</h1>
                <button class="book-now-button" onclick="showDetails('${movieIndex}')">View Details</button>
            </div>
    `
    sectionElement.innerHTML = movieItem;
    return sectionElement;
}

const displayMovies = () => {
    const movieContainer = document.getElementById("movie-container");
    console.log(movieContainer);
    movieList.forEach((movieData, index) => {
        movieContainer.appendChild(createMovieCard(movieData, index));
    });
}

const showDetails = (movieIndex) => {
    const movieBanner = document.getElementById("movie-banner");
    const movieData = movieList[movieIndex]

    const movieDetails = `
        <img src="${movieData.imageUrl}" alt="${movieData.title}" />
        <div>
            <h1>${movieData.title}</h1>
            <p class="movie-description">${movieData.description}</p>
            <h2>Seats Available: ${movieData.seats}</h2>
        </div>
    `

    movieBanner.innerHTML = movieDetails
}

displayMovies()
showDetails(0)