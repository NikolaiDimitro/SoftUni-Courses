function christmasTree(n) {
    for (let i = 0; i <= n; i++) {
        let spaces = ' '.repeat(n - i);

        if (i === 0) {
            console.log(spaces + ' |');
        } else {
            let stars = '*'.repeat(i);
            console.log(spaces + stars + ' | ' + stars);
        }
    }
}
christmasTree(1);
christmasTree(2);
christmasTree(3);
christmasTree(4);