// Create footer element
const nav = document.createElement('nav');
nav.innerHTML = `
 <nav>
            <div class="logo">
                <img src="../images/logo-light.png" alt="Logo">
            </div>
            <ul id="sidemenu">

                <i class="fa-solid fa-xmark" onclick="closemenu()"></i>
                <li><a href="index.html">Home</a></li>
                <li><a href="index.html">About Me</a></li>
                <li><a href="allCourses.html">Courses</a></li>
                <li><a href="allInterviews.html">Coding Interviews</a></li>
                <li><a href="allInterviews.html">Podcast</a></li>


            </ul>
            <i class="fa-solid fa-bars" onclick="openmenu()"></i>
        </nav>

 `;

// Append the nav to the body
document.body.appendChild(nav);