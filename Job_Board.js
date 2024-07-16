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