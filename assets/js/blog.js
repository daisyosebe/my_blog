//(parse info from form local storage)
// WHEN I view the main content,
// THEN I am presented with a list of blog posts that are pulled from localStorage.
function displaySavedData() {
    let formData = JSON.parse(localStorage.getItem('formData')) || {};
    const divContainerElement = $('<div class="container">');

    Object.values(formData).forEach(item => {
        const itemContainer = $('<div class="container" style="border: 2px solid black; padding:10px;">');
        const rowDivElement = $('<div class="row text-left border">');
        const firstRowDivElement = $('<div class="row">');
        const titleDivElement = $(`<div class="col-4 mb-3" style="font-size: 20px; font-weight:bold">Blog: ${item.title}</div>`);
        const contentDivElement = $(`<div class="col-4 mb-3" > ${item.content}</div>`);
        const secondRowDivElement = $('<div class="row">');
        const usernameDivElement = $(`<div class="col-8 mb-3" style="font-style:italic; font-weight:bold ">Author: ${item.username}</div>`);
  
        
        firstRowDivElement.append(titleDivElement);
        firstRowDivElement.append(contentDivElement);
        secondRowDivElement.append(usernameDivElement);
        
        
        rowDivElement.append(firstRowDivElement);
        rowDivElement.append(secondRowDivElement);
        
        
        itemContainer.append(rowDivElement);
        divContainerElement.append(itemContainer); 
        
    });
    // Append the container to the DOM
    $('body').append(divContainerElement);
    
    // BACKBUTTON FUNCTION { back to form page index.html}
    const backButton = document.getElementById('back');
    
    // Add event listener to the back button
    backButton.addEventListener('click', function() {
        window.history.back(); // Go back to the previous page
    });
};

// Display saved data on page load
$(document).ready(displaySavedData);





