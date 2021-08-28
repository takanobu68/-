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

const tl = gsap.timeline({
  onComplete: moved,
  paused: true,
  defaults: { duration: 3 },
});
tl.to(".box-1", testmove[0])
  .to(
    ".box-2",
    {
      x: 0,
      y: -100,
      z: -200,
      scale: 1.5,
      rotateY: 0,
    },
    "<"
  )
  .to(".box-3", { x: 400, y: "50%", z: -25, rotateY: "-75deg", scale: 1 }, "<")
  .to(".box-4", { x: 0, y: 25, z: 150, rotateY: 0 }, "<");

let ontimeMove = false;

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  // tl.reverse();
  ontimeMove ? tl.restart() : tl.play();
  if (!ontimeMove) ontimeMove = !ontimeMove;
  console.log(ontimeMove);
});

function moved() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((el, ind) => {
    let boxPos = ind + 2;
    if (boxPos > boxes.length) {
      boxPos = 1;
    }
    el.classList.remove(`box-${++ind}`);
    el.classList.add(`box-${boxPos}`);
    console.log(el);
  });
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

// function move1() {
//   let tl = gsap.timeline({ defaults: { duration: 3 } });
//   tl.to(".box-1", { x: -400, y: 0, z: -25, rotateY: "75deg" })
//     .to(
//       ".box-2",
//       {
//         x: 0,
//         y: -100,
//         z: -200,
//         scale: 1.5,
//         rotateY: 0,
//       },
//       "<"
//     )
//     .to(
//       ".box-3",
//       { x: 400, y: "50%", z: -25, rotateY: "-75deg", scale: 1 },
//       "<"
//     )
//     .to(".box-4", { x: 0, y: 25, z: 150, rotateY: 0 }, "<");
// }
// function move1() {
//   let tl = gsap.timeline({ defaults: { duration: 3 } });
//   tl.to(".box-1", { x: -400, y: 0, z: -25, rotateY: "75deg" })
//     .to(
//       ".box-2",
//       {
//         x: 0,
//         y: -100,
//         z: -200,
//         scale: 1.5,
//         rotateY: 0,
//       },
//       "<"
//     )
//     .to(
//       ".box-3",
//       { x: 400, y: "50%", z: -25, rotateY: "-75deg", scale: 1 },
//       "<"
//     )
//     .to(".box-4", { x: 0, y: 25, z: 150, rotateY: 0 }, "<");
// }
