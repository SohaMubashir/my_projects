document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('#change-color-button').addEventListener('click', function() {
      // Create a form element with color pickers for the background and text colors
      const form = document.createElement('form');
      const bgColorPicker = document.createElement('input');
      const textColorPicker = document.createElement('input');
      const applyButton = document.createElement('button');
  
      bgColorPicker.type = 'color';
      bgColorPicker.value = '#ffffff';
      textColorPicker.type = 'color';
      textColorPicker.value = '#000000';
      applyButton.type = 'button';
      applyButton.textContent = 'Apply Colors';
  
      form.appendChild(bgColorPicker);
      form.appendChild(textColorPicker);
      form.appendChild(applyButton);
  
      // Add an event listener to the apply button to update the background and text colors of the page
      applyButton.addEventListener('click', function() {
        const bgColor = bgColorPicker.value;
        const textColor = textColorPicker.value;
        document.body.style.backgroundColor = bgColor;
        document.body.style.color = textColor;
      });
  
      // Append the form to the body of the popup window
      document.body.appendChild(form);
    });
  });
  