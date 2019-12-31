---
layout: default
title: Data
permalink: data
---

# Data

This page contains information about data in several forms.

## Data Science

### Semantics

A dataset (usually a table) is a collection of values. Values belong to a variable (a column), and an observation (a row).

### Tidying Data

Tidy data principles:

- each variable forms a column;
- each observation forms a row;
- each type of observational unit forms a table.

In order to comply with the above mentioned principles, one might need to:

- melt the dataset (turn rows into columns). E.g. of columns that should be melted: week1, week2;
- splitting columns that contain multiple variables;
- each type of observational unit should be broken down into a dataset (table). E.g.: dataset with songs, and their ranks per week. If these were in one dataset, there would be duplication of values;
- join information of a single type of observational unit that is spread across multiple datasets.

## Relational Database

### Semantics

Relations (tables) are composed by tuples (rows), and attributes (columns). Candidate keys (primary/secondary keys) of a relation are a set of attributes such that every tuple has unique values for.

### Normalization

Normalization is the process of structuring a relational database in accordance with a series of norms/principles in order to reduce data redundancy and improve data integrity.

Norms (cumulative):

- 1NF: the values in each column of a table must be atomic.
- 2NF: every non-key attribute must depend on the whole key, not just part of it. E.g. of relation: `Book: id, name, type, price {id, type}`, where there can be several types for a single id. This relation should be split into: `Book: id, name {id}` and `BookPrice: id, type, price {id, type}`.
- 3NF: no transitive dependencies. E.g. of relation: `Book: id, genre_id, genre_name`. It should be split into: `Book: id, genre_id` and `Genre: id, name`.

## References

[Database Normalization](https://en.wikipedia.org/wiki/Database_normalization#Normal_forms).

[The Principle of Orthogonal Design](http://www.dpxo.net/articles/POD1.html), by David Portas.

[Tidy Data](https://vita.had.co.nz/papers/tidy-data.pdf), by Hadley Wickham.
