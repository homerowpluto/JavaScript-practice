let countdown = function (due) {
  const now = new Date();

  const rest = Math.abs(due.getTime() - now.getTime());
  const sec = Math.floor(rest / 1000) % 60;
  const min = Math.floor(rest / 1000 / 60) % 60;
  const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
  const days = Math.floor(rest / 1000 / 60 / 60 / 24) % 365;
  const years = Math.floor(rest / 1000 / 60 / 60 / 24 / 365);

  return [years, days, hours, min, sec];
}

let goal = new Date('2021-7-23'); // set date for tokyo olympic 2021

console.log(countdown(goal));

let recalc = function() {
  let counter = countdown(goal);

  document.getElementById('year').textContent = counter[0];
  document.getElementById('day').textContent = counter[1];
  document.getElementById('hour').textContent = counter[2];
  document.getElementById('min').textContent = counter[3];
  document.getElementById('sec').textContent = counter[4];

  refresh(); // call refresh inside recalc to loop
}

// call recalc after 1 second
let refresh = function() {
  setTimeout(recalc, 1000);
}

recalc();