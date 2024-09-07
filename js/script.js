function loadMessage(md) {
    const message = document.querySelector("#message");
    fetch("message.txt")
        .then(response => response.text())
        .then(data => {
            message.innerHTML = md.render(data);
        })
        .catch(error => {
            message.innerHTML = "An error occurred while fetching the message";
        });
}

document.addEventListener('DOMContentLoaded', function() {
    const ribbon = document.querySelector("#solid-ribbon");
    const ribbon_container = document.querySelector(".ribbon-container");
    const msg_container = document.querySelector("#message-container");

    const md = window.markdownit({ html: true });
    loadMessage(md);

    ribbon.addEventListener("click", function() {
        if (msg_container.style.display === "none" || msg_container.style.display === "") {
            msg_container.style.display = "block";
            msg_container.style.overflowY = "hidden";
            const auto_css_height = msg_container.scrollHeight + 20;
            msg_container.style.height = "0px"; 
            setTimeout(() => {
                msg_container.style.height = auto_css_height + "px";
                msg_container.style.overflowY = "scroll"; 
            }, 10);
            ribbon.classList.add("no-bobbing");
        } else {
            
        }
    });
});
