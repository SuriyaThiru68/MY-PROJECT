// Sample Course Data (Stored in JavaScript, No Database Needed)
const courses = [
  { name: "Python for Beginners", type: "free", url: "py.html" },
  { name: "AI & Machine Learning", type: "paid" },
  { name: "Web Development Bootcamp", type: "free" },
  { name: "Data Science with Python", type: "paid" },
  { name: "JavaScript Mastery", type: "free" },
  { name: "Full-Stack Development", type: "paid" }
];

// Function to Display Courses
function displayCourses(filteredCourses) {
  const courseList = document.getElementById("courseList");
  courseList.innerHTML = ""; // Clear previous results

  filteredCourses.forEach(course => {
      courseList.innerHTML += `
      <div class="col-md-4">
        <div class="course-card">
          <h5>${course.name}</h5>
          <span class="course-type ${course.type}">${course.type === "free" ? "🆓 Free" : "💲 Paid"}</span>
          ${course.url ? `<a href="${course.url}" class="btn btn-info mt-2">View Course</a>` : ""}
        </div>
      </div>
    `;
  });
}

// Function to Search Courses
function searchCourses() {
  const searchValue = document.getElementById("searchInput").value.toLowerCase();
  const filteredCourses = courses.filter(course => course.name.toLowerCase().includes(searchValue));
  displayCourses(filteredCourses);
}

// Function to Filter Courses by Category
function filterCourses(type) {
  if (type === "all") {
      displayCourses(courses);
  } else {
      const filteredCourses = courses.filter(course => course.type === type);
      displayCourses(filteredCourses);
  }
}

// Load All Courses Initially
displayCourses(courses);
