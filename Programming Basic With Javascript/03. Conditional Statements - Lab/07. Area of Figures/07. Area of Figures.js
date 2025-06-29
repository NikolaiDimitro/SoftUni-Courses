function areaOfFigures(figure, a, b) {

    if (figure === "square") {

        console.log((a * a).toFixed(3));

    } else if (figure === "rectangle") {

        console.log((a * b).toFixed(3));

    } else if (figure === "circle") {

        console.log((3.14159265358979323846 * a * a).toFixed(3));

    } else if (figure === "triangle") {

        console.log((a * b / 2).toFixed(3));

    }
}
areaOfFigures("square", 5);
areaOfFigures("rectangle", 7, 2.5);
areaOfFigures("circle", 6);
areaOfFigures("triangle", 4.5, 20);