const arrayData = [
    {
        id: 1,
        imageUrl: "/assets/images/news/07-05-25.png",
        pdf:"/assets/pdf/07-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"07/05/2025"
    },
    {
        id: 2,
    imageUrl: "/assets/images/newS/08-05-25.png",
    pdf:"/assets/pdf/08-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"08/05/2025"
    },
    {
        id: 3,
         imageUrl: "/assets/images/news/09-05-25.png",
         pdf:"/assets/pdf/09-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"09/05/2025"
    },
    {
        id: 4,
         imageUrl: "/assets/images/news/10-05-25.png",
         pdf:"/assets/pdf/10-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"10/05/2025"
    },
    {
        id: 5,
         imageUrl: "/assets/images/news/11-05-25.png",
         pdf:"/assets/pdf/11-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"11/05/2025"
    },
    {  id: 6,
         imageUrl: "/assets/images/news/12-05-25.png",
         pdf:"/assets/pdf/12-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"12/05/2025"
    },
    {  id: 7,
         imageUrl: "/assets/images/news/13-05-25.png",
         pdf:"/assets/pdf/13-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"13/05/2025"
    },
    {  id: 8,
         imageUrl: "/assets/images/news/13-05-25.png",
         pdf:"/assets/pdf/14-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"14/05/2025"
    },
    {  id:9,
         imageUrl: "/assets/images/news/15-05-25.png",
         pdf:"/assets/pdf/15-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"15/05/2025"
    },
    {  id: 10,
         imageUrl: "/assets/images/news/16-05-25.png",
         pdf:"/assets/pdf/16-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"16/05/2025"
    },
    {  id: 11,
         imageUrl: "/assets/images/news/17-05-25.png",
         pdf:"/assets/pdf/17-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"17/05/2025"
    },
    {  id: 12,
         imageUrl: "/assets/images/news/18-05-25.png",
         pdf:"/assets/pdf/18-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"18/05/2025"
    },
    {  id: 13,
         imageUrl: "/assets/images/news/20-05-25.png",
         pdf:"/assets/pdf/20-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"20/05/2025"
    },
    {  id: 14,
         imageUrl: "/assets/images/news/21-50-25.png",
         pdf:"/assets/pdf/21-05-2025.pdf",
          Heading: "PUNJABI",
        Edition:"21/05/2025"
    },
    {  id: 15,
         imageUrl: "/assets/images/news/22-05-25.png",
         pdf:"/assets/pdf/22-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"22/05/2025"
    },
    {  id: 16,
         imageUrl: "/assets/images/news/23-05-25.png",
         pdf:"/assets/pdf/23-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"23/05/2025"
    },
    {  id: 17,
         imageUrl: "/assets/images/news/25-05-25.png",
         pdf:"/assets/pdf/25-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"25/05/2025"
    },
    {  id: 18,
         imageUrl: "/assets/images/news/26-05-25.png",
         pdf:"/assets/pdf/26-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"26/05/2025"
    },
    {  id: 19,
         imageUrl: "/assets/images/news/27-5-25.png",
         pdf:"/assets/pdf/27-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"27/05/2025"
    },
      {  id: 20,
         imageUrl: "/assets/images/news/28-5-25.png",
         pdf:"/assets/pdf/28-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"28/05/2025"
    },
      {  id: 21,
         imageUrl: "/assets/images/news/29-5-25.png",
         pdf:"/assets/pdf/29-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"29/05/2025"
    },
      {  id: 22,
         imageUrl: "/assets/images/news/30-05-25.png",
         pdf:"/assets/pdf/30-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"30/05/2025"
    },
     {  id: 23,
         imageUrl: "/assets/images/news/31-05-25.png",
         pdf:"/assets/pdf/31-05-2025.pdf",
        Heading: "PUNJABI",
        Edition:"31/05/2025"
    },
    {  id: 24,
         imageUrl: "/assets/images/news/01-06-25.png",
         pdf:"/assets/pdf/01-06-2025.pdf",
        Heading: "PUNJABI",
        Edition:"01/06/2025"
    },
   
     {  id: 25,
         imageUrl: "/assets/images/news/03-06-2025.png",
         pdf:"/assets/pdf/03-06-2025.pdf",
        Heading: "PUNJABI",
        Edition:"03/06/2025"
    },
      {  id: 26,
         imageUrl: "/assets/images/news/04-06-2025.png",
         pdf:"/assets/pdf/04-06-2025.pdf",
        Heading: "PUNJABI",
        Edition:"04/06/2025"
    },
]

  const cardContainer = document.querySelector('.cards-container-main-newspaper');

  const functionCards = () => {
    // Clear existing content
    cardContainer.innerHTML = '';

    // Reverse the array before rendering
    const reversedData = [...arrayData].reverse();

    // Loop and generate cards
    reversedData.forEach((data, index) => {
      cardContainer.innerHTML += `
        <div class="card-wrapper" data-bs-toggle="modal" data-bs-target="#pdfModal" data-pdf="${data.pdf}">
          <div class="cardd">
            <div class="image">
              <img src="${data.imageUrl}" class="card-img-top" alt="${data.Heading}">
            </div>
            <div class="card-footer text-black text-center py-3">
              <h5 class="card-title fw-bold mb-0">${data.Heading}</h5>
              <p class="card-text small">${data.Edition}</p>
            </div>
          </div>
        </div>`;
    });
  };

  // Handle click to load PDF into modal
  document.addEventListener("click", function (e) {
    const card = e.target.closest(".card-wrapper");
    if (card) {
      const pdfUrl = card.getAttribute("data-pdf");
      document.getElementById("pdfViewer").src = pdfUrl;
    }
  });
  // For small Devices
