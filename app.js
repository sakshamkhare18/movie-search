const movieInput = document.getElementById("movieInput");
const searchBtn = document.querySelector("#searchBtn");
const loading = document.getElementById("loading")
const movieDetail = document.getElementById("movieDetail");

const movieContainer = document.getElementById("movieContainer")
const movieCard = document.getElementById("movieCard")
const msg = document.getElementById("msg")
msg.style.display = "none";
loading.style.display = "none";


async function searchMovie() {
    movieContainer.style.display = "grid";
movieDetail.style.display = "none";
movieDetail.innerHTML = "";
    movieContainer.innerHTML = "";
    loading.style.display = "block";
    console.log(movieInput.value);

    if (movieInput.value === "") {
        movieCard.style.display = "none";
        msg.innerText = "Enter a movie name"
        loading.style.display = "none";
        msg.style.color = "red";
        msg.style.display = "block";
        return;
    }
    else {
        console.log("validation apporve");

    }
    const movieName = movieInput.value;



    const url = `https://www.omdbapi.com/?apikey=1f9d1fb5&s=${movieName}`;

    const response = await fetch(url);

    const data = await response.json();



    console.log(data);
    console.log(data.Search);
    if (data.Response === "False") {

        // movieCard.style.display = "none";

        console.log("Movie Not Found");

        msg.innerText = "Movie not found ! search again"
        msg.style.color = "red";
        msg.style.display = "block";
        loading.style.display = "none";


    }
    else {
        for (let movie of data.Search) {
           
            const card =
                document.createElement("div");
            card.dataset.id = movie.imdbID;

            card.classList.add("movie-card");

            card.addEventListener("click", async function  () {
                
                const imdbID = card.dataset.id;
                console.log(imdbID);

                const url = `https://www.omdbapi.com/?apikey=1f9d1fb5&i=${imdbID}`;
                const response = await fetch(url);

                const data = await response.json();

                console.log(data);
movieContainer.style.display = "none";
movieDetail.style.display = "block";

        movieDetail.innerHTML = `
        <div class="detail-card">

            <img src="${data.Poster}" alt="poster" />

            
<div class="detail-info">
<h2>${data.Title}</h2>
            <p>⭐ Rating: ${data.imdbRating}</p>
            <p>📅 Year: ${data.Year}</p>

            <p>${data.Plot}</p>

            <p><b>Director:</b> ${data.Director}</p>
            <p><b>Runtime:</b> ${data.Runtime}</p>
            <p><b>Language:</b> ${data.Language}</p>
            <p><b>Actors:</b> ${data.Actors}</p>
            <p><b>Box Office:</b> ${data.BoxOffice}</p>
            <p><b>Genre:</b> ${data.Genre}</p>
</div>
        </div>
    `;
});
            card.innerHTML = `
               <img src="${movie.Poster}" alt="${movie.Title}">
              <h3>${movie.Title}</h3>
               <p>📅 ${movie.Year}</p>
               `;

            movieContainer.appendChild(card);

        }


        loading.style.display = "none";
        msg.style.display = "none";
        console.log("Movie Found");
        // movieCard.style.display = "flex";
        // Poster.src = data.Poster;
        // title.innerText = data.Title;
        // ratings.innerText = "⭐ " + data.Ratings[0].Value;
        // year.innerText = "📅 " + data.Year;
        // plot.innerText = data.Plot;
        // director.innerText = data.Director;
        // runtime.innerText = data.Runtime;
        // language.innerText = data.Language;
        // actors.innerText = data.Actors;
        // boxOffice.innerText= data.BoxOffice;
        // genre.innerText = data.Genre;

    }


}
searchBtn.addEventListener("click",
    async function () {
        searchMovie();
    })

movieInput.addEventListener("keypress", async function (event) {

    if (event.key === "Enter") {
        searchMovie();
    }

});

const Batman = document.querySelector("#Batman");
const Avatar = document.querySelector("#Avatar");
const Joker = document.querySelector("#Joker");
const Dune = document.querySelector("#Dune");
const Interstellar = document.querySelector("#Interstellar");
const Oppenheimer = document.querySelector("#Oppenheimer")

Batman.addEventListener("click", async function () {
    movieInput.value = "Dhurandhar";
    searchMovie();
})
Avatar.addEventListener("click", async function () {
    movieInput.value = "Avatar";
    searchMovie();
})
Joker.addEventListener("click", async function () {
    movieInput.value = "Joker";
    searchMovie();
})
Dune.addEventListener("click", async function () {
    movieInput.value = "dune";
    searchMovie();
})
Interstellar.addEventListener("click", async function () {
    movieInput.value = "Interstellar";
    searchMovie();
})
Oppenheimer.addEventListener("click", async function () {
    movieInput.value = "Oppenheimer";
    searchMovie();
})
