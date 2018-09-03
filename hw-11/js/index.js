"use strict";

const laptops = [
  {
    size: 13,
    color: "white",
    price: 28000,
    releaseDate: 2015,
    name: 'Macbook Air White 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "gray",
    price: 32000,
    releaseDate: 2016,
    name: 'Macbook Air Gray 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 13,
    color: "black",
    price: 35000,
    releaseDate: 2017,
    name: 'Macbook Air Black 13"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "white",
    price: 45000,
    releaseDate: 2015,
    name: 'Macbook Air White 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "gray",
    price: 55000,
    releaseDate: 2016,
    name: 'Macbook Pro Gray 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 15,
    color: "black",
    price: 45000,
    releaseDate: 2017,
    name: 'Macbook Pro Black 15"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "white",
    price: 65000,
    releaseDate: 2015,
    name: 'Macbook Air White 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "gray",
    price: 75000,
    releaseDate: 2016,
    name: 'Macbook Pro Gray 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  },
  {
    size: 17,
    color: "black",
    price: 80000,
    releaseDate: 2017,
    name: 'Macbook Pro Black 17"',
    img: "http://demo.posthemes.com/pos_zadademo/images/placeholder.png",
    descr:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae."
  }
];

const grid = document.querySelector("#root");
const source = document.querySelector("#laptop-card").innerHTML.trim();
const template = Handlebars.compile(source);

const filter = { size: [], color: [], releaseDate: [] };

const resetMarkup = () => {
  const markup = laptops.reduce((acc, laptop) => acc + template(laptop), "");
  grid.insertAdjacentHTML("beforeend", markup);
  filter.size = [];
  filter.color = [];
  filter.releaseDate = [];
};

resetMarkup();

const filterCheckboxes = () => {
  const checkboxes = document.querySelectorAll("input[type=checkbox]:checked");
  const checkboxesArr = Array.from(checkboxes);
  checkboxesArr.forEach(function(item) {
    switch (item.name) {
      case "size":
        filter.size.push(item.value);
        break;
      case "color":
        filter.color.push(item.value);
        break;
      case "release_date":
        filter.releaseDate.push(item.value);
        break;
    }
  });
  console.log(filter);
};

const matchArray = (arr, value) => {
  if (arr.length === 0) return true;
  return arr.includes(String(value));
};

const refreshCheckboxes = (event) => {
  event.preventDefault();
  filterCheckboxes();
  const filteredLaptops = laptops.filter(laptop => {
    const matchSize = matchArray(filter.size, laptop.size);
    const matchColor = matchArray(filter.color, laptop.color);
    const matchReleaseDate = matchArray(filter.releaseDate, laptop.releaseDate);

    return matchSize && matchColor && matchReleaseDate;
  });

  console.log("filteredLaptops: ", filteredLaptops);
  const newMarkup = filteredLaptops.reduce(
    (acc, laptop) => acc + template(laptop),
    ""
  );
  grid.innerHTML = "";
  grid.insertAdjacentHTML("beforeend", newMarkup);
};

const form = document.querySelector(".js-form");
form.addEventListener("submit", refreshCheckboxes);
form.addEventListener("reset", resetMarkup);