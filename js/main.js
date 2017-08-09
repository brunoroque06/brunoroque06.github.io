
var menu = document.querySelector('#menu');
var body = document.querySelector('body');
var drawer = document.querySelector('nav');

menu.addEventListener('click', function(e) {
    drawer.classList.toggle('open');
    e.stopPropagation();
});

body.addEventListener('click', function() {
    drawer.classList.remove('open');
});


var projects = [
    {
        name: "Block Chain",
        description: "",
        link: "",
        status: "Complete"
    },
    {
        name: "Chess Engine",
        description: "",
        link: "",
        status: "In Progress"
    },
    {
        name: "Genetic Algorithm",
        description: "",
        link: "",
        status: "Complete"
    }
];

projects.display = function() {
    projects.forEach(function(project) {
        document.querySelector("main").append(project.name);
    });
};

// projects.display();