

class WordCount extends HTMLElement {
    constructor() {
        super();
    
        // Shadow DOM
        const shadow = this.attachShadow({ mode: 'open' });
        const wordCountLink = document.getElementById('word-count-link');
        const wordCountFile = wordCountLink.import;
        const templateWordCount = wordCountFile.getElementById('template-word-count');
        shadow.appendChild(document.importNode(templateWordCount.content, true));
      }
      
}


customElements.define('word-count', WordCount);
