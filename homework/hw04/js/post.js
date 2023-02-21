export {topPost,iconPost};
const topPost = data => {
    return `
    <section class="card">
                <ul class="post">
                    <li class="post-head">
                        <h4 class="post-user">
                            ${data.user.username}
                        </h4>
                        <a href=""><i class="fa-solid fa-ellipsis"></i></a>
                    </li>
                    
                    <li class="pic-post">
                        <img class="post-img" src="${data.image_url}" />
                    </li>
    </section>
    `

}
const iconPost = (data,profileData) => {
    let tempHTML = ``;
    for(let i = 0; i < data.likes; i ++){
        if(data.likes[i].user_id == profileData.id){
            console.log("Heyo");
        }
        console.log(data.likes[i].user_id,profileData.id);
    }
    // console.log(profileData.first_name);
    // console.log(data.likes.length);

    return ``;

    

}
const commentPost = data => {

}
const bottomPost = data =>{

}