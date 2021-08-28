let moving = 0;

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  // if (moving === 1) {
  //   move1();
  // } else if (moving === 2) {
  //   move2();
  // } else if (moving === 3) {
  //   move3();
  // } else if (moving === 4) {
  //   move4();
  // }
  // `move${moving}`;
  // console.log("`move${moving}`: ", `move${moving}()`);
  // `move${moving}()`;
  move(moving);
  moving++;
  if (moving > testmove.length - 1) moving = 0;
  console.log("moving: ", moving);
});

function move(num) {
  let tl = gsap.timeline({ defaults: { duration: 3 } });
  tl.to(".box-1", testmove[num])
    .to(".box-2", testmove[(num + 1) % testmove.length], "<")
    .to(".box-3", testmove[(num + 2) % testmove.length], "<")
    .to(".box-4", testmove[(num + 3) % testmove.length], "<");
}
function move1() {
  let tl = gsap.timeline({ defaults: { duration: 3 } });
  tl.to(".box-1", testmove[0])
    .to(".box-2", testmove[1], "<")
    .to(".box-3", testmove[2], "<")
    .to(".box-4", testmove[3], "<");
}

function move2() {
  let tl = gsap.timeline({ defaults: { duration: 3 } });
  tl.to(".box-1", testmove[1])
    .to(".box-2", testmove[2], "<")
    .to(".box-3", testmove[3], "<")
    .to(".box-4", testmove[0], "<");
}

function move3() {
  let tl = gsap.timeline({ defaults: { duration: 3 } });
  tl.to(".box-1", testmove[2])
    .to(".box-2", testmove[3], "<")
    .to(".box-3", testmove[0], "<")
    .to(".box-4", testmove[1], "<");
}

function move4() {
  let tl = gsap.timeline({ defaults: { duration: 3 } });
  tl.to(".box-1", testmove[3])
    .to(".box-2", testmove[0], "<")
    .to(".box-3", testmove[1], "<")
    .to(".box-4", testmove[2], "<");
}

const testmove = [
  { x: -400, y: 0, z: -25, rotateY: "75deg" },
  {
    x: 0,
    y: -100,
    z: -200,
    scale: 1.5,
    rotateY: 0,
  },
  { x: 400, y: "50%", z: -25, rotateY: "-75deg", scale: 1 },
  { x: 0, y: 25, z: 150, rotateY: 0 },
];
