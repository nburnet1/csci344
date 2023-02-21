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
    ` + iconPostLikes();

}
const iconPost = (data,profileData) => {
    let tempHTML = ``;
    // tempHTML +=  iconPostLikes();
    for(let i = 0; i < data.likes.length; i ++){
        if(data.likes[i].user_id == profileData.id){
            // console.log(tempHTML.querySelector('main').styles.color);
            document.querySelector('main').styles.color = 'red';
            break;
        }
        // console.log(data.likes[i].user_id,profileData.id);
    }
    // console.log(profileData.id);
    // console.log(data.likes.length);

    return tempHTML;
}

const iconPostLikes = () => {
    return `
    <li class="icons-list">
        <div class="interact-list">
        <a href=""><i class="fa-regular fa-heart"></i></a>
         <a href=""><i class="fa-regular fa-comment"></i></a>
        <a href=""><i class="fa-regular fa-paper-plane"></i></a>
         </div>
        <div>
            <a href=""><i class="fa-regular fa-bookmark"></i></a>
        </div>
                        
    </li>
    `;
}
const commentPost = data => {

}
const bottomPost = data =>{

}