window.onload = function() {

    document.getElementById("popup_btn").addEventListener("click", function() {
        document.getElementById("modal").style.display = "flex";
    })
    document.getElementById("modal_close").addEventListener("click", function() {
        document.getElementById("modal").style.display = "none";
    })

}