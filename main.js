let planes = 8;

preloadImages = () => {
    const assets = document.querySelector('a-assets');
    let images = [];

    for (i = 1; i < planes; i++) {
        images[i] = document.createElement('img');
        images[i].setAttribute('id', 'cloud' + i);
        images[i].setAttribute('src', 'assets/' + i + '-min.jpg');
        
        assets.appendChild(images[i]);
    }    
}
preloadImages();

randomPosition = () => {
    let numbers = {};
    let max = 20;
    let min = -20;
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    let y = Math.floor(Math.random() * (max - min + 1)) + min;
    let z = Math.floor(Math.random() * (max - min + 1)) + min;

    numbers.x = x;
    numbers.y = y;
    numbers.z = z;

    return numbers;
}
randomPosition();

randomRotation = () => {
    let numbers = {};
    let max = 180;
    let min = 45;
    let x = Math.floor(Math.random() * (max - min + 1) + min);
    let y = Math.floor(Math.random() * (max - min + 1) + min);
    let z = Math.floor(Math.random() * (max - min + 1) + min);

    numbers.x = x;
    numbers.y = y;
    numbers.z = z;

    return numbers;
}
randomRotation();

populateSky = () => {
    const sky = document.querySelector('a-scene');
    // let images = [];

    for (i = 1; i < planes; i++) {
        let positionArray = randomPosition();
        let rotationArray = randomRotation();

        image = document.createElement('a-image');
        image.setAttribute('src', '#cloud' + i);
        image.setAttribute('position', positionArray);
        image.setAttribute('rotation', rotationArray);
        image.setAttribute('scale', '17 17 17')

        // console.log(positionArray);
        // console.log(image);

        sky.appendChild(image);
    }
}
populateSky();
populateSky();
populateSky();