const formBox = document.querySelector(".container form"),
  query = document.querySelector(".container .form input"),
  search_btn = document.querySelector(".container .form button"),
  search_result = document.querySelector(".container .search_result"),
  show_more = document.querySelector(".container #showMore");

const url = "https://api.unsplash.com/search/photos?page=1&query=office";
let page = 1;
const AccessKey = "lIYuGB7rJbGkNB7ZyFNhBzuWWcfa04bn49w62hsVP8E";

const getDataFromAPI = async (searchItem, page) => {
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchItem}&client_id=${AccessKey}&per_page=12`;
  let data = await fetch(url);
  data = await data.json();
  data = data.results;
  // console.log(data);

  if (page === 1) {
    search_result.innerHTML = "";
  }

  data.map((item) => {
    const img = document.createElement("img");
    img.src = item.urls.small;
    const imgLink = document.createElement("a");
    // imgLink.href = item.links.html;
    imgLink.href = imgLink.href = item.links.download + "&force=true";
    imgLink.target = "_blank";

    imgLink.appendChild(img);
    search_result.appendChild(imgLink);
  });

  show_more.style.display = "block";
};
search_btn.addEventListener("click", () => {
  page = 1;
  query.value.length >= 1 ? getDataFromAPI(query.value, page) : null;
});
formBox.addEventListener("submit", (e) => {
  page = 1;
  e.preventDefault();
  query.value.length >= 1 ? getDataFromAPI(query.value, page) : null;
});
show_more.addEventListener("click", () => {
  page++;
  getDataFromAPI(query.value);
});
