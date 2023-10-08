var contents = ["..Student ?","..Faculty ?"];
var currentIndex = 0;

    function changeContent() {
        var element = document.getElementById("change");
        element.innerHTML = contents[currentIndex];

    currentIndex++;
    if (currentIndex >= contents.length) {
         currentIndex = 0;
    }
}

    setInterval(changeContent, 900);

    function toggleDarkMode() {
        var body = document.body;
        body.classList.toggle("dark-mode");
    }

    function changetext()
    {
        var ele = document.getElementById("toggleButton");
        var text = ele.innerHTML ; 
        if (text == "Dark Mode") {
            ele.innerHTML = "Light Mode";
          } else {
            ele.innerHTML = "Dark Mode";
    }
    }
   
      
    


    