function toggleMenu() {
  let nav = document.getElementById("mobilemenu");
  nav.classList.toggle("open");
}

function closeMenu() {
  let nav = document.getElementById("mobilemenu");
  nav.classList.toggle("open");
}

//*display searchbox

function displaySearchbox() {
  let input = document.querySelector(".buscador");
  let sectResultados = document.querySelector(".resultados");
  let links = document.querySelector(".searchbox-display");

  function inputFocus() {
    links.style.display = "block";
    sectResultados.style.marginTop = "18%";
  }
  function inputBlur() {
    links.style.display = "none";
    sectResultados.style.marginTop = "0%";
  }

  input.onfocus = inputFocus;
  input.onblur = inputBlur;
}

window.addEventListener("load", displaySearchbox);
window.addEventListener("load", clearInp);

function clearInp() {
  document.getElementById("input-box").value = "";
}

const apiKey = "KbVxSjUe7ROvkMmfnNkRZOdBnOOQXEbO";

//*fetch Random sug

const randomRequest =
  "http://api.giphy.com/v1/gifs/random?api_key=" +
  apiKey +
  "&tag=cat" +
  "&limit=4";
window.addEventListener(
  "load",
  getData(randomRequest)
    .then(data => {
      let url = data.data.image_url;

      setImage(url, 0);
    })
    .catch(error => {
      console.log(error);
    })
);

window.addEventListener(
  "load",
  getData(randomRequest)
    .then(data => {
      let url = data.data.image_url;

      setImage(url, 1);
    })
    .catch(error => {
      console.log(error);
    })
);

window.addEventListener(
  "load",
  getData(randomRequest)
    .then(data => {
      let url = data.data.image_url;

      setImage(url, 2);
    })
    .catch(error => {
      console.log(error);
    })
);

window.addEventListener(
  "load",
  getData(randomRequest)
    .then(data => {
      let url = data.data.image_url;

      setImage(url, 3);
    })
    .catch(error => {
      console.log(error);
    })
);

function setImage(url, iterator) {
  let sugImg = document.getElementsByClassName("img");

  sugImg[iterator].src = url;
}

//*fetchTrendingSection

const trendingRequest =
  "http://api.giphy.com/v1/gifs/trending?api_key=" + apiKey + "&limit=12";
//*
function getData(request) {
  const trendingData = fetch(request)
    .then(response => {
      return response.json();
    })
    .then(data => {
      return data;
    })
    .catch(error => {
      return error;
    });

  return trendingData;
}

//todo arrangeTrendingData
window.addEventListener(
  "load",
  getData(trendingRequest)
    .then(data => {
      var elementCounter = 0;
      data.data.forEach(element => {
        let url = element.images.fixed_width.url;
        arrangeGifs(url, "gifContainer");

        const gifName = element.title;

        hashtagPlacer(gifName, elementCounter, "tend-banner");

        elementCounter++;
      });
    })
    .catch(error => {
      console.log(error);
    })
);
//*hashtag function

function hashtagPlacer(titulo, iterator, className) {
  let gifNameArray = titulo.split(" ");
  let banner = document.getElementsByClassName(className);
  let hashtag = "";
  gifNameArray.forEach(element => {
    if (element != "by") {
      hashtag = "#" + element;
      banner[iterator].innerText += " " + hashtag;
    }
  });
}

function arrangeGifs(url,containerID) {
  let tendCont = document.getElementById(containerID);
  let contDiv = document.createElement("div");
  let tendImg = document.createElement("img");
  let tendBanner = document.createElement("div");
  contDiv.className = "content";
  contDiv.id = "tendContent";
  tendImg.className = "tend-img";
  tendBanner.className = "tend-banner";
  tendBanner.id = "tendBanner";
  tendImg.src = url;
  contDiv.appendChild(tendImg);
  contDiv.appendChild(tendBanner);
  tendCont.appendChild(contDiv);
}

//*fetchSearch
function getSearchResult(search) {
  const apiKey = "KbVxSjUe7ROvkMmfnNkRZOdBnOOQXEbO";

  const found = fetch(
    "http://api.giphy.com/v1/gifs/search?q=" + search + "&limit=12"+ "&api_key=" + apiKey 
  )
    .then(response => {
      return response.json();
    })
    .then(data => {
      console.log(data.data);
      let gifObjArray=data.data;
      var elementCounter = 0;
      gifObjArray.forEach(element=>{
        let url = element.images.fixed_width.url;
        arrangeGifs(url, "searchResContainer");

        const gifName = element.title;

        hashtagPlacer(gifName, elementCounter, "tend-banner");

        elementCounter++;


      })



    })
    .catch(error => {
      return error;
    });
  return found;
}
//search

const boton = document.querySelector(".buscar");

const result = boton.addEventListener("click", () => {
  const input = document.getElementById("input-box").value;
  getSearchResult(input);
});

//todo display result
boton.addEventListener("click", () => {
  let sectResultados = document.querySelector(".resultados");
  let sectResBusq = document.querySelector(".resultados-busqueda");
  let inputText = document.getElementById("input-box").value;
  let resultBar = document.getElementById("resultBar");

  sectResultados.style.display = "none";
  sectResBusq.style.display = "block";
  resultBar.innerText = inputText + ":";
});
