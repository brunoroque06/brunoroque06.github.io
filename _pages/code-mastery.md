---
layout: default
title: Code Mastery
permalink: code-mastery/
---

# Code Mastery

This page contains a compilation of good practices on software development. Some concepts are only valid for object oriented programming, but most are language agnostic.

## General Principles

- Broken Window Theory: one broken window, left un-repaired for any substantial length of time, instills in the inhabitants of the building a sense of abandonment. So another window gets broken. Serious structural damage begins. In a relatively short space of time, the building becomes damaged beyond the owner's desire to fix it, and the sense of abandonment becomes reality. Each broken window should be fixed as soon as it is discovered.
- Don't Repeat Yourself (DRY): a duplication of code, or any other task, represents a missed opportunity for automation/abstraction.
- A developer should be consistent: if something is done in a certain way, all similar things should be done in the same way. Conventions should be followed, and every team should have one.
- You Aren't Gonna Need It (Yagni): a feature should not be build until it is needed. The first argument for Yagni is that while we may now think we need this presumptive feature, it's likely that we will be wrong. There are 4 main costs when a not needed feature is built: build cost, delay cost (delaying other important features), carry cost (integration), repair cost (in case it was a right feature after all, but built wrong). Yagni only applies to capabilities built into the software to support a presumptive feature, it does not apply to effort to make the software easier to modify.
- Design decisions should be enforced with structure over convention.
- Optimization should only be performed after the code is working as intended: "Premature optimization is the root of all evil (or at least most of it) in programming." - Donald Knuth.
- Builds should be a one step process.
- Safeties should not be overridden, like turning off certain compiler warnings, ignoring failing tests, etc.
- Abstractions outlive implementations, and are more worthy of time investment.

## Classes

