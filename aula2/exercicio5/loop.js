$(document).ready(async function () {
    while(true) {
        await sleep(1000);
        console.log("loop");

        // seu código aqui
    }
});

function sleep(ms) {
    return new Promise(res => setTimeout(res, ms));
}