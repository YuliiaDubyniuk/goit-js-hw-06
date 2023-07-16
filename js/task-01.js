const ul = document.querySelector("#categories");
const items = ul.querySelectorAll(".item")
console.log(`Number of categories: ${items.length}`);

items.forEach(item => {
    const h2 = item.firstElementChild;
    console.log(`Category: ${h2.textContent}`);
   
    const insertedLi = item.querySelectorAll(".item li");
    console.log(`Elements: ${insertedLi.length}`);
}
);

