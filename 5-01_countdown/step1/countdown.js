let countdown = function (due) {
  const now = new Date();

  const rest = due.getTime() - now.getTime();
  const sec = Math.floor(rest / 1000) % 60;
  const min = Math.floor(rest / 1000 / 60) % 60;
  const hours = Math.floor(rest / 1000 / 60 / 60) % 24;
  const days = Math.floor(rest / 1000 / 60 / 60 / 24);

  return [days, hours, min, sec];
}

let goal = new Date(); // get current date
goal.setHours(23); // set to last hour of current date
goal.setMinutes(59); // set to last minute of current date
goal.setSeconds(59); // set to last second of current date

console.log(countdown(goal));

let counter = countdown(goal);
let time = counter[1] + '時間' + counter[2] + '分' + counter[3] + '秒';
document.getElementById('timer').textContent = time;