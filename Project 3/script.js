const courses = [
  {
    name: "Complete Java script Course",
    price: "2.0",
  },
  {
    name: "Complete React JS Course",
    price: "10",
  },
  {
    name: "Complete Python Course",
    price: "1.5",
  },
  {
    name: "Complete C++ Course",
    price: "1",
  },
];

function generateList() {
  const ul = document.querySelector(".list-group");
  ul.innerHTML = "";
  courses.forEach((courses) => {
    const li = document.createElement("li");
    li.classList.add("list-group-item");

    const name = document.createTextNode(courses.name);
    li.appendChild(name);

    const span = document.createElement("span");
    span.classList.add("float-right");

    const price = document.createTextNode("$" + courses.price);
    span.appendChild(price);

    li.appendChild(span);
    ul.appendChild(li);
  });
}
// generateList();
window.addEventListener("load", generateList);

const btn = document.querySelector(".sort-btn")

btn.addEventListener("click", () => {
    courses.sort( (a,b) => b.price - a.price); //highest to lowest
    generateList();
});