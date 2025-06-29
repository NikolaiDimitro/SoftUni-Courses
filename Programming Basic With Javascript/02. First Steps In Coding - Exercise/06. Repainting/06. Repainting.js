function repaiting (nailon, boq, razreditel, chasove) {

let materials = ((nailon + 2) * 1.5) + (boq + (boq * 0.1)) * 14.5 + razreditel * 5 + 0.4

console.log(materials + (materials * 0.3 * chasove));

}
repaiting (10, 11, 4, 8);
repaiting (5, 10, 10, 1);