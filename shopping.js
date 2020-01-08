const shoppingForm = document.querySelector('.shopping');
const list = document.querySelector('.list');

// we need an array to hold our state
const items = [];

function handleSubmit(e) {
  e.preventDefault();
  console.log('worked');
  const name = e.currentTarget.item.value;
  const item = {
    name,
    id: Date.now(),
    complete: false,
  };
}

shoppingForm.addEventListener('submit', handleSubmit);
