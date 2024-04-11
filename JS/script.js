console.log("Hi");

setInterval(() => {
    console.log("hello");

    const element = document.querySelector(".hi");

    element.textContent += "hi";
}, 200);
