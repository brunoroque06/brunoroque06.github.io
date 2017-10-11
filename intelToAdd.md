Imperative Programming
- modifying mutable variables
- using assignments
- control sequences (if, else, for, break, continue, return)
Pure imperative programming is limited by the "Von Neumann" bottleneck: "One tends to conceptualize data structures word-by-word".

Functional Programming
Focus on the functions.
No mutable variables, assignments, or control sequences. It is stateless.
Very good for exploiting parallelism for multicore.

Substitution model: evaluations reduce expressions to a value, as long as they have no side effects.
&#955; calculus

What is a side effect? "variable++" is a side effect, and cannot be expressed by the substitution model.

Evaluation strategy:
Call-by-value: evaluate operations, and then functions. It has the advantage that it evaluates every function argument only once.
Call-by-name: evaluate functions, and then operations. It has the advantage that a function argument is not evaluated if the corresponding parameter is unused in the evaluation of the function body.

Both strategies reduce to the same final value, as long as:
- the reduced expressions consists of pure functions;
- both evaluations terminate.

Tail Recursion: if a function calls itself as its last action, the function's stack frame can be reused. Tail recursive functions are iterative processes, and no memory problems.
<p class="code__example"><code>def factorial(num: Int): Int = {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (num == 1) num<br>&nbsp;&nbsp;&nbsp;&nbsp;else num * factorial(num - 1)<br>}</code></p>
<p class="code__example"><code>def greatestCommonDivisor(x: Int, y: Int): Int = {<br>&nbsp;&nbsp;&nbsp;&nbsp;if (y == 0) x<br>&nbsp;&nbsp;&nbsp;&nbsp;else greatestCommonDivisor(y, x % y)<br>}</code></p>