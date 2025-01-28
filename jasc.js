// Sample course data
const courses = [
  { name: "Python for Beginners", type: "free" },
  { name: "AI & Machine Learning", type: "paid" },
  { name: "Web Development Bootcamp", type: "free" },
  { name: "Data Science with Python", type: "paid" }
];

// Function to display courses
function displayCourses(filteredCourses) {
  const courseList = document.getElementById("courseList");
  courseList.innerHTML = "";

  filteredCourses.forEach(course => {
    courseList.innerHTML += `
      <div class="col-md-4">
        <div class="course-card">
          <h5>${course.name}</h5>
          <p>${course.type === "free" ? "🆓 Free" : "💲 Paid"}</p>
        </div>
      </div>
    `;
  });
}

// Function to search courses
function searchCourses() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const filteredCourses = courses.filter(course => course.name.toLowerCase().includes(searchValue));
  displayCourses(filteredCourses);
}

// Function to filter courses by type
function filterCourses(type) {
  const filteredCourses = courses.filter(course => course.type === type);
  displayCourses(filteredCourses);
}

// Display all courses by default
displayCourses(courses);
