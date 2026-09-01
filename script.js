const input = document.getElementById("command-input");
const output = document.getElementById("output");

input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        const username = input.value.trim();

        if (username === "") {
            return;
        }

        const line = document.createElement("p");
        line.textContent = "> " + username;
        output.appendChild(line);

        const welcome = document.createElement("p");
        welcome.textContent = "welcome, " + username;
        output.appendChild(welcome);

        input.value = "";
    }

});