- S.O.L.I.D. principles:
  1. Single responsibility principle (SRP), a class should have only a single responsibility (i.e. only one potential change in the software's specification should be able to affect the specification of the class);
  2. Open/closed principle (OCP), software entities (classes, modules, methods, etc.) should be open for extension, but closed for modification;
  3. Liskov substitution principle (LSP), objects in a program should be replaceable with instances of their subtypes without altering the correctness of that program;
  4. Interface segregation principle (ISP), many client-specific interfaces are better than one general-purpose interface.
  5. Dependency inversion principle (DIP): one should depend on abstractions, not on concretions.
- Polymorphism should be preferred over `if/else` or `switch/case`.
- Coupling should be kept low by having small interfaces with few methods and responsibilities.
- Law of Demeter/Shy Code should be respected by avoiding `a.getB().getC().doSomething()`.
- Base classes should not depend on their derivatives.
- `Static` methods should be used when they do not operate in a single instance and all the data that they use comes from their arguments. Otherwise polymorphism should be used instead.
- Abstract classes should be used to get rid of duplicated code, while interfaces should define contracts.
- DataClump: a group of values (usually primitives) that belong together and should be aggregated into a class.

## Functions

- The ident level of a function should not be greater than 2.
- Functions should have one level of abstraction: The Stepdown Rule. Every function should be followed by those at the next level of abstraction. An example of 2 very different levels: making a database query, or creating the query.
- Flag arguments should be avoided, and different functions should be used instead.
- Functions with more than 3 arguments are very questionable.
- Arguments should be tested for validity as early as possible. A great example of a good Java library for that is [Google's Guava PreconditionsExplained](https://github.com/google/guava/wiki/PreconditionsExplained).
- Output arguments should be avoided: if a function must change the state of something, it should change the state of the object it is called on.
- Temporal coupling should be enforced, so that methods are not executed in a different order than intended.
- Algorithms that are not well understood are hard to work with, or to change. Even if they are "working", this should be avoided.
- Functions should do or delegate, never both.

## Boundaries and Conditionals

- Encapsulated, so that they are easier to read.
- Should be properly tested, as they are very error prone.
- Positive conditionals should be preferred over negative ones.

## Variables and Constants

- Explanatory variables should be used by breaking up calculations into intermediate values that are held in variables with meaningful names.
- Known numbers should be replaced with named constants (e.g. `PI`, `EARTH_RADIUS_IN_METER`).
- Configurable data should be at high levels.
- Constants should not be inherited, because they would be hidden and hard to find. It is better to use static imports, so that it becomes obvious where they come from.

## Naming

- The "Principle of Least Surprise" should be followed: any function or class should implement the behaviors that another programmer could expect just by reading its name.
- Standard nomenclature should be used where possible, like when using patterns, or native language methods like `toString`.
- The length of a name should be related to the length of the scope: short variable names should be used for tiny scopes, while longer names should be used for big scopes (e.g. variable `i` for a `for` cycle is fine).
- The domain should play a major role when naming. Looking up thesaurus is a very good way of getting new ideas for names, while still keeping the same domain.

## Comments

- Are redundant if they describe something that adequately describes itself.
- Get outdated quickly, and tend to migrate away from the code they once described.
- Should be used to explain business logic, or eventually explain decisions.
- Commented-out code should be deleted (version control systems will still remember it).

## Functional Programming

- Contrary to imperative programming, functional programming is characterized by variable immutability, higher order functions (functions that can receive functions as inputs and/or return functions as outputs), and recursion instead of imperative loops (`for`, `while`).
- It is stateless, which makes easy the exploitation of parallelism.
- Substitution model reduces expressions to a value, as long as these expressions have no side effects. It is formalized in the &#955;-calculus, which is the foundation for functional programming. An example of a side effect is the following expression: `number++`, which can not be expressed by the substitution model. There are 2 evaluation strategies:
  1. Call-by-value: evaluate operations, and then functions. It has the advantage of evaluating every function argument only once;
  2. Call-by-name: evaluate functions, and then operations. This way a function argument is not evaluated if the corresponding parameter is unused in the evaluation of the function body.
- A function uses tail recursion if it calls itself as its last action, allowing the function's stack frame to be reused.

## Test Driven Development

- There are 3 laws for Test Driven Development (TDD):
  1. One must write a failing unit test before writing any production code.
  2. One may not write more of a unit test than is sufficient to fail, and not compiling is failing;
  3. One may not write more production code than is sufficient to pass the currently failing unit test.
- The workflow should be as follows:
  1. Red: write a test that fails, or does not compile;
  2. Green: make that test pass;
  3. Refactor.
- Tests are insufficient as long as there are conditions that have not been covered by the tests or calculations that have not been validated.
- When a defect is found, a regression test that fails should be written, and only then the code should be fixed.
- Leaving a programming session with a broken test (not committed) is a great way to ensure an easy ramp up in the next session.
- Test Doubles:
  1. Dummy objects are passed around but never actually used. They should return `null`, as that prevents that implementation from being used (`NullPointerException`);
  2. Stubs provide canned answers to calls made during the test, usually not responding at all to anything outside what's programmed in for the test;
  3. Spies are stubs that also record some information based on how they were called. They might be used when the test wants to be sure that the authorize method was called by the system (e.g. count how many times it was called);
  4. Mocks are objects pre-programmed with expectations which form a specification of the calls they are expected to receive. A mock spies on the behavior of the module being tested. And the mock knows what behavior to expect;
  5. Fake objects actually have working implementations, but usually take some shortcut which makes them not suitable for production (e.g. an in memory database).

## References

Clean Code: A Handbook of Agile Software Craftsmanship, by Robert Martin, 2008.

[Clean Code Javascript](https://github.com/ryanmcdermott/clean-code-javascript), by Ryan McDermott et al.

[DataClump](https://martinfowler.com/bliki/DataClump.html), by Martin Fowler.

[Mock Are Not Stubs](https://martinfowler.com/articles/mocksArentStubs.html), by Martin Fowler.

[Naming Smells](https://hilton.org.uk/blog/naming-smells), by Peter Hilton.

Refactoring: Improving the Design of Existing Code, by Martin Fowler et al, 1999.

Test-Driven Development By Example, by Kent Beck, 2003.

[The Little Mocker](https://8thlight.com/blog/uncle-bob/2014/05/14/TheLittleMocker.html), by Robert Martin.

The Pragmatic Programmer: From Journeyman to Master, by Andrew Hunt and David Thomas, 1999.

[Yagni](https://martinfowler.com/bliki/Yagni.html), by Martin Fowler.
