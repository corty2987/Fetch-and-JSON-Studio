window.addEventListener("load", function() {
  
    const container = document.getElementById("container");

    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        response.json().then(function(data) {
            console.log(data);  
        });
    });
});