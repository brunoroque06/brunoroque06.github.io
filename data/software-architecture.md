# Software Architecture

This page contains information on systems designs, and problem solving. Its main focus is Software Architecture, but most concepts are applicable to any area where design is involved.

"Organizations which design systems... are constrained to produce designs which are copies of the communication structures of these organizations." - Melvin Conway

## Design

- Four essential steps to iterate over:

  1. Which are the problems? Use cases, business requirements, company goals.
  2. How to solve them? Define "-ilities" (like speed, scalability, deployability, etc).
  3. Why?
  4. How to validate?
          
- Architecture components that can change, that are volatile, should be identified by looking at the clients and at the future.
- Conceptual Integrity: All of the parts of a system relate to each other and relate to the whole. There is nothing unnecessary, and all of the parts have an internal consistency. The design must proceed from one mind, or from a very small number of agreeing resonant minds.
- "After teaching a software engineering laboratory more than 20 times, I came to insist that student teams as small as four people choose a manager and a separate architect. Defining distinct roles in such small teams may be a little extreme, but I have observed it to work well and to contribute to design success even for small teams." - Frederick P. Brooks Jr
- Planning horizons: in the early planning phases, developers spend significant effort on activities like research, often in the form of reading, to validate their assumptions. Based on their studies, what is "best practice" or "best in class" at that time form part of the basic fundamental assumptions before developers write any code, or release software to end users. More and more effort put into assumptions, even if they turn out to be false in six months, leads to a string attachment to them. The Sunk Cost Fallacy describes decisions affected by emotional investment. The more invests time or effort into something, the harder it becomes to abandon it. In software, this is seen in the form of the irrational artifact attachment - the more time and effort you invest in planning or a document, the more likely you will protect what's contained in the plan or document even in the face of evidence that it is inaccurate or outdated. Don't become irrationally attached to handcrafted artifacts. Beware of long planning cylces that force architects into irreversible decisions and find waus to keep options open.  Breaking large programs of work into smaller early deliverables tests the feasibility of both the architectural choices and the development infrastructure. Architects should avoid following technologies that require a significant upfront investment before software is actually built (e.g., licenses, contracts) before they have validated through end-user feedback that the technology actually fits the problem they are trying to solve.
- Domain-centric teams tend to be cross-functional, meaning every project role is covered by someone on the project.  The goal of a Domain-centric team is to eliminate operational friction. The team has all the roles needed to design, implement, and deploy their service, including traditionally separate roles like operations. Teams should be organized around business capabilities, not job functions.
- Product over project. Software projects have a common workflow in most organizations. A problem is identified, a development team is formed, problem is solved until "completion", and the software is handed over to operations for care, feeding, and maintenance for the rest of its life. The project team moves on to the next problem. This causes some problems: bug fixes are often difficult to manage, developers are isolated from the operational aspects of their code, and they care less about things like quality. In general, the more layers of indirection between a developr and their running code, the less connection they have to that code. This sometimes leads to an "us versus them" mentality. By thinking of software as a product, it shifts the company's perspective in 3 ways.  First, products live forever. Cross-functional teams stay associated with their product. Second, each product has an owner who advocates for its use within the ecosystem and manages things like requirements. Third, because the team is cross-functional, each role needed by the product is represented.
- Teams should be small, in order to minimize the required connections, and should also be cross-functional to eliminate artificial friction imposed by coordinating across silos. Each team shouldn't have to know what other teams are doing, unless integration points exist between the teams. Even then, fitness functions should be used to ensure itegrut of integrations points. The number of connections between development teams should also be low.
- Microservice vs Service Based architecture (monolithic DB)
- Fitness function
- Expand Contract Pattern
- Evolutionary Architecture: fitness function, incremental change, appropriate coupling.
- Understand the business problem before choosing an architecture.
- All architectures become iteractive because of unknown unknowns; agile just recognizes this and does it sooner - Mark Richards
- Build just-in-time anti-corruption layers to isolate against (3rd party) library changes.

## Codebase

- Mono-repositories provide advantages like TODO
- Development processes should be taken into account when making the design decisions, since they will impact TODO

## WIP

- Build sacrificial Architectures
- Mitigate external change: 

## Release Management

- Speed of evolution is a function of cycle time: faster cycle time allows faster evolution.

## Antipatterns

- An antipattern is a practice that initially looks like a good idea, but turns out to be a mistake. Furthermore, there are better alternatives for most antipatterns.
- Vendor king: do not couple architecture to a vendor (products, tools, etc).
- Last 10% trap: creating a solution to a problem that only achieves 90% of the requirements.
- Code reuse abuse: ease of code use is often inversely proportional to how reusable that code is. The more effort developers put into making code reusable the harder it is to use. Making code reusable involves adding additional options and decision points to accommodate the different uses. The more developers add hooks to enable reusability the more they harm the basic usability of the code. When developers build code to be reusable they must add features to accommodate the myriad ways developers will eventually use the code. All that future proofing makes it more difficult for developers to use the code for a single purpose. Code reuse can be an asset but also a potencial liability. Make sure the coupling points introduced in your code don't conflict with other goals in the architecture.  An extreme quote: "Software reuse is more like an organ transplant than snapping together Lego blocks. - John D. Cook.

## References

Building Evolutionary Architectures, by Neil Ford, Rebecca Parsons and Patrick Kua, 2017.

[CanaryRelease](https://martinfowler.com/bliki/CanaryRelease.html), by Danilo Sato.

[ParallelChange](https://martinfowler.com/bliki/ParallelChange.html), by Danilo Sato.

[SacrificalArchitecture](https://martinfowler.com/bliki/SacrificialArchitecture.html), by Martin Fowler.

