document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#new-item-form');

  const deleteAllButton = document.querySelector('#delete-all');
    deleteAllButton.addEventListener('click', handleDeleteAllClick);

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const soupList = document.querySelector('#soup-list');
    const liElement = document.createElement('li');

    const type = document.createElement('h3');
    type.textContent = `Type: ${event.target.type.value}`;
    soupList.appendChild(type);

    const size = document.createElement('ul');
    size.textContent = `Size: ${event.target.size.value}`;
    soupList.appendChild(size);

    const bread = document.createElement('ul');
    bread.textContent = `Bread: ${event.target.bread.value}`;
    soupList.appendChild(bread);

    const comment = document.createElement('ul');
    comment.textContent = `Comment: ${event.target.comment.value}`;
    soupList.appendChild(comment);

    event.target.reset();

  });

})
const handleDeleteAllClick = function (event) {
  const readingList = document.querySelector('#soup-list');
  readingList.innerHTML = '';
}
