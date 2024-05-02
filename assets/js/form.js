
// Function to save data to localStorage
function saveData(data) {
    let formData = JSON.parse(localStorage.getItem('formData')) || {};
    // Generate a unique key for each form submission
    const key = Date.now().toString(); 
    formData[key] = data;
    localStorage.setItem('formData', JSON.stringify(formData));
}

// Event listener for form submission
document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission behavior
    
    // Get form input values
    const username = document.getElementById('user').value.trim();
    const title = document.getElementById('title').value.trim();
    const content = document.getElementById('content').value.trim();
    
    // Check if any field is empty
    if (username === '' || title === '' || content === '') {
        // Display a message to prompt the user to complete the form
        alert('Please complete all fields in the form.');
        return; // Exit the function if any field is empty
    };
    
    // Create an object to store the form data
    const formData = {
        username: username,
        title: title,
        content: content
    };
    
    // Save the form data
    saveData(formData);
    
    // Clear the form fields
    document.getElementById('user').value = '';
    document.getElementById('title').value = '';
    document.getElementById('content').value = '';
    
    window.location.href= "blog.html"
});

document.getElementById("blogButton").addEventListener("click", function() {
    // Redirect to a new page
    window.location.href = "blog.html";
  });



