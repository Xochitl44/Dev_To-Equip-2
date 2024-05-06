import { getData } from "./modules/API.js"


// Function that creates Post in DOM 
let createPost = (objectPost,index) => {

    console.log(index);
    let {author, content, image, tags, title} = objectPost;
    
    let mainSection = document.createElement("section")
    mainSection.classList.add("sectionMain");

    let divForImage = document.createElement("div");
    

    let postImage = document.createElement("img");
    postImage.classList.add("mainImage");

    // Validates if it is the first post or not 
    index == 0 ? postImage.classList.add("d-block") : postImage.classList.add("d-none");
    postImage.setAttribute("src",image);
    postImage.setAttribute("alt","image");

    divForImage.append(postImage);

    let divForAuthor = document.createElement("div");
    divForAuthor.classList.add("authorContainer");
    
    let divForAuthorImage = document.createElement("div");
    divForAuthorImage.classList.add("divTravis");

    let authorImage = document.createElement("img");
    authorImage.classList.add("imageTravis");
    authorImage.setAttribute("src","https://media.dev.to/cdn-cgi/image/width=320,height=320,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Fuser%2Fprofile_image%2F363742%2Fc7dc1bbd-b10f-49cc-8687-2216b81a4f45.png");  /* */

    divForAuthorImage.append(authorImage);
    divForAuthor.append(divForAuthorImage);

    let divAuthorDate = document.createElement("div");
    divAuthorDate.classList.add("authorDate");

    let authorName = document.createElement("p");
    let authorNameText = document.createTextNode(author)
    authorName.append(authorNameText);
    authorName.append(document.createElement("br"));
    let authorNameDateText = document.createTextNode("Mar 17"); /* */
    authorName.append(authorNameDateText);

    divAuthorDate.append(authorName);
    divForAuthor.append(divAuthorDate);



    let postTitle = document.createElement("h1");
    let postTitlteText = document.createTextNode(title);
    postTitle.append(postTitlteText);

    let divForContentPost = document.createElement("div");
    let contentPost = document.createElement("p");
    let contentPostText = document.createTextNode(content);
    contentPost.append(contentPostText);
    divForContentPost.append(contentPost)

    let divButtonsHashtags = document.createElement("div");
    divButtonsHashtags.classList.add("buttonsDiv");

    // Creates buttons for hashtags 
    let arrayHashtags = tags.split("#");
    arrayHashtags.forEach(element => {
        if(element != ""){
            let firstHashtagButton = document.createElement("button");
            firstHashtagButton.classList.add("btnGreen","btnColorGreen");
            let firstHashtagButtonText = document.createTextNode("#" + element);
            firstHashtagButton.append(firstHashtagButtonText);
            divButtonsHashtags.append(firstHashtagButton);
        }
        
    
        });
   

    

    let divForIcons = document.createElement("div");
    divForIcons.classList.add("iconsDiv");

    let firstIconImg = document.createElement("img");
    firstIconImg.classList.add("icons");
    firstIconImg.setAttribute("src","https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg");

    let secondIconImg = document.createElement("img");
    secondIconImg.classList.add("icons");
    secondIconImg.setAttribute("src","https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg");

    let thirdIconImg = document.createElement("img");
    thirdIconImg.classList.add("icons");
    thirdIconImg.setAttribute("src","https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg");

    let fourthIconImg = document.createElement("img");
    fourthIconImg.classList.add("icons");
    fourthIconImg.setAttribute("src","https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg");

    let fifthIconImg = document.createElement("img");
    fifthIconImg.classList.add("icons");
    fifthIconImg.setAttribute("src","https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg");



    let reactionsParagraph = document.createElement("p");
    reactionsParagraph.classList.add("reactions","reactionsHide");
    let reactionsParagraphText = document.createTextNode("72 Reactions")
    reactionsParagraph.append(reactionsParagraphText);

    let commentsIcon = document.createElement("svg");
    commentsIcon.setAttribute("xmlns","http://www.w3.org/2000/svg")
    commentsIcon.setAttribute("width","24");
    commentsIcon.setAttribute("height","24");
    commentsIcon.setAttribute("role","img");
    commentsIcon.setAttribute("aria-labelledby","a14tkog8jz02j2xwat9nxrd225144oes");
    commentsIcon.classList.add("crayons-icon");

    let pathLabel = document.createElement("path");
    pathLabel.setAttribute("d","M10.5 5h3a6 6 0 110 12v2.625c-3.75-1.5-9-3.75-9-8.625a6 6 0 016-6zM12 15.5h1.5a4.501 4.501 0 001.722-8.657A4.5 4.5 0 0013.5 6.5h-3A4.5 4.5 0 006 11c0 2.707 1.846 4.475 6 6.36V15.5z");
    commentsIcon.append(pathLabel);

    let commentParagraph = document.createElement("p")
    commentParagraph.classList.add("comments","commentsHide");
    let commentParagraphText = document.createTextNode("14 Comments");
    commentParagraph.append(commentParagraphText);

    let savePostIcon = document.createElement("button");
    savePostIcon.classList.add("bookmark");

    let savePostImageIcon = document.createElement("svg");
    savePostImageIcon.setAttribute("xmlns","http://www.w3.org/2000/svg")
    savePostImageIcon.setAttribute("width","24");
    savePostImageIcon.setAttribute("height","24");
    savePostImageIcon.setAttribute("role","img");
    savePostImageIcon.setAttribute("aria-hidden","true");
    let pathLabelTwo = document.createElement("path");
    pathLabelTwo.setAttribute("d","M6.75 4.5h10.5a.75.75 0 01.75.75v14.357a.375.375 0 01-.575.318L12 16.523l-5.426 3.401A.375.375 0 016 19.607V5.25a.75.75 0 01.75-.75zM16.5 6h-9v11.574l4.5-2.82 4.5 2.82V6z")
    savePostImageIcon.append(pathLabelTwo);
    savePostIcon.append(savePostImageIcon);

    divForIcons.append(firstIconImg,secondIconImg,thirdIconImg,fourthIconImg,reactionsParagraph,commentsIcon,commentParagraph,savePostIcon);

    mainSection.append(divForImage,divForAuthor,postTitle,divForContentPost,divButtonsHashtags,divForIcons);


    
    

    return mainSection;

}


// Wrapper for the Post 
const createWrapper = (array, wrapperID) => {

    let wrapper = document.getElementById(wrapperID);
    
    array.forEach((element,index) => {

        // Using the index from the array to know wich post is the first one
        let card = createPost(element,index);
        
        wrapper.append(card);
        
    });
}

const printPosts = async()=>{
    let postsArray = await getData()
    createWrapper(postsArray,'wrapperID')
    
}

printPosts();


//function for filtering in search bar for the relevant post titles
let filterSearch = document.getElementById("search-filter");

filterSearch.addEventListener("keyup", (event) => {
    let search = event.target.value;

    let result = createPost.filter(titleObject => titleObject.title.toLowerCase().includes(search.toLowerCase())
);

printPosts(result, "search-filter")
});