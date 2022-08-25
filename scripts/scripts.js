const itemList = document.getElementById('itemList');
const addBtn = document.getElementById('addBtn');
const delBtn = document.getElementById('delBtn');
const clrBtn = document.getElementById('clrBtn');

const noItemsAlert = document.getElementById('noItemsAlert');

const toggleItemsAlert = () => {
  if (itemList.childElementCount === 0) {
    noItemsAlert.style.display = 'block';
    return undefined;
  }

  noItemsAlert.style.display = 'none';
};

addItem = addBtn.onclick = () => {
  const item = document.createElement('li');
  item.innerText = `Item ${itemList.children.length}`;
  itemList.appendChild(item);
  toggleItemsAlert();
};

removeItem = delBtn.onclick = () => {
  if (itemList.children.length) {
    const last = itemList.children[itemList.children.length - 1];
    itemList.removeChild(last);
    toggleItemsAlert();
  }
};

clearItems = clrBtn.onclick = () => {
  itemList.innerHTML = '';
  toggleItemsAlert();
};

console.info('JavaScript loaded');