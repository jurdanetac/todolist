const itemList = document.getElementById('itemList');
const noItemsAlert = document.getElementById('noItemsAlert');

const toggleItemsAlert = () => {
  if (itemList.childElementCount === 0) {
    noItemsAlert.style.display = 'block';
    return undefined;
  }

  noItemsAlert.style.display = 'none';

  // prevent eslint consistent returns
  return null;
};

const addBtn = document.getElementById('addBtn');
const delBtn = document.getElementById('delBtn');
const clrBtn = document.getElementById('clrBtn');

let items = 0;
let selected = document.createElement('li');

addBtn.onclick = () => {
  // prevent surpassing item count limit
  if (items > 20) {
    // eslint-disable-next-line
    console.error('Maximum of items reached');
    return;
  }

  // create entry on the list
  const item = document.createElement('li');
  item.classList.add('item');
  item.innerHTML = `
  <div class='card-text'>
    <h3>title ${items}</h3>
    <p>description</p>
  </div>
  <input type='checkbox'>
  `;

  items += 1;
  itemList.appendChild(item);

  // trigger event when clicking any item on the list
  Object.entries(itemList.children).forEach((entry) => {
    // eslint-disable-next-line no-param-reassign
    entry[1].onclick = () => {
      // 'unselect' previous element
      selected.classList.remove('selected');
      // reassign selected to new clicked item
      [, selected] = entry;
      // style new selected item
      selected.classList.add('selected');
    };
  });

  // check whether no items alert should be shown or hidden
  toggleItemsAlert();
};

delBtn.onclick = () => {
  // if there are no items don't do nothing
  if (itemList.children.length === 0) {
    return;
  }

  items -= 1;

  if (itemList.contains(selected)) {
    itemList.removeChild(selected);
    return;
  }

  const last = itemList.children[itemList.children.length - 1];
  itemList.removeChild(last);

  toggleItemsAlert();
};

clrBtn.onclick = () => {
  // reset item count
  items = 0;
  // remove everything from list
  itemList.innerHTML = '';

  toggleItemsAlert();
};

toggleItemsAlert();
