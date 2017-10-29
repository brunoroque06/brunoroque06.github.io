(() => {
    class View {
        constructor() {
            this.stringTextToReplace = "%text%";
            this.htmlToC = `<div class="col-6"><h2>${this.stringTextToReplace}</h2><ul id="toc"></ul></div>`;
        }

        printTableOfContent() {
            const tagToc = this.htmlToC.replace(this.stringTextToReplace, "Table of Content");
            document.querySelector("main .row:first-child").innerHTML += tagToc;

            const toc = document.getElementById('toc');
            document.querySelectorAll("main h3").forEach(function(header) {
                const id = header.innerHTML.toLowerCase().replace(/\s+/g, '-');
                header.id = id;
                toc.innerHTML += `<li class="toc"><a href="#${id}">${header.innerHTML}</a></li>`;
            });
        }
    }

    const view = new View();
    view.printTableOfContent();
})()