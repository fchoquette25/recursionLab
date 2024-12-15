// Memoized Fibonacci Sequence

// store calculated fib numbers
// Base cases: fib(0) = 0, fib(1) = 1
const memo = [0, 1]; 

// define fib function
function fib(n) {
    // check if value is already calculated
    if (memo[n] !== undefined) {
        return memo[n];
    }

    //calculate and store it
    memo[n] = fib(n - 1) + fib(n - 2);

    // give result, return
    return memo[n];
}
