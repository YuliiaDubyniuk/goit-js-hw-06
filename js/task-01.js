const ulEl = document.querySelector("#categories");
console.log(`Number of categories: ${ulEl.children.length}`);

[...ulEl.children].forEach(item => {
    const h2 = item.firstElementChild;
    console.log(`Category: ${h2.textContent}`);
   
    const insertedLi = item.querySelectorAll(".item li");
    console.log(`Elements: ${insertedLi.length}`);
}
);

