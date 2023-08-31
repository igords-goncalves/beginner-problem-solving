const classifyTriangles = (a, b, c) => {
    if (a + b > c && b + c > a && a + c > b) {
        switch (true) {
            case a === b && b === c:
                return "Equilateral Triangle";
            case a === b || b === c || c === a:
                return "Isosceles Triangle";
            default:
                return "Scalene Triangle";
        }
    }
};

console.log(classifyTriangles(3, 3, 3))
console.log(classifyTriangles(3, 5, 3))
console.log(classifyTriangles(2, 4, 3))

module.exports = classifyTriangles;
