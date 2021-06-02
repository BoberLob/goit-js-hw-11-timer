import refs from './refs.js';

class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.elements = this.getElements(selector);
    this.targetDate = targetDate;
    this.init();
    this.startCount();
  }

  getElements(timerId) {
    const refs = {
      dayCell: document.querySelector(`${timerId} [data-value="days"]`),
      hourCell: document.querySelector(`${timerId} [data-value="hours"]`),
      minCell: document.querySelector(`${timerId} [data-value="mins"]`),
      secCell: document.querySelector(`${timerId} [data-value="secs"]`),
    };
    return refs;
  }

  getTimeComponents(time) {
    const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
    const hours = this.pad(
      Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    );
    const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
    const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

    return { days, hours, mins, secs };
  }

  pad(value) {
    return String(value).padStart(2, '0');
  }

  // updateTimeCells({ days, hours, mins, secs }) {
  //   this.elements.dayCell.textContent = days;
  //   this.elements.hourCell.textContent = hours;
  //   this.elements.minCell.textContent = mins;
  //   this.elements.secCell.textContent = secs;
  // }

  initVals() {
    let remainingTime = this.getTimeComponents(this.targetDate - new Date());
    this.elements.dayCell.textContent = remainingTime.days;
    this.elements.hourCell.textContent = remainingTime.hours;
    this.elements.minCell.textContent = remainingTime.mins;
    this.elements.secCell.textContent = remainingTime.secs;
  }

  init() {
    const passedDateVal = '00';
    if (this._targetDate <= new Date()) {
      this.elements.dayCell.textContent = passedDateVal;
      this.elements.hourCell.textContent = passedDateVal;
      this.elements.minCell.textContent = passedDateVal;
      this.elements.secCell.textContent = passedDateVal;
      return;
    }

    this.initVals();
  }

  startCount() {
    const timerActivity = setInterval(() => {
      if (this.targetDate <= new Date()) {
        clearInterval(timerActivity);
        return;
      }

      this.initVals();
    }, 1000);
  }
}

const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jun 1, 2021'),
});
