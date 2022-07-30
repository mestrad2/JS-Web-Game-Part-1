/*Declare functions to create items/images/background */

function newImage(src1, px1, px2) {
    let image = document.createElement('img');
    image.src = `assets/${src1}`;
    image.style.position = 'fixed';
    image.style.left = `${px1}px`;
    image.style.bottom = `${px2}px`;
    document.body.append(image);
}

function newItem(src1, px1, px2) {
    let item = document.createElement('img');
    item.src = `assets/${src1}`;
    item.style.position = 'fixed';
    item.style.left = `${px1}px`;
    item.style.bottom = `${px2}px`;
    document.body.append(item);

    item.addEventListener('dblclick', function(){
        item.remove();
    });
}

function backgroundTile(src1, left, bottom, width, height) { 
    for(let h = 0; h < height; h++){
        for(let w = 0; w < width; w++){
            newImage(src1, left + w*100, bottom + h*100)
        }
    }
}

/*Invoke functions to create background */

let horizon = window.innerHeight / 1.75;
let sky = window.innerHeight - horizon;
let grass = horizon;

backgroundTile('sky.png', 0, horizon, window.innerWidth/100, sky/100)
backgroundTile('grass.png', 0, 0, window.innerWidth/100, grass/100)


/*Invoke functions to create images/items */

newImage('green-character.gif', 100, 100);
newImage('pine-tree.png', 450, 200);
newImage('tree.png', 200, 300);
newImage('pillar.png', 350, 100);
newImage('crate.png', 150, 200);
newImage('well.png', 500, 425);
newItem("sword.png", 500, 405);
newItem("sheild.png", 165, 185);
newItem("staff.png", 600, 100);


