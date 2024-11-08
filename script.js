/**DOM Selection***/

// Single Element
// const form = document.getElementById("my-form");
// const form = document.querySelector("#my-form");
// const h1 = document.querySelector("h1");
// console.log(h1);

// Multiple Elements

// const items = document.querySelectorAll(".item");
// const items = Array.from(document.getElementsByClassName("item"));
// const items = Array.from(document.getElementsByTagName("li"));

// items.forEach((item) => console.log(item));
// console.log(items);

/**DOM Manipulation***/

// const ul = document.querySelector(".items");
// ul.remove();
// ul.lastElementChild.remove();
// ul.firstElementChild.textContent = "Hello";
// ul.children[1].innerText = "John";
// ul.lastElementChild.innerHTML = "<h4>How are you!</h4>";

// console.log(btn);
// btn.style.backgroundColor = "red";

/**Events***/
// const btn = document.querySelector(".btn");
// const form = document.querySelector("#my-form");
// const body = document.querySelector("body");
// const ul = document.querySelector(".items");

// btn.addEventListener("click", (e) => {
//   e.preventDefault();
//   // console.log("click");
//   // console.log(e.target.className);
//   form.style.backgroundColor = "#ccc";
//   body.classList.add("bg-dark");
//   ul.lastElementChild.innerHTML = "<h4>Hello World!</h4>";
// });

/***Form Validation***/

const form = document.querySelector("#my-form");
const name = document.querySelector("#name");
const email = document.querySelector("#email");
const msg = document.querySelector(".msg");
const userList = document.querySelector("#users");

// const handleSubmit = (e) => {
//   e.preventDefault();
//   console.log(name.value);
// };

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  // console.log(name.value);
  if (name.value === "" || email.value === "") {
    // alert("Please enter all fields");
    msg.classList.add("error");
    msg.textContent = "Please enter all fields";
    setTimeout(() => msg.remove(), 3000);
  } else {
    // console.log("Succcess");
    const li = document.createElement("li");
    li.appendChild(document.createTextNode(`${name.value}: ${email.value}`));
    userList.appendChild(li);

    // Clear fields
    name.value = "";
    email.value = "";
  }
}
