function addition(a, b) {
    if (!a || !b) {
        throw new Error;
    } else if (typeof a === "string" || typeof b === "string") {
        throw new Error;
    } else {
        return a + b;
    }
}

module.exports = addition;