let currentPdfUrl = "";

document.addEventListener("click", function (e) {
  const card = e.target.closest(".card-wrapper");
  if (!card) return;

  currentPdfUrl = card.getAttribute("data-pdf");
  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    // Show modal and allow button to open PDF
    const modalEl = document.getElementById("pdfModal");
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();

    // Optionally don't load iframe on mobile to save performance
    document.getElementById("pdfViewer").style.display = "none";
  } else {
    document.getElementById("pdfViewer").style.display = "block";
    document.getElementById("pdfViewer").src = currentPdfUrl;

    const modalEl = document.getElementById("pdfModal");
    const modal = bootstrap.Modal.getOrCreateInstance(modalEl);
    modal.show();
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const btn = document.getElementById("mobilePdfBtn");
  if (btn) {
    btn.addEventListener("click", function () {
      if (currentPdfUrl) {
        window.open(currentPdfUrl, "_blank");
      } else {
        alert("No PDF available");
      }
    });
  }
});


  // Function for Search Bar
  functionCards();
function normalizeText(text) {
    return text
        .replace(/[\s\/-]+/g, '')    // Remove spaces, slashes, dashes
        .toUpperCase()               // Convert to uppercase
          // Normalize "VOLUME" to "VOL"
}

function mySearch() {
    var input = document.getElementById("myInput");
    var filter = normalizeText(input.value);

      var magazineCards = document.querySelectorAll(".cardd");
      var magazineCards = document.querySelectorAll(".card-wrapper");
    var noResultsMessage = document.getElementById("noResultsMessage");

    var advertisementBanner = document.querySelector(".Advertisement-banner");
    if (advertisementBanner) {
        advertisementBanner.style.display = "none";
    }

    var results = [];

    magazineCards.forEach(function (card) {
        var titleElement = card.querySelector("h5");
        var dateElement = card.querySelector(".date");
        var dateElement = card.querySelector("p");

        var titleText = titleElement ? titleElement.textContent || titleElement.innerText : "";
        var dateText = dateElement ? dateElement.textContent || dateElement.innerText : "";

        var combinedText = normalizeText(titleText + " " + dateText);

        var matchIndex = combinedText.indexOf(filter);

        if (matchIndex > -1) {
            results.push({ card: card, index: matchIndex });
            card.style.display = "";
        } else {
            card.style.display = "none";
        }
    });

    // Sort results by match index (lower index = earlier match = higher priority)
    results.sort((a, b) => a.index - b.index);

    // Reorder in DOM
    var container = magazineCards[0]?.parentNode;
    if (container) {
        results.forEach(result => container.appendChild(result.card));
    }

    // Show/hide no results message
    if (results.length === 0 && filter !== "") {
        noResultsMessage.style.display = "block";
    } else {
        noResultsMessage.style.display = "none";
    }
}
