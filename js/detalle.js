import { getData } from "./modules/API.js";

let createFirstPost = (objectPost) => {
  let { title, author } = objectPost;

  let contenedoresDiv = document.createElement("div");
  contenedoresDiv.classList.add("contenedores");

  let aPostcontainer = document.createElement("a");
  let aPostName = document.createTextNode(title);

  let authorName = document.createElement("div");
  authorName.classList.add("text-secondary");
  let authorNameText = document.createTextNode(author);
  authorName.append(authorNameText);

  aPostcontainer.append(aPostName, authorName);

  contenedoresDiv.append(aPostcontainer);

  return contenedoresDiv;
};

const printTitlesDetails = async () => {
  let postsArray = await getData();

  postsArray.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  let lastFivePosts = postsArray.slice(0, 5);

  let titleList = document.getElementById("titleListWrapperDetail");

  lastFivePosts.forEach((post) => {
    let titleItem = document.createElement("li");
    titleItem.classList.add("listPostSideBar");
    let titleText = document.createTextNode(post.title);
    titleItem.appendChild(titleText);
    titleList.appendChild(titleItem);
  });
};

printTitlesDetails();

/*1: Guardamos la url en una variable*/
const url = window.location.href;

/*2: Creamos una instancia del objeto URLSearch params*/
const params = new URLSearchParams(new URL(url).search);

// /*3: Extraemos el parámetro que deseamos*/
// let postKey = params.get("postKey");
// console.log(postKey);

// const fetchpostByKey = async (postKey) => {
//   let response = await fetch(
//     `https://javascript33g-default-rtdb.firebaseio.com/posts/${postKey}/.json`
//   );
//   let data = await response.json();
//   return data;
// };
