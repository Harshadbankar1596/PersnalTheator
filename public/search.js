document.addEventListener("DOMContentLoaded", () => {
  const searchvalue = document.getElementById("movesearch");
  const btn = document.getElementById("btn");
  const moves = document.getElementsByClassName("moves")[0];
  const loader = document.getElementById("loader");
  let data;

  btn.addEventListener("click", (e) => {
    // e.preventDefault(); // prevent form from submitting
    const value = searchvalue.value.trim();
    if (value) {
      localStorage.setItem("svalue", value);
      moves.innerHTML = ""; // clear previous results
      loader.style.display = "flex"; // show loader
      call1(); // fetch new data
    } else {
      alert("Please enter a movie name.");
    }
  });

  async function call1() {
    try {
      let url = await fetch(
        "https://imdb.iamidiotareyoutoo.com/search?q=" + localStorage.getItem("svalue")
      );
      data = await url.json();
      if(data.description.length == 0){
        alert("Search result Not Avalable")
      }
      call();
      console.log(data.description);
    } catch (error) {
      console.error("Error fetching data:", error);
      alert("Failed to fetch movie data.");
      loader.style.display = "none";
    }
  }

  async function call() {
    try {
      moves.innerHTML = ""; // clear before adding new cards
      for (let i = 0; i < data.description.length; i++) {
        let rr = Math.floor(Math.random() * 5) + 5;
        let pp = Math.floor(Math.random() * 5) + 5;
        let like = Math.floor(Math.random() * 1000);

        let div = `<a href="/move"><div class="movebox" onclick="getmove(${i})">
            <div class="moveboxrate">
                <img src="${data.description[i]["#IMG_POSTER"]}" alt="" class="moveboximg">
                <p class="rateing">⭐ ${rr}.${pp}/10 &nbsp; 👍 ${like}K</p>
            </div>
            <div class="movename">
                <p class="movenamep">${data.description[i]["#TITLE"]}</p>
            </div>
        </div></a>`;
        moves.innerHTML += div;
      }
    } catch (error) {
      console.error("Error displaying movie data:", error);
      moves.innerHTML = `<p style="color:white">Unable to display movie list 😞</p>`;
    } finally {
      loader.style.display = "none";
    }
  }

  window.getmove = function (id) {
    localStorage.setItem("id", data.description[id]["#IMDB_ID"]);
  };

  // Auto load if there's already a search value
  if (localStorage.getItem("svalue")) {
    loader.style.display = "flex";
    call1();
  }
});
