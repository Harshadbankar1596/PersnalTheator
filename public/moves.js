const searchvalue = document.getElementById("movesearch");
const btn = document.getElementById("btn");



btn.addEventListener("click", () => {
  const value = searchvalue.value.trim();
  if (value) {
    localStorage.setItem("svalue", value);
  } else {
    alert("Please enter a movie name.");
  }
});


let data;

async function call() {
    try {
        let id = localStorage.getItem("id");
        let url = await fetch("https://imdb.iamidiotareyoutoo.com/search?tt=" + id);
        data = await url.json();
        console.table(data);
        call2();
    } catch (error) {
        console.error("Failed to fetch data:", error);
        alert("Movie not available ☹");
        window.location.replace("http://127.0.0.1:2010/search?search=",localStorage.getItem("svalue"));
        // window.location.replace("http://127.0.0.1:2010");
    }
}

call();

async function call2() {
    let movename = document.getElementById("movename");
    let ratebox = document.getElementById("ratebox");
    let aboutsection = document.getElementById("aboutsection");
    let moveposter = document.getElementById("moveposter");
    let moveinfobox = document.getElementsByClassName("moveinfobox")[0];

    try {
        let top = data?.top;

        let rate = top?.ratingsSummary?.aggregateRating ?? "N/A";
        let like = top?.ratingsSummary?.voteCount ?? "N/A";
        let genres = top?.genres?.genres ?? [];
        let release = top?.releaseDate;
        let runtime = top?.runtime?.displayableProperty?.value?.plainText ?? "N/A";
        let poster = top?.primaryImage?.url ?? "";
        let title = top?.titleText?.text ?? "";
        let ogtitle = top?.originalTitleText?.text ?? "";

        let type = genres.map(g => g.id).join(", ");
        let date = release ? `${release.day} ${release.month} ${release.year}` : "Unknown";
        let date2 = data.short.datePublished

        movename.textContent = title || ogtitle || "Title not found";
        ratebox.innerHTML = `⭐${rate}/10 &nbsp; &nbsp; ${like} likes`;
        aboutsection.innerHTML = `${runtime} &nbsp; : &nbsp; ${type} &nbsp; : &nbsp;Date ${date2}`;
        moveposter.src = poster || "fallback.jpg"; // add fallback image if needed
        moveinfobox.style.backgroundImage = `url('${poster || "fallback.jpg"}')`;
        document.getElementById("loader").style.display = "none"; // ✅ Hides loader
    } catch (error) {
        console.error("Failed to insert data:", error);
    }
}
