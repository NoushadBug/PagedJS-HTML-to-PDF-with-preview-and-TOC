function createToc(config) {
    const content = config.content;
    const tocElement = config.tocElement;
    const titleElements = config.titleElements;
    
    let tocElementDiv = content.querySelector(tocElement);
    let tocUl = document.createElement("ul");
    tocUl.id = "list-toc-generated";
    tocElementDiv.appendChild(tocUl); 

    // Add classes and IDs to all title elements
    let tocElementNbr = 0;
    for(let i = 0; i < titleElements.length; i++) {
        let titleHierarchy = i + 1;
        let titleElement = content.querySelectorAll(titleElements[i]);

        titleElement.forEach(function(element) {
            element.classList.add("title-element");
            element.setAttribute("data-title-level", titleHierarchy);

            // Add id if it doesn't exist
            tocElementNbr++;
            if (element.id === '') {
                element.id = 'title-element-' + tocElementNbr;
            } 
        });
    }

    // Create TOC list with page numbers
    let tocElements = content.querySelectorAll(".title-element");  

    tocElements.forEach((tocElement) => {
        let tocNewLi = document.createElement("li");

        // Add class for the hierarchy of TOC
        tocNewLi.classList.add("toc-element");
        tocNewLi.classList.add("toc-element-level-" + tocElement.dataset.titleLevel);

        // Fetch the page number
        let pageNumber = tocElement.closest('.pagedjs_page')?.getAttribute('data-page-number') || 'N/A';

        // Create the TOC item
        tocNewLi.innerHTML = `<span class="toc-title">${tocElement.innerHTML}</span> <span class="page-number">${pageNumber}</span>`;
        tocUl.appendChild(tocNewLi);
    });
}
