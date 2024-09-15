document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");

  // Sample data for cards
  const cards = [
    {
      imageUrl: "./assets/whisperwall.png",
      title: "Whisper Wall",
      keywords:
        "Node Express MongoDB React Javascript HTML TailwindCSS JWT Firebase Render",
      url: "https://whisperwall-d2ry.onrender.com",
    },
    {
      imageUrl: "./assets/task-master.png",
      title: "Task Master",
      keywords: "React Javascript HTML CSS",
      url: "https://imyuanhui.github.io/task-master",
    },
    {
      imageUrl: "./assets/markdown-previewer.png",
      title: "Markdown Previewer",
      keywords: "React Javascript HTML CSS",
      url: "https://imyuanhui.github.io/markdown-previewer",
    },
    {
      imageUrl: "./assets/club.png",
      title: "Responsive Web Page",
      keywords: "React Javascript HTML CSS",
      url: "https://imyuanhui.github.io/boxing-club",
    },
    {
      imageUrl: "./assets/online-drum.png",
      title: "Online Drum",
      keywords: "Javascript HTML CSS",
      url: "https://imyuanhui.github.io/online-drum",
    },
    {
      imageUrl: "./assets/clock.png",
      title: "Pomodoro Clock",
      keywords: "Javascript HTML CSS",
      url: "https://imyuanhui.github.io/pomodoro-clock",
    },
    {
      imageUrl: "./assets/quote-machine.png",
      title: "Random Quote Machine",
      keywords: "Javascript HTML CSS",
      url: "https://imyuanhui.github.io/random-quote-machine",
    },
    {
      imageUrl: "./assets/timestamp.png",
      title: "Timestamp Mircoservice",
      keywords: "Node Express Javascript HTML CSS",
      url: "https://timestamp-ub0w.onrender.com/",
    },
    {
      imageUrl: "./assets/parser.png",
      title: "Header Parser Microservice",
      keywords: "Node Express Javascript HTML CSS",
      url: "https://headerparser-4lu3.onrender.com/",
    },
    {
      imageUrl: "./assets/shorturl.png",
      title: "URL Shortener Microservice",
      keywords: "Node Express Javascript HTML CSS",
      url: "https://urlshortener-een6.onrender.com/",
    },
    {
      imageUrl: "./assets/exerciseTracker.png",
      title: "Exercise Tracker Microservice",
      keywords: "Node Express Javascript HTML CSS",
      url: "https://exercisetracker-yy3b.onrender.com/",
    },
  ];

  cards.forEach(function (cardData) {
    const card = document.createElement("div");
    card.classList.add("card");

    const img = document.createElement("img");
    img.src = cardData.imageUrl;
    img.alt = cardData.title;

    const cardContent = document.createElement("div");
    cardContent.classList.add("card-content");

    const h3 = document.createElement("h3");
    h3.textContent = cardData.title;

    const p = document.createElement("p");
    p.textContent = cardData.keywords;

    const viewMoreBtn = document.createElement("a");
    viewMoreBtn.href = cardData.url;
    viewMoreBtn.textContent = "View More";
    viewMoreBtn.classList.add("view-more-btn");
    viewMoreBtn.target = "_blank";

    cardContent.appendChild(h3);
    cardContent.appendChild(p);
    cardContent.appendChild(viewMoreBtn);

    card.appendChild(img);
    card.appendChild(cardContent);

    container.appendChild(card);
  });
});
