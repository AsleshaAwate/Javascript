//promise 
function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const result = true;
            if(result) {
                resolve("Data successfully received.");
            } else {
                reject("failed");
            }
        }, 1000);
    });
}

getData()
.then((response) =>{
    console.log(response, "response");
})
.catch((error) => {
    console.error(error, "error");
});