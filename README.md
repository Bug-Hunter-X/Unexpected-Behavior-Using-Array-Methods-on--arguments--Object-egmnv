# Unexpected Behavior Using Array Methods on `arguments` Object

This repository demonstrates a common, yet subtle, error in JavaScript related to the `arguments` object within functions.  The `arguments` object, while appearing array-like, lacks standard array methods like `.map()`, `.filter()`, or `.forEach()`.  Attempting to use them directly leads to unexpected behavior or runtime errors.

The `bug.js` file shows an example where `.forEach()` is incorrectly applied.  The `bugSolution.js` file presents the corrected solution using an explicit array conversion or spread syntax.