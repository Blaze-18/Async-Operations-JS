function fetchData(url, callback){
    const xhr = new XMLHttpRequest();
    xhr.open("GET",url,true);

    xhr.onload = function(){
        if(xhr.status >= 200 && xhr.status < 300){
            const data = JSON.parse(xhr.responseText);
            callback(null,data,callback); 
        }else{
            const er = new Error('Request failed with status ' + xhr.status);
            callback(er,null,callback);
        }
    }
    xhr.onerror = function(){
        const er = new Error("Network Error");
        callback(er, null,callback);
    }

    xhr.send();
}

const catfactShow = function(error, data, callback){
    const catFactElement = document.getElementById("cat-fact");
    if(error){
        console.log(`Error fetching data: ${error}`);
        catFactElement.textContent = "Error fetching cat fact"
        callback(error);
    }else{
        console.log("Cat fact : " + data.fact);
        catFactElement.textContent = data.fact;
        const buttonElement = document.getElementById("button-div")
        buttonElement.innerHTML = `<button id="like-button"> Like </button>
                                <button id="dislike-button"> Dislike </button>`;
        buttonElement.style.display = "block";
        callback(null);

    }
}
const likeDislike = function(er, callback){
    if(er){
        console.log(`${er}\nLike dislike button not created`);
    }else{
        const likeButton = document.getElementById("like-button");
        const dislikeButton = document.getElementById("dislike-button");

        likeButton.addEventListener("click", function(){
            callback("liked");
            setTimeout(function(){
                location.reload();
            },1000)
        });
            dislikeButton.addEventListener("click", function(){
            callback("disliked");
            setTimeout(function(){
                location.reload();
            },1000);
        })
    }
}
const userAction = function(action){
    action == "liked"? console.log("User liked this fact") : console.log("User disliked this fact");
}

function main() {
    const URL = "https://catfact.ninja/fact";

    fetchData(URL, (error, data, callback) => {
        if (error) {
            console.log(`Error fetching data: ${error.message}`);
            return;
        }


        catfactShow(error, data, (error) => {
            if (error) {
                console.log(`Error displaying cat fact: ${error.message}`);
                return; 
            }
    
            likeDislike(error, (action) => {
                userAction(action);
            });
        });
    });
}
main();