function addingEventListener() {
}
// ✅ This function sets up the event listener
function addingEventListener() {
  // 1. Get the button element by ID
  const input = document.getElementById('button');

  // 2. Define a named function that shows the alert
  function clickAlert() {
    alert('I was clicked!');
  }

  // 3. Attach the event listener for the click event
  input.addEventListener('click', clickAlert);
}

// ✅ Call the function to actually attach the event listener
addingEventListener();
