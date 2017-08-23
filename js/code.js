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
        title: "Unified Modeling Language (UML)",
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

var references = [
    "Refactor, by Martin Fowler",
    "Clean Code, by Robert Martin",
    "The Little Mocker, https://8thlight.com/blog/uncle-bob/2014/05/14/TheLittleMocker.html",
    "Clean Code Javascript, https://github.com/ryanmcdermott/clean-code-javascript",
    "Unified Modeling Language (UML), https://yuml.me/"
];

var stringToReplace = "%data%";
var htmlHeader3 = '<div class="row"><div class="col-12"><h3>' + stringToReplace + '</h3></div></div>';
var htmlHeader4 = '<div class="row"><div class="col-12"><h4>' + stringToReplace + '</h4></div></div>';
var htmlParagraph = '<div class="row"><div class="col-12"><p>' + stringToReplace + '</p></div></div>';

intel.display = function() {
    var main = $('main');
    this.forEach(function(topic) {
        var topicTitle = htmlHeader3.replace(stringToReplace, topic.title);
        main.append(topicTitle);

        topic.entries.forEach(function(entry) {
            var entryTitle = htmlHeader4.replace(stringToReplace, entry.subtitle);
            var entryDescription = htmlParagraph.replace(stringToReplace, entry.description);

            main.append(entryTitle);
            main.append(entryDescription);
        });
    });
};

references.display = function() {
    var main = $('main');
    var referencesTitle = htmlHeader3.replace(stringToReplace, "References");
    main.append(referencesTitle);

    this.forEach(function(referenceString) {
        var reference = htmlParagraph.replace(stringToReplace, referenceString);
        main.append(reference);
    });
};

intel.display();
references.display();
