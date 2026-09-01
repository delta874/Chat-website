const input = document.getElementById("command-input");
const output = document.getElementById("output");

let username = null;

input.addEventListener("keydown", function(event) {

    if (event.key !== "Enter") {
        return;
    }

    const text = input.value.trim();

    if (text === "") {
        return;
    }

    // USERNAME
    if (username === null) {

        username = text;

        output.innerHTML +=
            "<p>> " + username + "</p>";

        output.innerHTML +=
            "<p>welcome, " + username + "</p>";

        output.innerHTML +=
            "<p>connecting to world...</p>";

        output.innerHTML +=
            "<p>world channel ready.</p>";

        output.innerHTML +=
            "<p>--------------------------------</p>";

        output.innerHTML +=
            "<p>you can now chat.</p>";

    }

    // CHAT
    else {

        output.innerHTML +=
            "<p>" + username + ": " + text + "</p>";

    }

    input.value = "";

});
