let requestURL = "https://api.mozambiquehe.re/nametouid?player=silkyyyy_johnson&platform=PC&auth=1NisxRdrFmBPRwnTKK4W";
let apiKey = "1NisxRdrFmBPRwnTKK4W";
async function callAPI() {
    try {
        let response = await fetch(requestURL);
        let data = await response.json();
        console.log(data);
    } catch (err) {
        console.log(err);
    }
}
