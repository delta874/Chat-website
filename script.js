alert("NEW SCRIPT LOADED");

const input = document.getElementById("command-input");
const output = document.getElementById("output");

let username = null;

input.addEventListener("keydown", function(event) {
    if (event.key !== "Enter") return;

    const text = input.value.trim();
    if (text === "") return;

    if (username === null) {
        username = text;

        output.innerHTML += "<p>> " + username + "</p>";
        output.innerHTML += "<p>welcome, " + username + "</p>";
        output.innerHTML += "<p>world channel ready.</p>";
        output.innerHTML += "<p>type a message:</p>";
    } else {
        output.innerHTML += "<p>" + username + ": " + text + "</p>";
    }

    input.value = "";
});
