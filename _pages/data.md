---
layout: default
title: Data
permalink: data
---

# Data

This page contains information about data in several forms.

## Data Science

### Semantics

A dataset (usually a table) is a collection of values. Values belong to a variable (a column), and an observation (a row). An observational unit is an entity composed by a set of variables (e.g: `person`, `book`).

### Tidying Data

Tidy data principles:

- each variable forms a column;
- each observation forms a row;
- each observational unit forms a table.

In order to comply with the above mentioned principles, one might need to:

- melt the dataset (turn rows into columns). E.g. of columns that should be melted: `week1`, `week2`;
- split columns that contain multiple variables;
- break down each observational unit into a dataset (table). E.g.: dataset with songs, and their ranks per week. If these were in one dataset, there would be duplication of values;
- join information of a single observational unit that is spread across multiple datasets.

## Relational Database

### Semantics

Relations (tables) are composed by tuples (rows), and attributes (columns).

A superkey is any set of attributes that, combined together, are unique. A candidate key (primary/secondary key) is a minimal (subset) superkey. There are typically fewer candidate keys than superkeys.

Functional dependency: given a relation `R`, a set of attributes `X` in `R` is said to functionally determine another set of attributes `Y`, also in `R`, (written `X -> Y`) if, and only if, each `X` value in `R` is associated with precisely one `Y` value in `R`. E.g.: attributes `gender` and `salutation`, when for a `gender` value of `male`, `Mr.` is implied in `salutation`.

A multivalued dependency exists when there are (at least) three attributes `X` ,`Y`, and `Z` in a relation and for a value of `X` there is a well defined set of values of `Y` and another of `Z` (written `X ->> Y` and `X ->> Z`). However, the set of values of `Y` is independent of set `Z` and vice versa. E.g.: `movie (name, producer, star) {name, producer, star}`, where `producer` and `star` only depend on the `name`, and not on each other.

### Normalization

Normalization is the process of structuring a relational database in accordance with a series of norms/principles in order to reduce data redundancy and improve data integrity.

Norms (cumulative):

- 1NF: the values in each column of a table must be atomic.
- 2NF: every non-key attribute must depend on the whole key, not just part of it. E.g.: `book (id, name, type, price) {id, type}`, where there can be several types for a single id. The problem is that the attribute `name` does not depend on the whole key. The relation should instead be split into: `book (id, name) {id}` and `book_price (id, type, price) {id, type}`.
- 3NF: no non-key attribute depends on other non-key attributes, i.e., all the non-key attributes must depend only on the keys. E.g.: `book (id, genre_id, genre_name) {id}`. It should be split into: `book (id, genre_id) {id}` and `genre (id, name) {id}`.
- 4NF: no multivalued dependency. E.g.: `movie (name, producer, star) {name, producer, star}`, where `producer` and `star` only depend on the `name`, and not on each other. It should be split into: `movie_producer (name, producer) {name, producer}`, and `movie_star (name, star) {name, star}`.

### The Principle of Orthogonal Design

It states that: `Within a given database, no two distinct base tables should have overlapping meanings.`. E.g.: `love (giver, receiver)` and `hate (giver, receiver)` should be merged `relation (giver, receiver, type)`.

## References

[Database Normalization](https://en.wikipedia.org/wiki/Database_normalization#Normal_forms).

[Multivalued Dependency](https://www.sciencedirect.com/topics/computer-science/multivalued-dependency), by Jan L. Harrington.

[The Principle of Orthogonal Design](https://web.archive.org/web/20100224075429/http://www.dbdebunk.com/page/page/622331.htm), by Chris Date and David McGoveran.

[Tidy Data](https://vita.had.co.nz/papers/tidy-data.pdf), by Hadley Wickham.
