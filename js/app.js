document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const handleFormSubmit = function (event) {
    console.log(event);
    event.preventDefault()

    const parentElement = document.querySelector('ul')
    const textOnPage = document.createElement('p')
    console.log(textOnPage);
    textOnPage.textContent = `${event.target.title.value}, ${event.target.author.value}, ${event.target.category.value}`
    parentElement.appendChild(textOnPage)
  }

  const handleButtonClick = function (event) {
    location.reload()
    console.log(event);
  }

  const form = document.querySelector('#new-item-form');
  form.addEventListener('submit', handleFormSubmit);

  const deleteButton = document.querySelector('#button');
  deleteButton.addEventListener('click', handleButtonClick);

})


// "reading-list"
