/**
 * Your logic here (do it however you want).
 * 
 * The things you have to have:
 *    1. A function (i.e., "Event Handler") to initiate the search.
 *    2. Logic to take the user inputs to build the search query.
 *    3. Logic to send the search query to the relevant server.
 *    4. Logic to display the results to the screen.
 * 
 * Provider-specific instructions:
 *    1. If you choose Yelp, allow your user to input both a search term
 *       and a location.
 *          * See API Tutor for guidance: https://www.apitutor.org/
 *          * Sample query: https://www.apitutor.org/yelp/simple/v3/businesses/search?location=Asheville,%20NC&term=pizza
 * 
 *    2. If you choose Spotify, allow your user to specify both a search term 
 *       and a resource type (album, artist, or track).
 *          * See API Tutor for guidance: https://www.apitutor.org/
 *          * Sample query: https://www.apitutor.org/spotify/simple/v1/search?q=beyonce&type=track
 * 
 *    3. If you choose Twitter, allow your user to specify both a search term
 *       and a result_type (mixed, recent, or popular).
 *          * See API Tutor for guidance: https://www.apitutor.org/
 *          * Sample query: https://www.apitutor.org/twitter/simple/1.1/search/tweets.json?q=cats&result_type=popular
 */


//figure out waht user selected
//build url string
//send request to server
//process and display data through looping

const showResults = async (event) =>{
    console.log("clicked");

    const term = document.querySelector("#term").value;

    const resType = document.querySelector("#resource_type").value;

    console.log(term,resType);

    const rootURL = "https://www.apitutor.org/spotify/simple/v1/search";

    const endpoint = `${rootURL}?q=${term}&type=${resType}`;

    const request = await fetch(endpoint);


    console.log(endpoint);

    const jsonData = await request.json();

    console.log(jsonData);


    if(resType == 'artist'){
        const htmlOutput = jsonData.map(artistToHTML).join('');
        document.querySelector(".results").innerHTML = htmlOutput;
    }
    else{
        const htmlOutput = jsonData.map(trackToHTML).join('');
        document.querySelector(".results").innerHTML = htmlOutput;
    }

    
   







}

const trackToHTML = track =>{
    
    return `
    <section class = "track">
        <img src="${track.album.image_url}" />
        <h2>${track.name}</h2>
        <p>${track.preview_url}</p>
    </section>
    `;
}

const artistToHTML = artist =>{
    
    return `
    <section class = "track">
        <img src="${artist.image_url}" />
        <h2>${artist.name}</h2>
    </section>
    `;
}