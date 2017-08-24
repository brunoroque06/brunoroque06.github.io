var intel = [
    {
        title: "Comments",
        entries: [
        {
            subtitle: "Inappropriate Information",
            description: ["It is inappropriate for a comment to hold information better held in a different kind of system such as source code control systems. Comments should be reserved for technical notes about the code and design"]
        },
        {
            subtitle: "Obsolete Comment",
            description: ["A comment that has gotten old, irrelevant, and incorrect is obsolete. Comments get old quickly. It is best not to write a comment that will become obsolete. If an obsolete comment is found, it is best to update it or get rid of it as quickly as possible. Obsolete comments tend to migrate away from the code they once described."]
        },
        {
            subtitle: "Redundant Comment",
            description: ["A comment is redundant if it describes something that adequately describes itself. Comments should say things that the code cannot say for itself."],
            badExample: "i++; // increment i" 
        },
        {
            subtitle: "Commented-Out Code",
            description: ["Code that is commented ask at least two questions: how old is it, and is it meaningful? No one will delete it because everyone assumes someone else needs it or has plans for it. That code sits there and rots, getting less and less relevant with every passing day. It calls functions that no longer exist. It uses variables whose names have changed. It follows conventions that are long obsolete. It pollutes the modules that contain it and distracts the people who try to read it.", "Commented-out code should be deleted. Source code control systems will remember it, in case someone really needs it."]
        }]
    },
    {
        title: "Environment",
        entries: [
            {
                subtitle: "Build Requires More Than One Step",
                description: ["Building a project should be a single trivial operation. One should be able to check out the system with a simple command and then issue another simple command to build it."]
            },
            {
                subtitle: "Tests Require More Than One Step",
                description: ["One should be able to run all the unit tests with just one command. Being able to run all the tests is so fundamental and so important that it should be quick, easy, and obvious to do."]
            }
        ],
    },
    {
        title: "Functions",
        entries: [
            {
                subtitle: "Too Many Arguments",
                description: ["Functions should have a small number of arguments. No argument is best, followed by one, two, and three. More than three is very questionable and should be avoided."]
            },
            {
                subtitle: "Output Arguments",
                description: ["Output arguments are counterintuitive. Readers expect arguments to be inputs, not outputs. If a function must change the state of something, it should change the state of the object it is called on."]
            },
            {
                subtitle: "Flag Arguments",
                description: ["Boolean arguments loudly declare that the function does more than one thing. They are confusing and should be eliminated."]
            },
            {
                subtitle: "Dead Function",
                description: ["Methods that are never called should be discarded. Source code control systems still remember it."]
            }
        ]
    },
    {
        title: "General",
        entries: [
            {
                subtitle: "Multiple Languages in One Source File",
                description: ["Modern programming environments make it possible to put many different languages into a single source file. For example, a Java source file might contain snippets of XML, HTML, YAML, JavaDoc, English, JavaScript, and so on. This is confusing at best and carelessly sloppy at worst.", "The ideal is for a source file to contain one, and only one, language. Realistically, we will probably have to use more than one. But we should take pains to minimize both the number and extent of extra languages in our source files."]
            },
            {
                subtitle: "Obvious Behavior Is Unimplemented",
                description: ['Following "The Principle of Least Surprise", any function or class should implement the behaviors that another programmer could reasonably expect.', 'For example, a function that translates the name of a day to an enum that represents the day: Day day = DayDate.StringToDay(String dayName). It is expected the string "Monday" to be translated to Day.MONDAY. It is also expected the common abbreviations to be translated, and the function to ignore case.', "When an obvious behavior is not implemented, readers and users of the code can no longer depend on their intuition about function names. They lose their trust in the original author and must fall back on reading the details of the code."]
            },
            {
                subtitle: "Incorrect Behavior at the Boundaries",
                description: ["Developers often write functions that they think will work, and then trust their intuition rather than going to the effort to prove that their code works in all the corner and boundary cases.", "There is no replacement for due diligence. Every boundary condition, every corner case, every quirk and exception represents something that can confound an elegant and intuitive algorithm. Programmers should not rely on their intuition, they should look for every boundary condition and write a test for it."]
            },
            {
                subtitle: "Overridden Safeties",
                description: ["It is risky to override safeties. Turning off certain compiler warnings, and/or ignoring failing tests, may help get the build to succeed, but at the risk of endless debugging sessions."]
            },
            {
                subtitle: "Duplication",
                description: ["Maybe the most important rule of software development: DRY (Don't repeat yourself. A duplication of code represents a missed opportunity for abstraction. That duplication could probably become a subroutine or perhaps another class outright.", "A subtle is the switch/case or if/else chain that appears again and again in various modules, always testing for the same set of conditions. These should be replaced with polymorphism."]
            },
            {
                subtitle: "Code at Wrong Level of Abstraction",
                description: ["It is important to create abstractions that separate higher level general concepts from lower level detailed concepts. Sometimes this is done by creating abstract (base) classes to hold the higher level concepts and derivatives to hold the lower level concepts.", "For example, constants, variables, or utility functions that pertain only to the detailed implementation should not be present in the base class. The base class should know nothing about them."]
            },
            {
                subtitle: "Base Classes Depending on Their Derivatives",
                description: ["The most common reason for partitioning concepts into base and derivative classes is so that the higher level base class concepts can be independent of the lower level derivative class concepts. Therefore, base classes should not mention the names of their derivatives. In general, base classes should know nothing about their derivatives.", "Deploying derivatives and bases in different jar files and making sure the base jar files know nothing about the contents of the derivative jar files allow us to deploy our systems in discrete and independent components. When such components are modified, they can be redeployed without having to redeploy the base components. This means that the impact of a change is greatly lessened, and maintaining systems in the field is made much simpler."]
            },
            {
                subtitle: "Too Much Information",
                description: ["Well-defined modules have very small interfaces that allow developers to do a lot with a little. Poorly defined modules have wide and deep interfaces that force developers to use many different gestures to get simple things done. A well-defined interface does not offer very many functions to depend upon, so coupling is low. A poorly defined interface provides lots of functions that must be called, so coupling is high.", "Good software developers learn to limit what they expose at the interfaces of their classes and modules. The fewer methods a class has, the better. The fewer variables a function knows about, the better. The fewer instance variables a class has, the better."]
            },
            {
                subtitle: "Vertical Separation",
                description: ["Variables and function should be defined close to where they are used. Local variables should be declared just above their first usage and should have a small vertical scope.", "Private functions should be defined just below their first usage, limiting the vertical distance between the invocations and definitions."]
            },
            {
                subtitle: "Inconsistency",
                description: ["If a software developer does something in a certain way, do all similar things in the same way. This goes back to the principle of least surprise. Be careful with the conventions you choose, and once chosen, be careful to continue to follow them. "]
            }
        ]
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
            main.append(entryTitle);
            
            entry.description.forEach(function(paragraph) {
                var entryDescription = htmlParagraph.replace(stringToReplace, paragraph);
                main.append(entryDescription);
            });            
            
            if (isExampleValid(entry.example)) {
                var entryExample = htmlParagraph.replace(stringToReplace, entry.example);
                main.append(entryExample);
            }
        });
    });
};

function isExampleValid(example) {
    return typeof example === 'string' && example.length > 0;
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
