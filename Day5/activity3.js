let startnumber = parseInt(prompt("Input starting number:"));
let endnumber = parseInt(prompt("Input ending number:"));

if (startnumber <= endnumber) {
    for (let x = startnumber; x <= endnumber; x++) {
        console.log(x);
    }
} else {
    console.log("Invalid range.");
}
