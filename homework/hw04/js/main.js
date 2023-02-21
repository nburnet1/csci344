import {getAccessToken} from './utilities.js';
import {topPost, iconPost} from './post.js';
const rootURL = 'https://photo-app-secured.herokuapp.com';

const showStories = async (token) => {
    const endpoint = `${rootURL}/api/stories`;
    const response = await fetch(endpoint, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    const data = await response.json();
    console.log('Stories:', data);


    const htmlOutput = data.map(storiesToHTML).join('');
    document.querySelector(".story-list").innerHTML = htmlOutput;


}

const showPosts = async (token , profileData) => {
    const endpoint = `${rootURL}/api/posts`;
    const response = await fetch(endpoint, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    const data = await response.json();

    console.log('Posts:', data);

    let htmlOutput = `` ;

    for( let i = 0; i < data.length; i++){
        htmlOutput += topPost(data[i]);
        htmlOutput += iconPost(data[i], profileData);
        // htmlOutput += commentPost(data[i]);
        // htmlOutput += bottomPost(data[i]);
    }
    
    

    document.querySelector(".news-feed").innerHTML = htmlOutput;


    


}

const showProfile = async (token) => {
    const endpoint = `${rootURL}/api/profile`;
    const response = await fetch(endpoint, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    
    const data = await response.json();



    console.log('Profile:', data);

    document.querySelector("nav").innerHTML = navToHTML(data);
    document.querySelector("header").innerHTML = userSectionToHTML(data);

    return data;
}

const showSuggestions = async (token) => {
    const endpoint = `${rootURL}/api/suggestions`;
    const response = await fetch(endpoint, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
        }
    })
    const data = await response.json();

    console.log('Suggestions:', data);

    const htmlOutput = data.map(suggestionsToHTML).join('');
    document.querySelector(".suggestions").innerHTML = htmlOutput;

    






}


const initPage = async () => {
    // first log in (we will build on this after Spring Break):
    const token = await getAccessToken(rootURL, 'webdev', 'password');

    // then use the access token provided to access data on the user's behalf
    const profileData = await showProfile(token);
    showSuggestions(token);
    showStories(token);
    showPosts(token, profileData);
    
    
}

const storiesToHTML = (data) =>{
    return `
    <a href=""><li class="story">
    <img class="story-pfp" src="${data.user.thumb_url}"/>
    <p class="user">${data.user.username}</p>
    </li> </a>
    `

}

const postToHTML = (data) => {
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
                    <li class="likes">
                        <b>${data.likes.length} Likes</b>

                    </li>
                    <li class="post-des">
                        <div class="post-user"><a href=""><b>${data.user.username}</b></a></div>
                        <div class="description">
                        ${data.caption}   
                        </div>
                        
                    </li>
                    <li class="comments">
                        <div class="comment-block">
                            <div class="post-user"><a href=""><b>brodude235</b></a></div>
                            <div class="description">Lorem ipsum dolor sit amet, 
                            </div>
                        </div>

                        <div class="comment-block">
                            <div class="post-user"><a href=""><b>bruh</b></a></div>
                            <div class="description">This is pretty epic thanks for sharing.
                            </div>
                        </div>
                        <div class="post-date">
                            ${data.display_time}
                        </div>
                    </li>
                    <li class="post-footer">
                        <div class="add-comment">
                            <a href=""><i class="fa-regular fa-face-smile"></i></a>
                            <input placeholder="Add a comment..."/>
                        </div>
                        <a href="" >Post</a>


                    </li>

                </ul>
                
        </section>
    `

}

const commentToHTML = data => {
    return `

    <div class="comment-block">
        <div class="post-user"><a href=""><b>brodude235</b></a></div>
        <div class="description">Lorem ipsum dolor sit amet, </div>
    </div>
    
    `
}

const navToHTML = (data) => {
    return `
    
    <h1>Photo App</h1>
    
    <ul>
        <li>${data.username}</li>
        <li><a href="">Sign Out</a></li>
    </ul>
    
    `

}

const userSectionToHTML = (data) => {
    return `
    <header>
                <ul class="user-section">
                    <li class="logged-img">
                        <img class="user-pfp" src="${data.thumb_url}"/>
                    </li>
                    <li class="logged-user">
                        <b><h2>${data.username}</h2></b>
                    </li>
                    <li>
                        
                    </li>
                    
                    
                </ul>
                
    </header>
    `

}

const suggestionsToHTML = (data) => {
    return `
    <ul class="suggestion-list">
                        <li>
                            <img class="user-pfp" src="${data.thumb_url}"/>
                        </li>
                        <li class="suggested-user">
                            <h3><b>${data.username}</b></h3>
                            <p>Suggested For You</p>
                        </li>
                        <li class="follow">
                            <a href="">Follow</a>
                        </li>
    </ul>
    `
}

initPage();


// const htmlOutput = jsonData.map(artistToHTML).join('');
// document.querySelector(".results").innerHTML = htmlOutput;