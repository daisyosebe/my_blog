//    TOP OF PAGE
//THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.


// BACKBUTTON FUNCTION { back to form page index.html}
// WHEN I click the "Back" button,
// THEN I am redirected back to the landing page where I can input more blog entries.
// Get a reference to the back button
//THEN I am presented with a header, with a light mode/dark mode toggle, and a "Back" button.


// BACKBUTTON FUNCTION { back to form page index.html}
// WHEN I click the "Back" button,
// THEN I am redirected back to the landing page where I can input more blog entries.
// Get a reference to the back button
const backButton = document.getElementById('back');

// Add event listener to the back button
backButton.addEventListener('click', function() {
    window.history.back(); // Go back to the previous page
});


//(parse info from form local storage)
// WHEN I view the main content,
// THEN I am presented with a list of blog posts that are pulled from localStorage.
// Check if form data exists in local storage
function displaySavedData() {
    let formData = JSON.parse(localStorage.getItem('formData')) || {};
    const divContainerElement = $('<div class="container">');

    Object.values(formData).forEach(item => {
        const itemContainer = $('<div class="container" style="border: 2px solid black; padding:10px;">');
        const rowDivElement = $('<div class="row text-left border">');
        const firstRowDivElement = $('<div class="row">');
        const titleDivElement = $(`<div class="col-4 mb-3" style="font-size: 20px; font-weight:bold">Blog: ${item.title}</div>`);
        const contentDivElement = $(`<div class="col-4 mb-3"> ${item.content}</div>`);
        const secondRowDivElement = $('<div class="row">');
        const usernameDivElement = $(`<div class="col-8 mb-3" style="font-style:italic; ">by: ${item.username}</div>`);
        const thirdRowDivElement = $('<div class="row">');
        const deleteButton = $(`<button class="btn btn-outline-danger delete-button col-1 mb-3" data-item="${item}">Delete</button>`);
        

        deleteButton.on('click', function() {
        let item = $(this).data();
        console.log('Item ID to delete:', item);
        
        // Remove item from localStorage
        let updatedFormData = JSON.parse(localStorage.getItem('formData')) || {};
        console.log('Current formData:', updatedFormData);
        
        delete updatedFormData[item];
        console.log('After deletion:', updatedFormData);
        
        localStorage.setItem('formData', JSON.stringify(updatedFormData));
        console.log('Updated localStorage:', localStorage.getItem('formData'));
        
        // Remove item from the DOM
        $(this).closest('.container').remove();
  
    });




        firstRowDivElement.append(titleDivElement);
        firstRowDivElement.append(contentDivElement);
        secondRowDivElement.append(usernameDivElement);
        thirdRowDivElement.append(deleteButton);

        rowDivElement.append(firstRowDivElement);
        rowDivElement.append(secondRowDivElement);
        rowDivElement.append(thirdRowDivElement);

        itemContainer.append(rowDivElement);
        divContainerElement.append(itemContainer);
    });

    // Append the container to the DOM
    $('body').append(divContainerElement);


    
};

// Display saved data on page load
$(document).ready(displaySavedData);


//(LOCALSTORAGE in form local storage and blog local storage)
// WHEN I view localStorage,
// THEN I am presented with a JSON array of blog post objects, each including the post author's username, title of the post, and post's content.



