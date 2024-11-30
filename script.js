let fieldCounter = 2; 

document.getElementById('addFieldButton').addEventListener('click', function() {
  const form = document.getElementById('dynamicForm');

  // Create a new form group div
  const formGroup = document.createElement('div');
  formGroup.className = 'form-group';

  // Create label
  const label = document.createElement('label');
  label.htmlFor = `field${fieldCounter}`;
  label.textContent = `Field ${fieldCounter}`;

  // Create input
  const input = document.createElement('input');
  input.type = 'text';
  input.id = `field${fieldCounter}`;
  input.name = `field${fieldCounter}`;
  input.placeholder = `Enter value for Field ${fieldCounter}`;

  // Append label and input to form group
  formGroup.appendChild(label);
  formGroup.appendChild(input);

  // Append form group to the form
  form.appendChild(formGroup);

  fieldCounter++; // Increment field counter
});

document.getElementById('submitButton').addEventListener('click', function() {
  const formData = new FormData(document.getElementById('dynamicForm'));

  console.log('Form Data:');
  for (let [name, value] of formData.entries()) {
    console.log(`${name}: ${value}`);
  }

  alert('Form submitted! Check the console for submitted data.');
});
