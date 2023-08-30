// Creating a Promise
// Something that gives you a value some time in the future


const statusRef = document.querySelector(".status")
const videoRef = document.querySelector(".video")

function getSubscriptionStatus(){
    return new Promise((resolve, reject) =>{        //created a Promise
        resolve()
    })
}

// THEN
// getSubscriptionStatus().then(response => console.log(response))  //we dont need hear .json() because we are talking to frontend, not a backend server

// Async/await
// async function test(){
//     console.log(await getSubscriptionStatus());     //we dont need hear .json() because we are talking to frontend, not a backend server
// }
// test();

// async function test(){
//     const status = (await getSubscriptionStatus());     
//     statusRef.innerHTML = status
// } 
// test();

/**
 * Aufgabe
 * 
 * Create a function called "getVideo"
 * Accept a parameter called "subscriptionStatus"
 * Return a new Promise inside of the function that:
 *      - if "VIP" resolve("show video")
 *      - if "FREE" reoslve ("show trailer")
 *      - otherwise recet ("no viideo")
 * console.log the result of getVideo(status) in main()
 */

function getVideo(subscriptionStatus){
    return new Promise((resolve, reject) =>{        //created a Promise
        if (subscriptionStatus === "VIP") {
            resolve("show video")
        }
        else if (subscriptionStatus === "FREE"){
            resolve("show trailer")
        }
        else  
            reject("no video")
    })
}

async function test(){
    const status = (await getSubscriptionStatus());     
    statusRef.innerHTML = status
    try{                        //inside the try we have the promise, so if it returns a error, then its automatically going to run the catch

        console.log(await getVideo(status));        //await um es aus dem Promies zu entschlüsseln bzw "rauszuziehen"
    }
    catch (e) {
        console.log(e);
        videoRef.innerHTML = e;
    }
}


test();