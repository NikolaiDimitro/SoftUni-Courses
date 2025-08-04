function town(arr) {

    let obj = {}

    for (let i of arr) {

        [city, latitude, longitude] = i.split(' | ');

        obj.town = city;
        obj.latitude = Number(latitude).toFixed(2);
        obj.longitude = Number(longitude).toFixed(2);

        console.log(obj);

    }
}
town(['Sofia | 42.696552 | 23.32601', 'Beijing | 39.913818 | 116.363625']);
town(['Plovdiv | 136.45 | 812.575']);