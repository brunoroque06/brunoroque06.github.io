---
layout: default
title: Data
permalink: data
---

# Data

This page contains information about data in several forms.

## Data Science

### Semantics

A dataset (usually a table) is a collection of values. Values belong to a variable (a column), and an observation (a row). An observational unit is an entity composed by a set of variables.

### Tidying Data

Tidy data principles:

- each variable forms a column;
- each observation forms a row;
- each observational unit forms a table.

In order to comply with the above mentioned principles, one might need to:

- melt the dataset (turn rows into columns). E.g. columns that should be melted: `week1`, `week2`;
- split columns that contain multiple variables;
- break down each observational unit into a dataset (table). E.g.: dataset with songs, and their ranks per week. If these were in one dataset, there would be duplication of values;
- join information of a single observational unit that is spread across multiple datasets.

## Relational Database

### Semantics

Relations (tables) are composed by tuples (rows), and attributes (columns).

A superkey is any set of attributes that, combined together, are unique. A candidate key (primary/secondary key) is a minimal (subset) superkey. There are typically fewer candidate keys than superkeys.

Functional dependency: given a relation `R`, a set of attributes `X` in `R` is said to functionally determine another set of attributes `Y`, also in `R`, (written `X -> Y`) if, and only if, each `X` value in `R` is associated with precisely one `Y` value in `R`. E.g. where `gender -> salutation`:

| id  | gender | salutation |
| :-: | :----: | :--------: |
|  0  |  male  |    Mr.     |
|  1  | female |    Mrs.    |

### 1NF

> The values in each column of a table must be atomic.

### 2NF

> Every non-key attribute must depend on the whole key, not just part of it.

Bad:

| id\* | name  | cover\* | price |
| :--: | :---: | :-----: | :---: |
|  0   | book0 |  hard   |  20   |
|  0   | book0 |  soft   |  10   |

The attribute `name` does not depend on the whole key.

Good:

| id\* | name  |
| :--: | :---: |
|  0   | book0 |

| id\* | cover\* | price |
| :--: | :-----: | :---: |
|  0   |  soft   |  10   |
|  0   |  hard   |  20   |

### 3NF

> No non-key attribute depends on other non-key attributes, i.e., all the non-key attributes must depend only on the keys.

Bad:

| id\* | genre_id | genre_name |
| :--: | :------: | :--------: |
|  0   |    0     |   novel    |
|  1   |    0     |   novel    |

`genre_name -> genre_id`

Good:

| id\* | genre |
| :--: | :---: |
|  0   |   2   |
|  1   |   2   |

| id\* | name  |
| :--: | :---: |
|  2   | novel |

### 4NF

> No multivalued dependency.

A multivalued dependency exists when there are (at least) three attributes `X` ,`Y`, and `Z` in a relation and for a value of `X` there is a well defined set of values of `Y` and another of `Z` (written `X ->> Y` and `X ->> Z`). However, the set of values of `Y` is independent of set `Z` and vice versa.

Bad:

| id\* | publisher\* | writer\* |
| :--: | :---------: | :------: |
|  0   |     p0      |    w0    |
|  0   |     p1      |    w1    |

Good:

| id\* | publisher\* |
| :--: | :---------: |
|  0   |     p0      |
|  0   |     p1      |

| id\* | writer\* |
| :--: | :------: |
|  0   |    w0    |
|  0   |    w1    |

### The Principle of Orthogonal Design

> Within a given database, no two distinct base tables should have overlapping meanings.

Bad:

```sql
love (giver, receiver)
hate (giver, receiver)
```

Good:

```sql
relation (giver, receiver, type)
```

## References

[Database Normalization](https://en.wikipedia.org/wiki/Database_normalization#Normal_forms).

[Multivalued Dependency](https://www.sciencedirect.com/topics/computer-science/multivalued-dependency), by Jan L. Harrington.

[The Principle of Orthogonal Design](https://web.archive.org/web/20100224075429/http://www.dbdebunk.com/page/page/622331.htm), by Chris Date and David McGoveran.

[Tidy Data](https://vita.had.co.nz/papers/tidy-data.pdf), by Hadley Wickham.
