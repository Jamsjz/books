
// Function to create book links from a JSON file
function createBookLinks() {
  fetch("book_links.json")  // Fetch the pre-generated JSON file
    .then(response => response.json())  // Parse the JSON
    .then(subdirectories => {
      const ul = document.createElement('ul');  // Create an unordered list element

      subdirectories.forEach(subdir => {  // Use 'forEach' to iterate over the array
        const li = document.createElement('li');  // Create a list item
        const a = document.createElement('a');  // Create a link element

        // Create the link to index.html in each subdirectory
        a.href = `${subdir}/book/index.html`;  // Set the link's href attribute
        a.textContent = subdir;  // Set the link's text content to the subdirectory name

        li.appendChild(a);  // Append the link to the list item
        ul.appendChild(li);  // Append the list item to the unordered list
      });

      document.body.appendChild(ul);  // Append the unordered list to the document body
    })
    .catch(error => console.error("Error fetching book links:", error));  // Handle errors
}

// Fetch the book links when the page loads
window.onload = createBookLinks;  // Assign the function to the window's 'onload' event
