---
layout: default
title: Data
permalink: data
---

# Data

This page contains information about data in several forms.

## Semantics

A dataset (usually a table) is a collection of values. Values belong to a variable (a column), and an observation (a row).

## Data Science

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

## Structured Query Language (SQL)

### Norms

## References

[Tidy Data](https://vita.had.co.nz/papers/tidy-data.pdf), by Hadley Wickham.
