// Triggers the modal popup window upon loading the home page
window.onload = function() {
    document.getElementById("modal-trigger").checked = true;
};

function closeModal() {
    document.getElementById("modal-trigger").checked = false;
}
