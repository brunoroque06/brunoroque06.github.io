var intel = [
    {
        title: "Comments",
        entries: [
        {
            subtitle: "Inappropriate Information",
            description: "Alguma informação",
            example: ""
        },
        {
            subtitle: "Obsolete Comment",
            description: "Alguma informação",
            example: ""
        },
        {
            subtitle: "Redundant Comment",
            description: "Alguma informação",
            example: ""
        }]
    },
    {
        title: "Uml",
        entries: [
        {
            subtitle: "Inappropriate Information",
            description: "Alguma informação",
            example: ""
        },
        {
            subtitle: "Obsolete Comment",
            description: "Alguma informação",
            example: ""
        },
        {
            subtitle: "Redundant Comment",
            description: "Alguma informação",
            example: ""
        }]
    },
];

var stringToReplace = "%data%";
var htmlHeader3 = '<div class="row"><h3>' + stringToReplace + '</h3></div>';
var htmlHeader4 = '<div class="row"><h4>' + stringToReplace + '</h4></div>';
var htmlParagraph = '<div class="row"><p>' + stringToReplace + '</p></div>';

intel.display = function() {
    var main = $('main');
    intel.forEach(function(topic) {
        var header3 = htmlHeader3.replace(stringToReplace, topic.title);
        main.append(header3);

        topic.entries.forEach(function(entry) {
            var header4 = htmlHeader4.replace(stringToReplace, entry.subtitle);
            var paragraph = htmlParagraph.replace(stringToReplace, entry.description);

            main.append(header4);
            main.append(paragraph);
        });
    });
};

intel.display();