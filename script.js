function toggleDropdown() {
    const dropdown = document.getElementById("dropdownMenu");
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
}
function showInfo() {
    alert("Welcome!!! This is a Website Project of Akorede Bolujoko, A Web-Developer.");
}
function showInfos() {
    alert("Sorry! This Website is under development, it would be updated as soon as it is completed.");
}
// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.clickable-image')) {
        const dropdown = document.getElementById("dropdownMenu");
        if (dropdown.style.display === "block") {
            dropdown.style.display = "none";
        }
    }        
}
