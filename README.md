# JavaScript Loop Error: Unexpected Loop Termination

This repository demonstrates a common error in JavaScript loops, specifically unexpected loop termination.  The `bug.js` file contains code with the error, while `bugSolution.js` provides a corrected version.

The error arises from incorrect placement or logic in loop control statements such as `break` and `continue`.  Understanding how these statements modify the flow of a loop is key to avoiding this error.

## How to reproduce the bug
1. Clone this repository.
2. Navigate to the directory.
3. Run the `bug.js` file using Node.js (e.g. `node bug.js`). Observe that the loop terminates prematurely.

## Solution
The `bugSolution.js` file provides the corrected version, showcasing how to properly control loop termination to achieve the intended behavior.

## Lessons Learned
- Carefully review loop conditions and exit strategies to avoid premature termination.
- Ensure `break` and `continue` statements are used appropriately and logically.
- Thoroughly test loop behavior to catch unexpected behavior.