const data = [
  {
    image_url: "https://picsum.photos/450/300?n=1",
    caption: "Photo 1",
  },
  {
    image_url: "https://picsum.photos/450/300?n=2",
    caption: "Photo 2",
  },
  {
    image_url: "https://picsum.photos/450/300?n=3",
    caption: "Photo 3",
  },
  {
    image_url: "https://picsum.photos/450/300?n=4",
    caption: "Photo 4",
  },
  {
    image_url: "https://picsum.photos/450/300?n=5",
    caption: "Photo 5",
  },
  {
    image_url: "https://picsum.photos/450/300?n=6",
    caption: "Photo 6",
  },
  {
    image_url: "https://picsum.photos/450/300?n=7",
    caption: "Photo 7",
  },
  {
    image_url: "https://picsum.photos/450/300?n=8",
    caption: "Photo 8",
  },
  {
    image_url: "https://picsum.photos/450/300?n=9",
    caption: "Photo 9",
  },
  {
    image_url: "https://picsum.photos/450/300?n=10",
    caption: "Photo 10",
  }
];

function template(data, count){
  return `
  <section class="slide" index="${count}" role="group" aria-label="Slide ${count + 1} of 10">
  <img src="${data.image_url}" alt="Photo ${count}">
  <p>${data.caption}</p>
  </section>
  `
}






function next(){
  const inner = document.querySelector(".carousel-inner");
  const slide = document.querySelector(".slide");
  const slideWidth = slide.clientWidth;

  //alert(slide.getAttribute("index"));

  inner.style.left = `-${slideWidth * (slide.getAttribute("index") + 1)}px`;

  slide.style.display = "none";
  slide.ariaHidden = "true";
  
  

}

function previous(){

}

for (let i = 0; i < data.length; i ++){
  document.querySelector('.carousel-inner').insertAdjacentHTML('beforeend',template(data[i],i));
}
