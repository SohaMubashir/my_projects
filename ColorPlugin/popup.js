function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

document.addEventListener('click', function() {
  document.querySelector('#change-color-button').addEventListener('click', function() {
    openModal();
    const bgColorPicker = document.querySelector('#bg-color-picker');
    const textColorPicker = document.querySelector('#text-color-picker');
    const applyButton = document.querySelector('#apply-colors-button');

    // Add an event listener to the apply button to update the background and text colors of the page
    applyButton.addEventListener('click', function() {
      const bgColor = bgColorPicker.value;
      const textColor = textColorPicker.value;
      document.body.style.backgroundColor = bgColor;
      document.body.style.color = textColor;
      closeModal();
    });
  });
});