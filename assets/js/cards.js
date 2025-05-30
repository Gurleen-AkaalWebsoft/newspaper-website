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
]

const cardContainer = document.querySelector('.cards-container-main-newspaper');

const functionCards = () => {
    // Reverse the array before rendering
    const reversedData = [...arrayData].reverse();

    reversedData.map((data) => {
        cardContainer.innerHTML += `<a href="${data.pdf}" class="text-decoration-none" target="_blank">
        <div class="cardd">
            <div class="image">
                <img src="${data.imageUrl}" class="card-img-top">
            </div>
            <div class="card-footer text-black text-center py-3">
                <h5 class="card-title fw-bold mb-0">${data.Heading}</h5>
                <p class="card-text small">${data.Edition}</p>
            </div>
        </div></a>`;
    });
};

functionCards();
