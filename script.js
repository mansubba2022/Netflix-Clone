let el1 = document.querySelector(".sym1")
document.querySelector(".q1").addEventListener("click", () => {
    let c = el1.innerText;
    if (c == "add") {
        el1.innerText = "close";
        document.querySelector(".frst").style.display = "block";
    }
    else {
        el1.innerText = "add";
        document.querySelector(".frst").style.display = "none";
    }
});

let el2 = document.querySelector(".sym2")
document.querySelector(".q2").addEventListener("click", () => {
    let c = el2.innerText;
    if (c == "add") {
        el2.innerText = "close";
        document.querySelector(".scnd").style.display = "block";
    }
    else {
        el2.innerText = "add";
        document.querySelector(".scnd").style.display = "none";
    }
});

let el3 = document.querySelector(".sym3")
document.querySelector(".q3").addEventListener("click", () => {
    let c = el3.innerText;
    if (c == "add") {
        el3.innerText = "close";
        document.querySelector(".thrd").style.display = "block";
    }
    else {
        el3.innerText = "add";
        document.querySelector(".thrd").style.display = "none";
    }
});

let el4 = document.querySelector(".sym4")
document.querySelector(".q4").addEventListener("click", () => {
    let c = el4.innerText;
    if (c == "add") {
        el4.innerText = "close";
        document.querySelector(".frth").style.display = "block";
    }
    else {
        el4.innerText = "add";
        document.querySelector(".frth").style.display = "none";
    }
});

let el5 = document.querySelector(".sym5")
document.querySelector(".q5").addEventListener("click", () => {
    let c = el5.innerText;
    if (c == "add") {
        el5.innerText = "close";
        document.querySelector(".fifth").style.display = "block";
    }
    else {
        el5.innerText = "add";
        document.querySelector(".fifth").style.display = "none";
    }
});

let el6 = document.querySelector(".sym6")
document.querySelector(".q6").addEventListener("click", () => {
    let c = el6.innerText;
    if (c == "add") {
        el6.innerText = "close";
        document.querySelector(".sxth").style.display = "block";
    }
    else {
        el6.innerText = "add";
        document.querySelector(".sxth").style.display = "none";
    }
});

// el.forEach((item) => {
//     item.addEventListener("click", () => {
//         let c = item.innerText;
//         if (c == "add") {
//             item.innerText = "close";
//             document.querySelector(".faq-ans").style.display = "block";
//         }
//         else {
//             item.innerText = "add";
//             document.quFerySelector(".faq-ans").style.display = "none";
//         }
//     });
// });

