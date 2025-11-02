// Create a new XMLHttpRequest object
const xhr = new XMLHttpRequest();

// Configure it: GET-request for the URL
xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1");

// Set up a function to handle the response
xhr.onload = function () {
  if (xhr.status >= 200 && xhr.status < 300) {
    // Parse JSON response
    const data = JSON.parse(xhr.responseText);
    console.log("Data received:", data);
  } else {
    console.error("Error fetching data. Status:", xhr.status);
  }
};

// Handle network errors
xhr.onerror = function () {
  console.error("Network error occurred.");
};

// Send the request
xhr.send();
