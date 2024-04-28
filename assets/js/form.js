// WHEN I load the app,
// FORM with labels and inputs for username(form: input undername), blog title(form:input blog title), and blog content(form: paragraph container).

// Function to handle form submission
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
    }
    
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

    window.location.href='blog.html'
});



// WHEN I enter try to submit a form without a username, title, or content,
// THEN I am presented with a message that prompts me to complete the form. (if any box is blank reprompt(verify content))




// WHEN I submit the form: (submit button)
// THEN blog post data is stored to localStorage:(function once button is clicked store info in localstorage)


// WHEN the form submits,
// THEN I am redirected to the posts page. (store and redirect to blog page)


