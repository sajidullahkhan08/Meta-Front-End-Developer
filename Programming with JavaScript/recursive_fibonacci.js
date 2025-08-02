// function to calculate Fibonacci number using recursion

function fibonacci(number) {
    if (number < 0) {
        throw new Error("Input must be a non-negative integer");
    }
    if (number === 0) {
        return 0;
    }
    if (number === 1) {
        return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
}

// Example usage
try {
    console.log(fibonacci(10)); // Output: 55
} catch (error) {
    console.error("Error:", error.message);
}