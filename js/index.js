// calculator button call right now

document.getElementById("calculate").addEventListener("click", function () {
    const costStart = document.getElementById('IncomeTaka').value;


    ///////// cost right now
    const food = document.getElementById('expen-Food')
    const rent = document.getElementById('expen-rent')
    const clo = document.getElementById('expen-cloth')
    const total = food + rent + clo + costStart;
    console.log(total);
})