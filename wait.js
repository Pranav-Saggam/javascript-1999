function getData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Fetched the data!");
            resolve("skc@gmail.com");
            
        }, 4000);
    });
}
async function print() {
    console.log("start");
    console.log("print before wait")
    var email =  getData();
    console.log("print after wait")
    console.log("Email id of the user is: " + email);
    console.log("end");
}

print()
