
const careerHighlights = [
    {
        title: "Senior Software Automation Engineer",
        company: "Apple",
        icon: "../images/apple.png",
        duration: "August 2022 - Present",
    },
    {
        title: "Senior Test Engineer",
        company: "Twitter",
        icon: "../images/twitter.png",
        duration: "2019 - 2022",
    },
    {
        title: "Senior Software Engineer",
        company: "IBM Turbonomic",
        icon: "../images/tur.png",
        duration: "2019",
    },
    {
        title: "Soccer Referee",
        company: "ZogSports",
        icon: "../images/zog.png",
        duration: "2016 - 2021",
    },
    {
        title: "Instructor",
        platform: "Udemy",
        icon: "../images/udemy.png",
        duration: "May 2020 - Present",
    },
];

const carouselTrack = document.getElementById("carousel-track");

careerHighlights.forEach((highlight) => {
    const box = document.createElement("div");
    box.className = "box";
    box.innerHTML = `
    <div class="icon" style="font-size: 40px;">
        <img src="${highlight.icon}" height="100px" width="100px">
    </div>
    <div class="box-content">
        <h3>${highlight.title}</h3>
        <h4>${highlight.company || highlight.platform}</h4>
        <p>${highlight.duration}</p>
    </div>
    `;
    carouselTrack.appendChild(box);
});

const scrollContent = Array.from(carouselTrack.children);
scrollContent.forEach((item) => {
    const duplicate = item.cloneNode(true);
    carouselTrack.appendChild(duplicate);
});

carouselTrack.style.display = "flex";
carouselTrack.style.width = "max-content";
carouselTrack.style.animation = "scroll-left 50s linear infinite";

