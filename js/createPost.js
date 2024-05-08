let savePostBtn = document.getElementById("save-post-btn");

savePostBtn.addEventListener("click", async () => {
    let fields = document.querySelectorAll("#create-post-form input");

    let postObject = {};

    fields.forEach(field => {
        let property = field.name;
        let value = field.value;
        postObject[property] = value;
    });

    console.log(postObject);
    let savedPost = await createPost(postObject);
    console.log(savedPost);

});


const createPost = async (postObject) => {
    let response = await fetch(`https://devtoretojs-default-rtdb.firebaseio.com/posts/.json`, 
    {
        method: "POST",
        body:JSON.stringify(postObject)
    });
    let data = await response.json();
    return data;
};
