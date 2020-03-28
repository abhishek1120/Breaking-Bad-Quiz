const correctAnswers = ["A", "A", "A", "A"];
const form = document.querySelector(".quiz-form");
const result = document.querySelector(".result");
form.addEventListener("submit", e => {
  e.preventDefault();

  let score = 0;
  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value
  ];
  // check answers
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });
  //   console.log(score);
  scrollTo(0, 0);
  result.classList.remove("d-none");

  // output with animation.
  let output = 0;
  const timer = setInterval(() => {
    result.querySelector("span").textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
});

// window object (global object)
// it is the mother of all object in js

// console.log("Hello");
// window.console.log("hello");

// console.log(document.querySelector("form"));
// console.log(window.document.querySelector("form"));

// alert("hello");
// window.alert("Hello");

// setTimeout(() => {
//   alert("hello ninjas");
// }3000);

// setTimeout uses a callback function and a
// timer(here 3000) so that after 3 sec
// the code written will be executed.

// let i = 0;
// const timer = setInterval(() => {
//   console.log("Hello");
//   i++;
//   if (i === 5) {
//     clearInterval(timer);
//   }
// }, 1000);

// it fires the function after a interval
// of time provided at the last(here 1000)
