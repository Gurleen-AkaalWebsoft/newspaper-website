const arrayData = [
    {
        id: 1,
        imageUrl: "/assets/images/news/image.png",
        Heading: "HARYANA EDITION",
        Edition:"Punjabi"
    },
    {
        id: 2,
    imageUrl: "/assets/images/news/image.png",
        Heading: "HARYANA EDITION",
        Edition:"Punjabi"
    },
    {
        id: 3,
         imageUrl: "/assets/images/news/image.png",
        Heading: "HARYANA EDITION",
        Edition:"Punjabi"
    },
    {
        id: 4,
         imageUrl: "/assets/images/news/image.png",
        Heading: "HARYANA EDITION",
        Edition:"Punjabi"
    },
    {
        id: 5,
         imageUrl: "/assets/images/news/image.png",
        Heading: "HARYANA EDITION",
        Edition:"Punjabi"
    },
    {  id: 6,
         imageUrl: "/assets/images/news/image.png",
        Heading: "HARYANA EDITION",
        Edition:"Punjabi"
    },
]


const cardContainer = document.querySelector('.cards-container-main-newspaper')

const functionCards = () => {
    arrayData.map((data) => {
        
        cardContainer.innerHTML += `
        <div class="cardd">
            <div class="image">
                <img src="${data.imageUrl}" class="card-img-top">
            </div>
             <div class="card-footer  text-black text-center py-3">
            <h5 class="card-title fw-bold mb-0">${data.Heading}</h5>
            <p class="card-text small">${data.Edition}</p>
          </div>
           
        
        </div>`
       
    })
}

functionCards()