const ul = document.querySelector("#categories");

const itemsQuantity = ul.children.length;
console.log(`Number of categories: ${itemsQuantity}`);

const allItems = ul.children;

const items = [...allItems];

items.forEach(item => {
    const h2 = item.firstElementChild;
    console.log(`Category: ${h2.textContent}`);
   
    const daughterLi = item.querySelectorAll(".item li");
    console.log(`Elements: ${daughterLi.length}`);
}
);

