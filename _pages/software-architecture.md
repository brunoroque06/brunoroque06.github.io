---
layout: default
title: Software Architecture
permalink: software-architecture
---

# Software Architecture

This page contains information on Software Architecture, and problem solving. Most concepts are applicable to any domain in which design is involved.

Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations. - Melvin Conway

Make each program do one thing well. To do a new job, build afresh rather than complicate old programs by adding new "features". - UNIX philosophy

## Problem Solving

- Essential steps to iterate over:
  1. Which is the problem? Use cases, business requirements, company goals should help defining it;
  2. How to solve it? Features to aim for, the so called `-ilities`, should be defined (e.g., speed, scalability, deployability);
  3. How to validate the solution? It must be defined before implementing.

## Architecture

- Functional decomposition/Flowcharts should be avoided, and information hiding should be used instead (from Wikipedia's page): information hiding is the principle of segregation of the design decisions in a computer program that are most likely to change, thus protecting other parts of the program from extensive modification if the design decision is changed. The protection involves providing a stable interface which protects the remainder of the program from the implementation (the details that are most likely to change).
- Conceptual Integrity: "All of the parts of a system relate to each other and relate to the whole. There is nothing unnecessary, and all of the parts have an internal consistency. The design must proceed from one mind, or from a very small number of agreeing resonant minds".
- Planning horizons: in the early planning phases, developers spend significant effort on activities like research, often in the form of reading, to validate their assumptions. Based on their studies, what is "best practice" or "best in class" at that time form part of the basic fundamental assumptions before developers write any code, or release software to end users. More and more effort put into assumptions, even if they turn out to be false in six months, leads to a string attachment to them. The "Sunk Cost Fallacy" describes decisions affected by emotional investment: one's decisions are tainted by the emotional investments he accumulates, and the more he invests into something, the harder it becomes to abandon it. Long planning cycles that force architects into irreversible decisions should be avoided, and ways to keep options open should be used. Breaking large programs of work into smaller early deliverables tests the feasibility of both the architectural choices and the development infrastructure. Architects should avoid following technologies that require a significant upfront investment before software is actually built (e.g., licenses, contracts) before they have validated through end-user feedback that the technology actually fits the problem they are trying to solve.
- Embracing sacrificial architectures: accepting now that in a few years time, what is currently being built will (hopefully) be thrown away. This does not imply sacrificing quality. "Design for ~10X growth, but plan to rewrite before ~100X" - Jeff Dean.
- The process used in a given project should come from the engineering/architecture, and not the other way around.

## Domain

- Domain Driven Design:
  1. Model the core domain;
  2. Domain experts and software developers should collaborate and iterate over the definition of the models;
  3. A ubiquitous language (model), within an explicitly bounded context, should be spoken between all the involved.
- The model should be the backbone of a language. Teams should exercise that language (model) relentlessly in all communication, and in the code. Difficulties should be ironed out, and code should be refactored accordingly in case the model changes.

## Validation

- Fitness functions should be used: any tool that helps assessing some architectural characteristic qualifies as a fitness function.
- Benefits of fitness functions:
  1. Provide quantifiable results;
  2. Creates a consistent enforcement mechanism by capturing every concern as fitness functions;
  3. Having a list of fitness functions allows developers to most easily design deployment pipelines.
- Once fitness functions have been defined, architects must ensure that they are evaluated in a timely manner. A deployment pipeline is often used to evaluate tasks like this. Using a deployment pipeline, architects can define which, when, and how often fitness functions execute.

## Stability & Change

- Software should be made stable in the presence of change.
- Volatility of a module (e.g., interface, class, module of a given system) is affected by:
  - Domain;
  - Market/Customers;
  - Stability (inverse proportionality). A module is stable when it is:
    - Independent, if it does not depend upon other elements => no reason to change;
    - Responsible, if there are other elements that depend upon it (e.g., an interface may be responsible for a couple of classes). Given that any change would have a large impact, they have reasons not to change.
- Speed of evolution is a function of cycle time: faster cycle time allows faster evolution.
- Parallel change, also known as expand and contract, is a pattern to implement backward-incompatible changes to an interface in a safe manner, by breaking the change into three distinct phases: expand, migrate, and contract.

## Dependencies

- A `Good Dependency` is a dependency upon something stable, with low volatility.
- The Stable Dependencies Principle: a package should only depend on packages that are more stable than itself. If a stable package depends upon a volatile one, then the volatile package loses its ability to change.
- The Stable Abstractions Principle: the abstraction of a package should be in proportion to its stability, i.e., stable packages should be abstract.

## Anti-Patterns

- Last 10% trap: creating a solution to a problem that only achieves 90% of the requirements.
- Code reuse abuse: ease of code use is often inversely proportional to how reusable that code is. The more effort developers put into making code reusable, the harder it is to use. Making code reusable involves adding additional options and decision points to accommodate the different uses. The more developers add hooks to enable reusability the more they harm the basic usability of the code. When developers build code to be reusable they must add features to accommodate the myriad ways developers will eventually use the code. All that future proofing makes it more difficult for developers to use the code for a single purpose. Code reuse can be an asset but also a potential liability. The introduced coupling points in the code should not conflict with other goals of the architecture. An (extreme) statement: "Software reuse is more like an organ transplant than snapping together Lego blocks." - John D. Cook.
- Vendor king: architecture should not be coupled to a vendor (products, tools, etc).

## Codebase

- Mono-repositories provide the following advantages over multi-repositories codebase:
  1. Easier global refactoring;
  2. True continuous integration;
  3. Easier to test (integration/acceptance tests);
  4. Sense of code owning of each developer is (arguably) higher, which encourages changes/improvements.

## Teams

- Domain-centric teams tend to be cross-functional, meaning every project role is covered by someone on the project. The goal of a Domain-centric team is to eliminate operational friction. The team has all the roles needed to design, implement, and deploy their service, including traditionally separate roles like operations. Teams should be organized around business capabilities, not job functions. "After teaching a software engineering laboratory more than 20 times, I came to insist that student teams as small as four people choose a manager and a separate architect. Defining distinct roles in such small teams may be a little extreme, but I have observed it to work well and to contribute to design success even for small teams." - Frederick P. Brooks Jr.
- Product over project thinking. Software projects have a common workflow in most organizations. A problem is identified, a development team is formed, problem is solved until "completion", and the software is handed over to operations for care, feeding, and maintenance for the rest of its life. The project team moves on to the next problem. This causes some problems: bug fixes are often difficult to manage, developers are isolated from the operational aspects of their code, and they care less about things like quality. In general, the more layers of indirection between a developer and their running code, the less connection they have to that code. This sometimes leads to an "us versus them" mentality. By thinking of software as a product, it shifts the company's perspective in 3 ways. First, products live forever, and cross-functional teams stay associated with their product. Second, each product has an owner who advocates for its use within the ecosystem and manages things like requirements. Third, because the team is cross-functional, each role needed by the product is represented.
- Teams should be small, in order to minimize the required connections, and should also be cross-functional to eliminate artificial friction imposed by coordinating across silos. Each team shouldn't have to know what other teams are doing, unless integration points exist between the teams. Even then, fitness functions should be used to ensure integrity of integrations points. The number of connections between development teams should also be low.

## Leadership

- Winning the war within:
  1. Extreme Ownership: on any organization/team, all responsibility for success and failure rests with the leader. The leader must own everything in his world.
  2. No bad teams, only bad leaders: as a leader, `it is not what you preach, it is what you tolerate`. When setting expectations, if substandard performance is accepted and no one is held accountable, the poor performance becomes the new standard. Leaders must enforce standards, and push them in a way that encourages and enables the team to utilize Extreme Ownership.
  3. Believe: a leader must be a true believer in the mission, in order to convince and inspire others to follow. Every leader must be able to detach from the immediate tactical mission and understand how it fits into strategic goals: the `why`. This `why` must be understood by every leader and troop alike.
  4. Check the ego: ego can become destructive, and when that happens it is of critical importance that one is able to control it.
- Laws of combat:
  1. Cover and move: all elements within the greater team (e.g. other teams, departments, other companies) are crucial and must work together to accomplish the mission, mutually supporting one another for that singular purpose.
  2. Simple: simplifying as much as possible is crucial for success. Plans and orders must be communicated in a manner that is simple, clear and concise.
  3. Prioritize and execute: `relax, look around, make a call`.
  4. Decentralized command: teams must be broken down into manageable elements of 4 or 5 operators, with a clearly designated leader.
- Sustaining victory:
  1. Plan.
  2. Leading up and down the chain of command: leaders must explain to their junior leaders and troops executing the mission how their role contributes to big picture success. A leader must also push situational awareness up the chain of command, in order to obtain the decisions and support his team needs.
  3. Decisiveness amid uncertainty: the picture is never complete, and there is no 100% right solution. Waiting for the certain solution leads to delay, indecision, and inability to execute. Leaders must be prepared to make an educated guess based on previous experience, knowledge of how the enemy operates, likely outcomes, and whatever intelligence is available in the immediate moment.
  4. Discipline equals freedom: every leader must walk a fine line. a good leader must be:
  - confident but not cocky;
  - courageous but not foolhardy;
  - competitive but a gracious loser;
  - attentive to detail but not obsessed by them;
  - strong but have endurance;
  - a leader and follower;
  - humble but not passive;
  - aggressive not overbearing;
  - quiet not silent;
  - calm but not robotic, logical but not devoid or emotions;
  - close with the troops but not so close that one becomes more important than another or more important than the good of the team; so close that they forget who is in charge;
  - able to execute Extreme Ownership, while exercising Decentralized Command.

## References

Building Evolutionary Architectures, by Neil Ford, Rebecca Parsons and Patrick Kua, 2017.

[Design Principles and Design Patterns](https://fi.ort.edu.uy/innovaportal/file/2032/1/design_principles.pdf), by Robert Martin, 2000.

Domain-Driven Design, by Eric Evans, 2003.

Extreme Ownership, by Jocko Willink and Leif Babin, 2015.

[Information Hiding](https://en.wikipedia.org/wiki/Information_hiding), by David Parnas, 1972.

[ParallelChange](https://martinfowler.com/bliki/ParallelChange.html), by Danilo Sato.

[SacrificalArchitecture](https://martinfowler.com/bliki/SacrificialArchitecture.html), by Martin Fowler.
