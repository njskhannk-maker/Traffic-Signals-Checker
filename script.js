function checkSignal() {
    let color = document.getElementById("colorInput").value.toLowerCase();
    let result = document.getElementById("result");

    result.innerText = "";
    result.style.color = "black";

    if (color === "red") {
        result.innerText = "Must Stop!";
        result.style.color = "red";
    } 
    else if (color === "yellow") {
        result.innerText = "Ready To Move!";
        result.style.color = "orange";
    } 
    else if (color === "green") {
        result.innerText = "Move Now!";
        result.style.color = "green";
    } 
    else {
        result.innerText = "Invalid color!";
    }

    document.getElementById("colorInput").value = "";
    document.getElementById("result").value = "";
}