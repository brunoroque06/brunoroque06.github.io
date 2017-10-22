(() => {
    class View {
        constructor() {
            this.stringTextToReplace = "%text%";
            this.htmlToC = `<div class="col-6"><h2>${this.stringTextToReplace}</h2><ol id="toc"></ol></div>`;
        }

        printTableOfContent() {
            const tagToc = this.htmlToC.replace(this.stringTextToReplace, "Table of Content");
            $("main .row:first-child").append(tagToc);

            const toc = $('#toc');
            $("main h3").each(function () {
                const header = $(this);
                const text = header.text().replace(/\s+/g, '');

                header.attr('id', text);
                toc.append(`<li class="toc"><a href="#${text}">${header.text()}</a></li>`);
            });
        }
    }

    const view = new View();
    view.printTableOfContent();
})()