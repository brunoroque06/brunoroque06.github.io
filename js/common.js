(() => {
    class View {
        addMenuEventListener() {
            const menu = document.querySelector('#menu');
            const drawer = document.querySelector('.nav');

            menu.addEventListener('click', function (e) {
                drawer.classList.toggle('open');
                e.stopPropagation();
            });

            document.querySelector('body').addEventListener('click', function () {
                drawer.classList.remove('open');
            });
        }
    }
    const view = new View();
    view.addMenuEventListener();
})()