const searchvalue = document.getElementById("movesearch");
const btn = document.getElementById("btn");

let moviesids = [
  "tt23849204", "tt1187043", "tt0986264", "tt5074352", "tt0405508",
  "tt9387250", "tt8948790", "tt0367495", "tt0079221", "tt0093603",
  "tt0052572", "tt9081558", "tt14743266", "tt7466810", "tt0214915",
  "tt0255094", "tt7019842", "tt7581902", "tt0353697", "tt8267604",
  "tt1315981", "tt1825683", "tt2488496", "tt1560747", "tt0371724",
  "tt1843866", "tt1639426", "tt7131622", "tt0838283", "tt1895587",
  "tt1745960", "tt1193138"
];


btn.addEventListener("click", () => {
  const value = searchvalue.value.trim();
  if (value) {
    localStorage.setItem("svalue", value);
  } else {
    alert("Please enter a movie name.");
  }
});

const movessection = document.getElementsByClassName("movessection")[0]
let data;

for (let i = 0; i < 6; i++) {

  let div = ""
  async function call() {
    try {
      let num = moviesids[Math.floor(Math.random() * moviesids.length)]
      let url = await fetch("https://imdb.iamidiotareyoutoo.com/search?tt="+num)
      data = await url.json()
      console.log(data.top);
      call2()
    } catch (error) {
      // --i
      console.log("faild to fetch",error);
    }
  }
  
  call()
  
  function call2() {
  
    try {
      let poster = data.top.primaryImage.url
      let name = data.top.titleText.text
      let id = data.top.id
      // let rate = data.top.ratingsSummary.aggregateRating
      // let like = data.top.ratingsSummary.voteCount
      
      
      div = `<a href="/move"><div class="movebox" onclick="call3('${id}')">
                    <div class="moveboxrate">
                        <img src="${poster}" alt="${name}" class="moveboximg">
                    </div>
                    <div class="movename">
                        <p class="movenamep">${name}</p>
                    </div>
                </div></a>`
       movessection.innerHTML += div
    } catch (error) {
      --i
      console.log("faild to insert",error);
    }
  }

}



function call3(id) {
  localStorage.setItem("id" , id)
  console.log("saved localstorage");
}
