function cats(arr) {

    class Cat {

        constructor(catName, age) {

            this.name = catName;
            this.age = age;

        }

        meow() {

            console.log(`${this.name}, age ${this.age} says Meow`);

        }
    }

    for (let i = 0; i < arr.length; i++) {

        let current = arr[i];
        let name, age;
        [name, age] = current.split(' ');
        let cat = new Cat(name, age);
        cat.meow()
        
    }
}
cats(['Mellow 2', 'Tom 5']);
cats(['Candy 1', 'Poppy 3', 'Nyx 2']);