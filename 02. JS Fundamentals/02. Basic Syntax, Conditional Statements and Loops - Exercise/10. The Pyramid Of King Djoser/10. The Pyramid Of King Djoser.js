function thePyramideOfKingDjoser(base, increment) {
    let stone = 0;
    let marble = 0;
    let lapis = 0;
    let gold = 0;
    let height = 0;
    let step = 0;

    for (let currentBase = base; currentBase > 2; currentBase -= 2) {

        step++;

        let totalBlocks = currentBase * currentBase;
        let innerBlocks = (currentBase - 2) * (currentBase - 2);
        let outerBlocks = totalBlocks - innerBlocks;

        stone += innerBlocks * increment;

        if (step % 5 === 0) {

            lapis += outerBlocks * increment;

        } else {

            marble += outerBlocks * increment;

        }

        height++;

    }

    gold = (base % 2 === 0 ? 4 : 1) * increment;
    height++;

    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapis)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(height * increment)}`);

}
thePyramideOfKingDjoser(11, 1);
thePyramideOfKingDjoser(11, 0.75);
thePyramideOfKingDjoser(12, 1);
thePyramideOfKingDjoser(23, 0.5);