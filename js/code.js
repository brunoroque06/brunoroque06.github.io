(() => {
    class View {
        constructor() {
            this.stringTextToReplace = "%text%";
            this.htmlToC = `<div class="col-6"><h2>${this.stringTextToReplace}</h2><ol id="toc"></ol></div>`;
        }

        printTableOfContent() {
            const tagToc = this.htmlToC.replace(this.stringTextToReplace, "Table of Content");
            $("main .row:first-child").append(tagToc);

            let referenceNumber = 1;
            const toc = $('#toc');
            $("main h3").each(function () {
                const header = $(this);
                header.attr('id', referenceNumber);
                toc.append(`<li class="toc"><a href="#${referenceNumber}">${header.text()}</a></li>`);
                referenceNumber++;
            });
        }
    }

    const view = new View();

    view.printTableOfContent();
})()