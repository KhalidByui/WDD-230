const apiURL =
  "https://api.openweathermap.org/data/2.5/weather?q=Ibadan&units=metric&appid=e17fa37fe06a0aca2b6906caacc31315";

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    document.querySelector("#current-temp").textContent = jsObject.main.temp;
    console.log(jsObject)

    const iconsrc = `https://openweathermap.org/img/w/${jsObject.weather[0].icon}.png`;
    const desc = jsObject.weather[0].description;
    document.querySelector("#icon-src").textContent = iconsrc;
    document.querySelector("#weathericon").setAttribute("src", iconsrc);
    document.querySelector("#weathericon").setAttribute("alt", desc);
    document.querySelector("figcaption").textContent = desc;
  });