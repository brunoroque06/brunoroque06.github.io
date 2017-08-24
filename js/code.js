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
                description: ['Following "The Principle of Least Surprise", any function or class should implement the behaviors that another programmer could reasonably expect.', 'For example, a function that translates the name of a day to an <code>enum</code> that represents the day: <code>Day day = DayDate.StringToDay(String dayName)</code>. It is expected the string "Monday" to be translated to <code>Day.MONDAY</code>. It is also expected the common abbreviations to be translated, and the function to ignore case.', "When an obvious behavior is not implemented, readers and users of the code can no longer depend on their intuition about function names. They lose their trust in the original author and must fall back on reading the details of the code."]
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
                description: ["Maybe the most important rule of software development: DRY (Don't repeat yourself. A duplication of code represents a missed opportunity for abstraction. That duplication could probably become a subroutine or perhaps another class outright.", "A subtle is the <code>switch/case</code> or <code>if/else</code> chain that appears again and again in various modules, always testing for the same set of conditions. These should be replaced with polymorphism."]
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
                description: ["If a software developer does something in a certain way, he/she should do all similar things in the same way. This goes back to the principle of least surprise. Once a conventions is chosen, it must be followed."]
            },
            {
                subtitle: "Clutter",
                description: ["Of what use is a default constructor with no implementation? All it serves to do is clutter up the code with meaningless artifacts. Variables that aren’t used, functions that are never called, comments that add no information, and so forth. All these things are clutter and should be removed. Source files should be clean, well organized, and free of clutter."]
            },
            {
                subtitle: "Artificial Coupling",
                description: ["In general an artificial coupling is a coupling between two modules that serves no direct purpose. For example, general <code>enums</code> should not be contained within more specific classes because this forces the whole application to know about these more specific classes.", "It is a result of putting a variable, constant, or function in a temporarily convenient, though inappropriate, location. This should be avoided."]
            },
            {
                subtitle: "Feature Envy",
                description: ["The methods of a class should be interested in the variables and functions of the class they belong to, and not the variables and functions of other classes. When a method uses accessors and mutators of some other object to manipulate the data within that object, then it envies the scope of the class of that other object. It wishes that it were inside that other class so that it could have direct access to the variables it is manipulating.", " Sometimes, however, Feature Envy is a necessary evil in order to avoid unnecessary coupling."]
            },
            {
                subtitle: "Misplaced Responsibility",
                description: ["One of the most important decisions a software developer can make is where to put code. For example, where should the <code>PI</code> constant go? Should it be in the <code>Math</code> class? Perhaps it belongs in the <code>Trigonometry</code> class? Or maybe in the <code>Circle</code> class?", "The principle of least surprise comes into play here. Code should be placed where a reader would naturally expect it to be. The <code>PI</code> constant should go where the <code>Trigonometry</code> functions are declared. One way to make this decision is to look at the names of the functions."]
            },
            {
                subtitle: "Inappropriate Static",
                description: ['<code>Math.max(double a, double b)</code> is a good static method. It does not operate on a single instance; indeed, it would make no sense to have to say <code>new Math().max(a,b)</code> or even <code>a.max(b)</code>. All the data that <code>max</code> uses comes from its two arguments, and not from any "owning" object.', "Now take the following method: <code>HourlyPayCalculator.calculatePay(employee, overtimeRate)</code>. This might seem like a reasonable static function, because it does not operate on any particular object and gets all it’s data from it’s arguments. However, there is a reasonable chance that this function should be polymorphic. This method should not be static if more than one implementation is needed for calculating hourly pay: <code>OvertimeHourlyPayCalculator</code>, or <code>StraightTimeHourlyPayCalculator</code>. It should be a nonstatic member function of <code>Employee</code>."]
            },
            {
                subtitle: "Use Explanatory Variables",
                description: ["One of the more powerful ways to make a program readable is to break the calculations up into intermediate values that are held in variables with meaningful names. It is remarkable how an opaque module can suddenly become transparent simply by breaking the calculations up into well-named intermediate values."]
            },
            {
                subtitle: "Function Names Should Say What They Do",
                description: ["Consider the following method: <code>Date newDate = date.add(5)</code>. Should this method be expected to add five days to the date? Or is it weeks, or hours? Is the <code>date</code> instance changed or does the function just return a new <code>Date</code> without changing the old one? It is not obvious what this function does.", "If the function adds five days to the date and changes the date, then it should be called <code>addDaysTo</code> or <code>increaseByDays</code>. If, on the other hand, the function returns a new date that is five days later but does not change the date instance, it should be called <code>daysLater</code> or <code>daysSince</code>.", "If one has to look at the implementation (or documentation) of the function to know what it does, then a better name should be found, or the functionality rearranged so that it can be placed in functions with better names."]
            },
            {
                subtitle: "Understand the Algorithm",
                description: ["Lots of very funny code is written because people don’t take the time to understand the algorithm. They get something to work by plugging in enough <code>if</code> statements and flags, without really stopping to consider what is really going on. This should not happen.", "Often the best way to gain this knowledge and understanding is to refactor the function into something that is so clean and expressive that it is obvious how it works."]
            },
            {
                subtitle: "Prefer Polymorphism to If/Else or Switch/Case",
                description: ["Do not use switch statements because it’s the obvious brute force solution, but because it’s the right solution for the situation. Polymorphism should be considered before using a <code>switch</code>.", 'Robert Martin defines the "One Switch" rule: "There may be no more than one switch statement for a given type of selection. The cases in that switch statement must create polymorphic objects that take the place of other such switch statements in the rest of the system."']
            },
            {
                subtitle: "Follow Standard Conventions",
                description: ["Every team should follow a coding standard based on common industry norms. This coding standard should specify things like where to declare instance variables; how to name classes, methods, and variables; where to put braces; and so on. The team should not need a document to describe these conventions because their code provides the examples."]
            },
            {
                subtitle: "Replace Magic Numbers with Named Constants",
                description: ["In general, it is a bad idea to have raw numbers in the code. They should be hidden behind well-named constants: <code>PI</code>, <code>EARTH_RADIUS_IN_METER</code>, etc."]
            },
            {
                subtitle: "Structure over Convention",
                description: ["Enforce design decisions with structure over convention. Naming conventions are good, but they are inferior to structures that force compliance. For example, <code>switch/cases</code> with nicely named enumerations are inferior to base classes with abstract methods. No one is forced to implement the <code>switch/case</code> statement the same way each time; but the base classes do enforce that concrete classes have all abstract methods implemented."]
            },
            {
                subtitle: "Encapsulate Conditionals",
                description: ["Boolean logic is hard enough to understand without having to see it in the context of an <code>if</code> or <code>while</code> statement. Extract functions that explain the intent of the conditional. For example: <code>if (shouldBeDeleted(timer))</code> is preferable to <code>if (timer.hasExpired() && !timer.isRecurrent())</code>."]
            },
            {
                subtitle: "Avoid Negative Conditionals",
                description: ["Negatives are just a bit harder to understand than positives. So, when possible, conditionals should be expressed as positives. For example: <code>if (buffer.shouldCompact())</code> is preferable to <code>if (!buffer.shouldNotCompact())</code>"]
            },
            {
                subtitle: "Functions Should Do One Thing",
                description: ["It is often tempting to create functions that have multiple sections that perform a series of operations. Functions of this kind do more than one thing, and should be converted into many smaller functions, each of which does one thing."]
            },
            {
                subtitle: "Hidden Temporal Couplings",
                description: ["Temporal couplings are often necessary, but the coupling should not be hidden. The arguments of the methods should be structured so that the order in which methods should be called is obvious. The code itself should enforce this temporal coupling, so that methods are not executed in a different order than intended."]
            },
            {
                subtitle: "Encapsulate Boundary Conditions",
                description: ["Boundary conditions are hard to keep track of, so they should not be all over the code. Swarms of <code>+1</code>s and <code>-1</code>s should be avoided by encapsulating these into variables."]
            },
            {
                subtitle: "Functions Should Descend Only One Level of Abstraction",
                description: ["The statements within a function should all be written at the same level of abstraction, which should be one level below the operation described by the name of the function. This is one of the hardest heuristic to interpret and follow. Separating levels of abstraction is one of the most important functions of refactoring, and it’s one of the hardest to do well."]
            },
            {
                subtitle: "Keep Configurable Data at High Levels",
                description: ["If there is a constant such as a default or configuration value that is known and expected at a high level of abstraction, they should not be hidden in a low-level method. It should be exposed as an argument to that low-level method called from the high-level method."]
            },
            {
                subtitle: "Avoid Transitive Navigation",
                description: ['In general it is not desirable for a single module to know much about its collaborators. More specifically, if <code>A</code> collaborates with <code>B</code>, and <code>B</code> collaborates with <code>C</code>, modules that use A should not know about C. The following example should be avoided: </code>a.getB().getC().doSomething()</code>. This rule is called "Law of Demeter", or "Writing Shy Code".', "The problem with this is that architectures become rigid, and the copling is high. Too many modules know too much about the architecture."]
            },
            {
                subtitle: "Don’t Inherit Constants",
                description: ["Constants should not be inherited, because they will be hidden and hard to find. It is better to use static imports, so that it becomes obvious where they come from."]
            },
            {
                subtitle: "Constants versus Enums",
                description: ["The meaning of <code>int</code>s can get lost, but the meaning of <code>enum</code>s cannot, because they belong to an enumeration that is named. Besides they can have methods and fields. This makes them very powerful tools that allow much more expression and flexibility than <code>int</code>s. "]
            }
        ]
    },
    {
        title: "Names",
        entries: [
            {
                subtitle: "Choose Descriptive Names",
                description: [""]
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
    "Clean Code, by Robert Martin",
    "The Pragmatic Programmer, by Andrew Hunt and David Thomas",
    "Refactor, by Martin Fowler",
    'The Little Mocker, <a href="https://8thlight.com/blog/uncle-bob/2014/05/14/TheLittleMocker.html" target="_blank" rel="noopener">Article</a>',
    'Clean Code Javascript, <a href="https://8thlight.com/blog/uncle-bob/2014/05/14/TheLittleMocker.html" target="_blank" rel="noopener">GitHub Page</a>',
    'Unified Modeling Language (UML), <a href="https://yuml.me/" target="_blank" rel="noopener">yUML</a>'
];

var stringToReplace = "%data%";
var htmlHeader3 = '<div class="row"><div class="col-12"><h3>' + stringToReplace + '</h3></div></div>';
var htmlHeader4 = '<div class="row"><div class="col-12"><h4>' + stringToReplace + '</h4></div></div>';
var htmlParagraph = '<div class="row"><div class="col-12"><p>' + stringToReplace + '</p></div></div>';

intel.display = function () {
    var main = $('main');
    this.forEach(function (topic) {
        var topicTitle = htmlHeader3.replace(stringToReplace, topic.title);
        main.append(topicTitle);

        topic.entries.forEach(function (entry) {
            var entryTitle = htmlHeader4.replace(stringToReplace, entry.subtitle);
            main.append(entryTitle);

            entry.description.forEach(function (paragraph) {
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


references.display = function () {
    var main = $('main');
    var referencesTitle = htmlHeader3.replace(stringToReplace, "References");
    main.append(referencesTitle);

    this.forEach(function (referenceString) {
        var reference = htmlParagraph.replace(stringToReplace, referenceString);
        main.append(reference);
    });
};

intel.display();
references.display();
