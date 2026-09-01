const input = document.getElementById("command-input");
const output = document.getElementById("output");

let username = null;
let inWorld = false;

input.addEventListener("keydown", function(event) {

    if (event.key !== "Enter") {
        return;
    }

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    // USERNAME SETUP
    if (username === null) {

        username = text;

        const line = document.createElement("p");
        line.textContent = "> " + username;
        output.appendChild(line);

        const welcome = document.createElement("p");
        welcome.textContent = "welcome, " + username;
        output.appendChild(welcome);

        const connecting = document.createElement("p");
        connecting.textContent = "connecting to world...";
        output.appendChild(connecting);

        const ready = document.createElement("p");
        ready.textContent = "world channel ready.";
        output.appendChild(ready);

        const instruction = document.createElement("p");
        instruction.textContent = "type a message and press enter.";
        output.appendChild(instruction);

        inWorld = true;
    }

    // WORLD CHAT
    else if (inWorld) {

        const message = document.createElement("p");
        message.textContent = username + ": " + text;

        output.appendChild(message);
    }

    input.value = "";
});
