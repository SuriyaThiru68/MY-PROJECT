function filterCourses() {
    var filterValue = document.getElementById("level-filter").value.toLowerCase();
    var courses = document.querySelectorAll(".course-card");

    courses.forEach(function(course) {
        var courseLevel = course.getAttribute("data-level");
        course.style.display = (filterValue === "all" || courseLevel === filterValue) ? "block" : "none";
    });
}

function enrollAndRedirect(button) {
    button.innerHTML = "Enrolled";
    button.style.backgroundColor = "#28a745";
    button.disabled = true;
    window.location.href = 'https://www.coursera.org/projects/introduction-to-python';
}
