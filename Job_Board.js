// Get reference to the search input field
const searchInput = document.getElementById('searchInput');

// Add event listener to the search input field
searchInput.addEventListener('input', function() {
    // Get the search term and convert it to lowercase
    const searchTerm = searchInput.value.toLowerCase();

    // Remove any existing highlights
    removeHighlights();

    // Check if the search term is not empty
    if (searchTerm) {
        // Find and scroll to the matching text
        scrollToMatch(searchTerm);
    }
});

// Function to remove any existing highlights
function removeHighlights() {
    const highlightedElements = document.querySelectorAll('.highlight');
    highlightedElements.forEach(element => {
        element.classList.remove('highlight');
    });
}

// Function to find and scroll to the matching text
function scrollToMatch(searchTerm) {
    // Get all text nodes in the body
    const textNodes = getTextNodes(document.body);

    // Iterate over each text node
    for (let node of textNodes) {
        const textContent = node.textContent.toLowerCase();

        // Check if the text content contains the search term
        if (textContent.includes(searchTerm)) {
            // Highlight the text content
            const parentElement = node.parentElement;
            parentElement.classList.add('highlight');

            // Scroll to the parent element of the matching text
            parentElement.scrollIntoView({ behavior: 'smooth', block: 'center' });

            // Exit the loop after the first match
            break;
        }
    }
}

// Function to get all text nodes in the document
function getTextNodes(element) {
    let textNodes = [];
    const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null, false);
    let node;
    while (node = walker.nextNode()) {
        textNodes.push(node);
    }
    return textNodes;
}



    const appId = 'f84ec22e'; // Replace with your Adzuna app ID
    const apikey = '9aa2e549176502958d63a0f4bad1c625'; // Replace with your Adzuna API key
    fetch('https://api.adzuna.com/v1/api/jobs/us/search/1?apikey=f84ec22e&apiId=9aa2e549176502958d63a0f4bad1c625&where=New%20York', {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify( {
        name: 'User 1'
    })

})
.then(res => {
    if(res.ok) {
        console.log('Success')
    }
    else {
        console.log("Not Successful")
    }
})
.then(data => console.log(data))
.catch(error => console.log('Error'))

/*document.addEventListener("DOMContentLoaded", function() {
    const appId = 'f84ec22e'; // Replace with your Adzuna app ID
    const apiKey = '9aa2e549176502958d63a0f4bad1c625'; // Replace with your Adzuna API key
    const apiUrl = `https://api.adzuna.com/v1/api/jobs/us/search/1?app_id=f84ec22e&app_key=9aa2e549176502958d63a0f4bad1c625&results_per_page=10&what=software%20engineer&where=New%20York`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .then(data => {
            const jobListings = document.getElementById('job-listings');
            data.results.forEach(job => {
                const jobElement = document.createElement('div');
                jobElement.classList.add('job');
                jobElement.innerHTML = `
          <h2>${job.title}</h2>
          <p>${job.company.display_name}</p>
          <p>${job.location.display_name}</p>
          <p>${job.description}</p>
        `;
                jobListings.appendChild(jobElement);
            });
        })
        .catch(error => {
            console.error('Error fetching the API:', error);
        });
});*/