class Pig {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}

let id = 1;
let pig1 = new Pig(id, "Dima");

pig1.isFat = true;
pig1.length = 0;



document.querySelector('button#add').onclick = (e) => {
    id++;
    pig1[pig1.length] = new Pig(id, 'child');
    pig1.length++;
    console.log(pig1);
};

document.querySelector('button#get').onclick = (e) => {
    for (let i = 0; i < pig1.length; i++) {
        console.log(pig1[i]);
        delete pig1[i];
    }
};

