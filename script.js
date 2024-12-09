// Reference to form and table body
const prescriptionForm = document.getElementById('prescriptionForm');
const prescriptionRecords = document.getElementById('prescriptionRecords');

// Event Listener for Form Submission
prescriptionForm.addEventListener('submit', function (event) {
  event.preventDefault();

  // Get form values
  const patientName = document.getElementById('patientName').value;
  const age = document.getElementById('age').value;
  const diagnosis = document.getElementById('diagnosis').value;
  const prescription = document.getElementById('prescription').value;

  // Create a new table row
  const row = document.createElement('tr');
  row.innerHTML = `
    <td>${patientName}</td>
    <td>${age}</td>
    <td>${diagnosis}</td>
    <td>${prescription}</td>
  `;

  // Add the row to the table
  prescriptionRecords.appendChild(row);

  // Clear the form
  prescriptionForm.reset();
});
