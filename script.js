function goTo(screenId) {
    let screens = document.querySelectorAll(".screen");
    screens.forEach(screen => screen.classList.remove("active"));

    document.getElementById(screenId).classList.add("active");
}

function addAssignment() {
    let input = document.getElementById("newAssignment");
    let list = document.getElementById("assignmentList");

    if (input.value !== "") {
        let li = document.createElement("li");
        li.textContent = input.value;
        list.appendChild(li);
        input.value = "";
    }
}

function addSession() {
    let input = document.getElementById("newSession");
    let list = document.getElementById("sessionList");

    if (input.value !== "") {
        let li = document.createElement("li");
        li.textContent = input.value;
        list.appendChild(li);
        input.value = "";
    }
}
