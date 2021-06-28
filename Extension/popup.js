document.addEventListener("DOMContentLoaded", function(){
    var startjokes = document.getElementById('startbutton');
    var darkbutton = document.querySelector(".darkmode");
    var sharebutton = document.getElementById("shareontwitter");
    var nextbutton = document.getElementById("new-joke");
    startjokes.addEventListener("click", function startfunction()
    {
        getJoke();
        var start = document.body;
        start.classList.add("started");
    });
    darkbutton.addEventListener("click", function myFunction(){
      var element = document.body;
      element.classList.toggle("dark");
      var x = document.getElementById("turn");
      if(x.innerHTML=="DARK")
      {
          x.innerHTML="LIGHT";
          x.style.color='black';
      }
      else
      {
          x.innerHTML="DARK";
          x.style.color='white';
      }
    });
    sharebutton.addEventListener("click", function sharefunction()
    {
        a.setAttribute("href","https://twitter.com/intent/tweet?hashtags=JokeBox,JokesToTheRescue&text=" + joketitle.innerText + " " + jokebody.innerText);
    });
    nextbutton.addEventListener("click", function nextjoke(){
        getJoke();
    });
});

  const joketitle = document.querySelector("#title");
  const jokebody = document.querySelector("#body");
  const a = document.getElementById("tweet_joke");
  var infobutton = document.getElementById("infobutton");
  var closebutton = document.getElementById("closebutton");

  async function getJoke() {
  joketitle.innerHTML = "<br><br>🚀🚀🚀";
  jokebody.innerHTML="";
  const response = await fetch("reddit_jokes_local.json")
  const joke = await response.json();
  let index = Math.floor(Math.random()*joke.length);
  joketitle.innerHTML = joke[index].title;
  jokebody.innerHTML = joke[index].body;   
  } 

  infobutton.addEventListener("click", function openaboutsection(){
    document.body.classList.add("aboutinfo");
  });

  closebutton.addEventListener("click", function closeaboutsection(){
    document.body.classList.remove("aboutinfo");
  });

//   closebutton.addEventListener("mouseover", () =>{
//     document.body.classList.add("closingabout");
//   });   
//   closebutton.addEventListener("mouseout", ()=>{
//     document.body.classList.remove("closingabout");
//   });