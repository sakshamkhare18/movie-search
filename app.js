const movieInput = document.getElementById("movieInput");
const searchBtn = document.querySelector("#searchBtn");
const title = document.getElementById("title");
const ratings = document.getElementById("ratings");
const year = document.getElementById("year");
const plot = document.getElementById("plot");
const director = document.getElementById("director");
const runtime = document.getElementById("runtime")
const language = document.getElementById("language")
const actors = document.getElementById("actors")
const boxOffice =document.getElementById("boxOffice")
const genre=document.getElementById("genre")
const Poster = document.getElementById("Poster")


const movieCard = document.getElementById("movieCard")
const msg = document.getElementById("msg")
msg.style.display = "none";
searchBtn.addEventListener("click",
    async function  (){
        console.log(movieInput.value);

        if (movieInput.value === "") {
            movieCard.style.display = "none";
            msg.innerText ="Enter a movie name"
             msg.style.color ="red";
            msg.style.display = "block";
            return;
        }
        else {
            console.log("validation apporve");

        }
        const movieName = movieInput.value;
        const url = `https://www.omdbapi.com/?apikey=1f9d1fb5&t=${movieName}`;
        const response = await fetch(url);

        const data = await response.json();
        console.log(data);
        if (data.Response === "False") {
            movieCard.style.display = "none";
            console.log("Movie Not Found");
          
            msg.innerText ="Movie not found ! search again"
            msg.style.color ="red";
            msg.style.display = "block";
            


        }
        else {
            msg.style.display = "none";
            console.log("Movie Found");
            movieCard.style.display = "flex";
            Poster.src = data.Poster;
            title.innerText = data.Title;
            ratings.innerText = "⭐" + data.Ratings[0].Value;
            year.innerText = "📅" + data.Year;
            plot.innerText = data.Plot;
            director.innerText = data.Director;
            runtime.innerText = data.Runtime;
            language.innerText = data.Language;
            actors.innerText = data.Actors;
            boxOffice.innerText= data.BoxOffice;
            genre.innerText = data.Genre;

        }


    })

   