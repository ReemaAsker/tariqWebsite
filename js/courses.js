const courses = [
    {
        title: "Essentials Js Course",
        description: "JavaScript is a basic language in the world of web and website development and one of the few languages sufficient to develop a complete web program from scratch without the need to use other programming languages.",
        image: "../images/js-course.jpg",
        link: "course.html?showCourse=js"
    },
    {
        title: "React Native Course",
        description: "JavaScript is the basic programming language we will use through it: React JS, Redux, Node JS, Express JS, MongoDB, MongoDB Atlas, GitHub Pages and Cyclic, Postman, Asynchronous Programming, HTML, CSS",
        image: "../images/react-course.jpeg",
        link: "course.html?showCourse=react"
    },
    {
        title: "Node Js Course",
        description: "JavaScript is the basic programming language we will use through it: React JS, Redux, Node JS, Express JS, MongoDB, MongoDB Atlas, GitHub Pages and Cyclic, Postman, Asynchronous Programming, HTML, CSS",
        image: "../images/nodejs-course.png",
        link: "course.html?showCourse=nodejs"
    },
    {
        title: "React Native Course",
        description: "JavaScript is the basic programming language we will use through it: React JS, Redux, Node JS, Express JS, MongoDB, MongoDB Atlas, GitHub Pages and Cyclic, Postman, Asynchronous Programming, HTML, CSS",
        image: "../images/react-course.jpeg",
        link: "course.html?showCourse=react"
    }
];

function allCourses() {
    const workList = document.getElementById("work-list");

    courses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("work");

        courseDiv.innerHTML = `
<img src="${course.image}" alt="${course.title}">
<div class="layer">
<h3>${course.title}</h3>
<p>${course.description}</p>
<a href="${course.link}">Go to course</a>
</div>
`;

        workList.appendChild(courseDiv);
    });
}
// Function to render the last three courses
function renderLastThreeCourses() {
    const workList = document.getElementById("work-list");
    const lastThreeCourses = courses.slice(-3); // Get the last three courses

    lastThreeCourses.forEach(course => {
        const courseDiv = document.createElement("div");
        courseDiv.classList.add("work");

        courseDiv.innerHTML = `
            <img src="${course.image}" alt="${course.title}">
            <div class="layer">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
                <a href="${course.link}">Go to course</a>
            </div>
        `;

        workList.appendChild(courseDiv);
    });
}