// import {PANOLENS} from scripts/panolens.min.js
var panorama1, panorama2, viewer;

panorama1 = new PANOLENS.ImagePanorama("./images/Entrance.jpg");
panorama2 = new PANOLENS.ImagePanorama("./images/reception.jpg");
panorama3 = new PANOLENS.ImagePanorama("./images/EBlockCenter.jpg");
panorama4 = new PANOLENS.ImagePanorama("./images/SudhamaniHall.jpg");
panorama5 = new PANOLENS.ImagePanorama("./images/VyasaHall.jpg");
panorama6 = new PANOLENS.ImagePanorama("./images/KrishnaHall.jpg");
panorama7 = new PANOLENS.ImagePanorama("./images/Library.jpg");
panorama8 = new PANOLENS.ImagePanorama("./images/Canteen.jpg");
panorama9 = new PANOLENS.ImagePanorama("./images/FountainRoad.jpg");
panorama10 = new PANOLENS.ImagePanorama("./images/ATMRoad.jpg");

var lookAtPositions = [
  new THREE.Vector3(5000, -25000, 100),
  new THREE.Vector3(6000, -500000, -30000),
  new THREE.Vector3(6000, -500000, -35500),
];

// Linking between panoramas
panorama1.addEventListener("enter", function () {
  viewer.tweenControlCenter(lookAtPositions[0], 0);
});
panorama2.addEventListener("enter", function () {
  viewer.tweenControlCenter(lookAtPositions[0], 0);
});
panorama3.addEventListener("enter", function () {
  viewer.tweenControlCenter(lookAtPositions[1], 0);
});
panorama4.addEventListener("enter", function () {
  viewer.tweenControlCenter(lookAtPositions[0], 0);
});
panorama5.addEventListener("enter", function () {
  viewer.tweenControlCenter(lookAtPositions[0], 0);
});
panorama6.addEventListener("enter", function () {
  viewer.tweenControlCenter(lookAtPositions[0], 0);
});
panorama7.addEventListener("enter", function () {
  viewer.tweenControlCenter(lookAtPositions[0], 0);
});
panorama8.addEventListener("enter", function () {
  viewer.tweenControlCenter(lookAtPositions[2], 0);
});
panorama9.addEventListener("enter", function () {
  viewer.tweenControlCenter(lookAtPositions[0], 0);
});
panorama10.addEventListener("enter", function () {
  viewer.tweenControlCenter(lookAtPositions[0], 0);
});





// Pair with custom scale and image
panorama1.link(
  panorama2,
  new THREE.Vector3(3000, 200, -100),
  500,
  "asset/textures/forward.png"
);
panorama2.link(
  panorama3,
  new THREE.Vector3(500, 100, 400),
  200,
  "asset/textures/arrow-right.png"
);
panorama2.link(
  panorama1,
  new THREE.Vector3(500, 100, -400),
  200,
  "asset/textures/arrow-left.png"
  );

panorama3.link(
  panorama4,
  new THREE.Vector3(600, 100, -400),
  200,
  "asset/textures/arrow-right1.png"
);
panorama3.link(
  panorama2,
  new THREE.Vector3(-80.89, 100, -400),
  200,
  "asset/textures/arrow-left1.png"
);

panorama4.link(
  panorama5,
  new THREE.Vector3(600, 100, 500),
  200,
  "asset/textures/arrow-right2.png"
);
panorama4.link(
  panorama3,
  new THREE.Vector3(600, 100, -500),
  200,
  "asset/textures/arrow-left2.png"
);

panorama5.link(
  panorama6,
  new THREE.Vector3(600, 100, 500),
  200,
  "asset/textures/arrow-right3.png"
);
panorama5.link(
  panorama4,
  new THREE.Vector3(600, 100, -500),
  200,
  "asset/textures/arrow-left3.png"
);

panorama6.link(
  panorama7,
  new THREE.Vector3(600, 100, 500),
  200,
  "asset/textures/arrow-right4.png"
);
panorama6.link(
  panorama5,
  new THREE.Vector3(600, 100, -500),
  200,
  "asset/textures/arrow-left4.png"
);

panorama7.link(
  panorama8,
  new THREE.Vector3(600, 100, 500),
  200,
  "asset/textures/arrow-right5.png"
);
panorama7.link(
  panorama6,
  new THREE.Vector3(600, 100, -500),
  200,
  "asset/textures/arrow-left5.png"
);

panorama8.link(
  panorama9,
  new THREE.Vector3(600, 100, 500),
  200,
  "asset/textures/arrow-right6.png"
);
panorama8.link(
  panorama7,
  new THREE.Vector3(600, 100, -500),
  200,
  "asset/textures/arrow-left6.png"
);

panorama9.link(
  panorama10,
  new THREE.Vector3(600, 100, 500),
  200,
  "asset/textures/arrow-right7.png"
);
panorama9.link(
  panorama8,
  new THREE.Vector3(600, 100, -500),
  200,
  "asset/textures/arrow-left7.png"
);


panorama10.link(
  panorama9,
  new THREE.Vector3(600, 100, -500),
  200,
  "asset/textures/arrow-left8.png"
);

viewer = new PANOLENS.Viewer();
viewer.add(panorama1);
viewer.add(panorama2);
viewer.add(panorama3);
viewer.add(panorama4);
viewer.add(panorama5);
viewer.add(panorama6);
viewer.add(panorama7);
viewer.add(panorama8);
viewer.add(panorama9);
viewer.add(panorama10);