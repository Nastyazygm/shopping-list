/* Новые элементы должны добавляться в список по нажатию на Enter */

/* Пустые элементы не должны добавляться */

/* Если кликнуть на элемент списка, он зачеркивается */

/* Если кликнуть повторно уже на зачеркнутый, он снова становится обычным */

/* Очищать input после добавления нового элемента в список */
const sendInput = document.querySelector('#input');
const itemList = document.querySelector('.items');

sendInput.addEventListener('keypress ', function(e) {
    if (e.key === 'Enter') {
        const itemText = sendInput.value;

        const newItem = document.createElement('div');
        newItem.classList.add('items');
        newItem.textContent = itemText;

        itemList.append(newItem);
    }
});

function toggleItem(event) {
    const newItem = event.target;
    newItem.classList.toggle('completed');
}