// Video playlist data
const videos = [
    {
        title: "المقدمة",
        link: "https://www.youtube.com/embed/2EAV2cB3FWY",
        thumbnail: "https://img.youtube.com/vi/2EAV2cB3FWY/default.jpg",
        description: "مقدمة عن الدورة."
    },
    {
        title: "أساسيات React",
        link: "https://www.youtube.com/embed/k1v5oF8AeLE",
        thumbnail: "https://img.youtube.com/vi/k1v5oF8AeLE/default.jpg",
        description: "شرح مفصل لأساسيات React."
    },
    {
        title: "نصائح للبرمجة",
        link: "https://www.youtube.com/embed/anotherVideoID",
        thumbnail: "https://img.youtube.com/vi/anotherVideoID/default.jpg",
        description: "أفضل النصائح للبرمجة الحديثة."
    }
];

// Populate the playlist
const playlist = document.getElementById("playlist");
const videoPlayer = document.getElementById("videoPlayer");
const videoTitle = document.getElementById("videoTitle");
const videoDescription = document.getElementById("videoDescription");

videos.forEach((video, index) => {
    const videoItem = document.createElement("div");
    videoItem.className = "video-item";
    videoItem.style.display = "flex";
    videoItem.style.alignItems = "center";
    videoItem.style.marginBottom = "10px";
    videoItem.style.cursor = "pointer";

    // Thumbnail
    const img = document.createElement("img");
    img.src = video.thumbnail;
    img.alt = video.title;
    img.style.width = "80px";
    img.style.height = "45px";
    img.style.marginRight = "10px";

    // Title
    const title = document.createElement("h4");
    title.textContent = video.title;
    title.style.margin = "0";

    // Add click event to load the video
    videoItem.onclick = () => {
        videoPlayer.src = video.link;
        videoTitle.textContent = video.title;
        videoDescription.textContent = video.description;
    };

    videoItem.appendChild(img);
    videoItem.appendChild(title);
    playlist.appendChild(videoItem);
});

// Set the first video as default
videoPlayer.src = videos[0].link;
videoTitle.textContent = videos[0].title;
videoDescription.textContent = videos[0].description;