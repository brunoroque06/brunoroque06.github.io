(() => {
    class View {
        constructor() {
            this.stringTextToReplace = "%text%";
            this.htmlToC = `<div class="col-6"><h2>${this.stringTextToReplace}</h2><ol id="toc"></ol></div>`;
        }

        printTableOfContent() {
            const tagToc = this.htmlToC.replace(this.stringTextToReplace, "Table of Content");
            document.querySelector("main .row:first-child").innerHTML += tagToc;

            const toc = document.getElementById('toc');
            document.querySelectorAll("main h3").forEach(function(header) {
                const text = header.innerHTML.replace(/\s+/g, '');
                header.id = text;
                toc.innerHTML += `<li class="toc"><a href="#${text}">${header.innerHTML}</a></li>`;
            });
        }
    }

    const view = new View();
    view.printTableOfContent();
})()