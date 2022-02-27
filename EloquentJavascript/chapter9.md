# Chapter 9 Regular Expression

## Creating a regular expression
```js
let ex1 = new RegExp('abc');
let ex2 = /abc/;
```

## Sets of characters

\d	Any digit character <br>
\w	An alphanumeric character (“word character”)<br>
\s	Any whitespace character (space, tab, newline, and similar)<br>
\D	A character that is not a digit<br>
\W	A nonalphanumeric character<br>
\S	A nonwhitespace character<br>
.	Any character except for newline<br>

\[\d.] any digit or a period character<br>
\[0-9] any digit inbetween 0 to 9<br>
/[^01]/ To invert a set of characters - that is, to express that you want to match any character except the ones in the set - caret

## Greed
Repetition operators are greedy \(+, *, ?, {}) <br>
-> They match as much as they can and backtrack from there
<br>
If you put a question mark after them, they become nongreedy \(+?, *?, ??, {}?)

## Exercise

### Regexp golf
#### My solution
```js
verify(/ca[rt]/,
       ["my car", "bad cats"],
       ["camper", "high art"]);

verify(/pr?op/,
       ["pop culture", "mad props"],
       ["plop", "prrrop"]);

verify(/ferr(et|y|ari)/,
       ["ferret", "ferry", "ferrari"],
       ["ferrum", "transfer A"]);

verify(/ious($|\s)/,
       ["how delicious", "spacious room"],
       ["ruinous", "consciousness"]);

verify(/\s(\.|,|;|:)/,
       ["bad punctuation ."],
       ["escape the period"]);

verify(/\w{7,}/,
       ["Siebentausenddreihundertzweiundzwanzig"],
       ["no", "three small words"]);

verify(/(\s|^)[^e]+(\s|$)/i,
       ["red platypus", "wobbling nest"],
       ["earth bed", "learning ape", "BEET"]);

```
