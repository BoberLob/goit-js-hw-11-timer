const refs = {
  days: document.querySelector('[data-value="days"]'),
  hours: document.querySelector('[data-value="hours"]'),
  mins: document.querySelector('[data-value="mins"]'),
  secs: document.querySelector('[data-value="secs"]'),
  btnStart: document.querySelector('[data-action="start"]'),
  btnStop: document.querySelector('[data-action="stop"]'),
  calendar: document.querySelector('.calendar'),
};
function getValueCalendar() {
  return refs.calendar.value;
}

refs.btnStart.addEventListener('click', timer.start.bind(timer));
refs.btnStop.addEventListener('click', timer.stop.bind(timer));

export default refs;
