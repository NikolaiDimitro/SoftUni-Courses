function areaOfFigures(figure, ...params) {

    if (figure === "square") {

        console.log((params[0] * params[0]).toFixed(3));

    } else if (figure === "rectangle") {

        console.log((params[0] * params[1]).toFixed(3));

    } else if (figure === "circle") {

        console.log((Math.PI * params[0] * params[0]).toFixed(3));

    } else if (figure === "triangle") {

        console.log((params[0] * params[1] / 2).toFixed(3));

    }
}
areaOfFigures("square", 5);
areaOfFigures("rectangle", 7, 2.5);
areaOfFigures("circle", 6);
areaOfFigures("triangle", 4.5, 20);