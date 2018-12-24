---
layout: default
title: Software Architecture
permalink: software-architecture/
---

# Software Architecture

This page contains information on systems designs, and problem solving. Its main focus is Software Architecture, but most concepts are applicable to any area where design is involved.

"Organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations." - Melvin Conway

## Design

- Conceptual Integrity: All of the parts of a system relate to each other and relate to the whole. There is nothing unnecessary, and all of the parts have an internal consistency. The design must proceed from one mind, or from a very small number of agreeing resonant minds.
- All architectures become interactive because of unknown unknowns; agile just recognizes this and does it sooner - Mark Richards.
- Architecture components that can change, that are volatile, should be identified by looking at the clients and at the future.
- Planning horizons: in the early planning phases, developers spend significant effort on activities like research, often in the form of reading, to validate their assumptions. Based on their studies, what is "best practice" or "best in class" at that time form part of the basic fundamental assumptions before developers write any code, or release software to end users. More and more effort put into assumptions, even if they turn out to be false in six months, leads to a string attachment to them. The "Sunk Cost Fallacy" describes decisions affected by emotional investment. Long planning cycles that force architects into irreversible decisions should be avoided, and ways to keep options open should be used. Breaking large programs of work into smaller early deliverables tests the feasibility of both the architectural choices and the development infrastructure. Architects should avoid following technologies that require a significant upfront investment before software is actually built (e.g., licenses, contracts) before they have validated through end-user feedback that the technology actually fits the problem they are trying to solve.
- The "Sunk Cost Fallacy" misconception: one make rational decisions based on the future value of objects, investments and experiences. The Truth: his/her decisions are tainted by the emotional investments he/she accumulate, and the more he/she invests in something the harder it becomes to abandon it.
- Just-in-time anti-corruption layers should be used to isolate against (3rd party) library changes.
- Embrace sacrificial architectures: accepting now that in a few years time what is currently being built will (hopefully) be thrown away. This does not imply sacrificing quality.
- "Design for ~10X growth, but plan to rewrite before ~100X" - Jeff Dean.

## Evolution

- Speed of evolution is a function of cycle time: faster cycle time allows faster evolution.
- Parallel change, also known as expand and contract, is a pattern to implement backward-incompatible changes to an interface in a safe manner, by breaking the change into three distinct phases: expand, migrate, and contract.

## Validation

- Fitness functions should be used: any tool that helps assess some architectural characteristic qualifies as a fitness function.
- Fitness functions benefits:
  1. Provide quantifiable results;
  2. Capturing all concerns as fitness function creates a consistent enforcement mechanism;
  3. Having a list of fitness functions allows developers to most easily design deployment pipelines;
- Once fitness functions have been defined, architects must ensure that they are evaluated in a timely manner. A deployment pipeline is often used to evaluate tasks like this. Using a deployment pipeline, architects can define which, when, and how often fitness functions execute.

## Anti-patterns

- An anti-pattern is a practice that initially looks like a good idea, but turns out to be a mistake. Furthermore, there are better alternatives for most anti-patterns.
- Vendor king: do not couple architecture to a vendor (products, tools, etc).
- Last 10% trap: creating a solution to a problem that only achieves 90% of the requirements.
- Code reuse abuse: ease of code use is often inversely proportional to how reusable that code is. The more effort developers put into making code reusable the harder it is to use. Making code reusable involves adding additional options and decision points to accommodate the different uses. The more developers add hooks to enable reusability the more they harm the basic usability of the code. When developers build code to be reusable they must add features to accommodate the myriad ways developers will eventually use the code. All that future proofing makes it more difficult for developers to use the code for a single purpose. Code reuse can be an asset but also a potential liability. The introduced coupling points in the code should not conflict with other goals of the architecture. An (extreme) quote: "Software reuse is more like an organ transplant than snapping together Lego blocks." - John D. Cook.

## Codebase

- Mono-repositories provide the following advantages over multi-repositories codebase:
  1. Easier global refactoring;
  2. True continuous integration;
  3. Easier to test (integration/acceptance tests);
  4. Sense of code owning of each developer is (arguably) higher, encouraging change/improvements.

## Problem Solving

- Four essential steps to iterate over:
  1. Which is the problem? Use cases, business requirements, company goals should help defining it;
  2. How to solve it? Define "-ilities": speed, scalability, deployability, etc;
  3. Why that solution?;
  4. How to validate the solution?

## Teams

- "After teaching a software engineering laboratory more than 20 times, I came to insist that student teams as small as four people choose a manager and a separate architect. Defining distinct roles in such small teams may be a little extreme, but I have observed it to work well and to contribute to design success even for small teams." - Frederick P. Brooks Jr
- Domain-centric teams tend to be cross-functional, meaning every project role is covered by someone on the project. The goal of a Domain-centric team is to eliminate operational friction. The team has all the roles needed to design, implement, and deploy their service, including traditionally separate roles like operations. Teams should be organized around business capabilities, not job functions.
- Product over project thinking. Software projects have a common workflow in most organizations. A problem is identified, a development team is formed, problem is solved until "completion", and the software is handed over to operations for care, feeding, and maintenance for the rest of its life. The project team moves on to the next problem. This causes some problems: bug fixes are often difficult to manage, developers are isolated from the operational aspects of their code, and they care less about things like quality. In general, the more layers of indirection between a developer and their running code, the less connection they have to that code. This sometimes leads to an "us versus them" mentality. By thinking of software as a product, it shifts the company's perspective in 3 ways. First, products live forever. Cross-functional teams stay associated with their product. Second, each product has an owner who advocates for its use within the ecosystem and manages things like requirements. Third, because the team is cross-functional, each role needed by the product is represented.
- Teams should be small, in order to minimize the required connections, and should also be cross-functional to eliminate artificial friction imposed by coordinating across silos. Each team shouldn't have to know what other teams are doing, unless integration points exist between the teams. Even then, fitness functions should be used to ensure integrity of integrations points. The number of connections between development teams should also be low.

## References

Building Evolutionary Architectures, by Neil Ford, Rebecca Parsons and Patrick Kua, 2017.

[ParallelChange](https://martinfowler.com/bliki/ParallelChange.html), by Danilo Sato.

[SacrificalArchitecture](https://martinfowler.com/bliki/SacrificialArchitecture.html), by Martin Fowler.
