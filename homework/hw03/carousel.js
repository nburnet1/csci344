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

const carousel = {
  index: 1,
  caroLength: data.length,
  getIndex: function () {
    return this.index;
  },
  setIndex: function (num) {
    this.index = num;
  },
  getCaroLength: function () {
    return this.caroLength;
  },


  next: function () {
    const inner = document.querySelector(".carousel-inner");
    const slide = document.querySelector(".slide");
    const slideWidth = slide.clientWidth;

    document.getElementById(this.getIndex()).setAttribute("aria-hidden", 'true');

    if (this.getIndex() < this.getCaroLength()) {
      inner.style.left = `-${slideWidth * (this.getIndex())}px`;
      this.setIndex(this.getIndex() + 1);

    }
    else {
      this.setIndex(1);
      inner.style.left = `-${slideWidth * (this.getIndex() - 1)}px`;
    }

    document.getElementById(this.getIndex()).setAttribute("aria-hidden", 'false');
  },

  previous: function () {
    const inner = document.querySelector(".carousel-inner");
    const slide = document.querySelector(".slide");
    const slideWidth = slide.clientWidth;

    document.getElementById(this.getIndex()).setAttribute("aria-hidden", 'true');

    if (this.getIndex() > 1) {
      this.setIndex(this.getIndex() - 1);
      inner.style.left = `-${slideWidth * (this.getIndex() - 1)}px`;
    }
    else {
      this.setIndex(10);
      inner.style.left = `-${slideWidth * (this.getIndex() - 1)}px`;
    }

    document.getElementById(this.getIndex()).setAttribute("aria-hidden", 'false');
  }

};

function template(data, count) {
  return `
  <section class="slide" id="${count + 1}" role="group" aria-hidden="true" aria-label="Slide ${count + 1} of 10">
  <img src="${data.image_url}" alt="Photo ${count}">
  <p>${data.caption}</p>
  </section>
  `
}

function loadslides(photoList) {
  for (let i = 0; i < data.length; i++) {
    document.querySelector('.carousel-inner').insertAdjacentHTML('beforeend', template(data[i], i));
  }

  document.querySelector(".slide").setAttribute("aria-hidden", "false");
}

loadslides(data);


