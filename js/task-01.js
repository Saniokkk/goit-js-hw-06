const listCategory = document.querySelector('#categories');

console.log(`Number of categories: ${listCategory.children.length}`);

function addListCategoryAndAmountElem() {
    const itemsCategory = listCategory.querySelectorAll('li.item');

    itemsCategory.forEach(item => {   
        return console.log(`
    Category: ${item.firstElementChild.textContent}
    Elements: ${item.lastElementChild.children.length}`);    
    });
}
addListCategoryAndAmountElem();