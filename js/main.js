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

// /*
//  * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
//  * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
//  */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

// /*
//  * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
//  * остатка % и делим его на количество миллисекунд в одном часе
//  * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
//  */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

// /*
//  * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
//  * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
//  */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

// /*
//  * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
//  * миллисекунд в одной секунде (1000)
//  */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this._elements = this._getElements(selector);
//     this._targetDate = targetDate;
//     this._init();
//     this._startCount();
//   }

//   _getElements(timerId) {
//     const refs = {
//       dayCell: document.querySelector(`${timerId} [data-value="days"]`),
//       hourCell: document.querySelector(`${timerId} [data-value="hours"]`),
//       minCell: document.querySelector(`${timerId} [data-value="mins"]`),
//       secCell: document.querySelector(`${timerId} [data-value="secs"]`),
//     };

//     return refs;
//   }

//   _convertTime(time) {
//     const pad = function (value) {
//       return String(value).padStart(2, '0');
//     };

//     const calculatedTime = function (time) {
//       const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//       const hours = pad(
//         Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//       );
//       const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//       const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//       return { days, hours, mins, secs };
//     };

//     return calculatedTime(time);
//   }

//   _initVals() {
//     let remainingTime = this._convertTime(this._targetDate - new Date());
//     this._elements.dayCell.textContent = remainingTime.days;
//     this._elements.hourCell.textContent = remainingTime.hours;
//     this._elements.minCell.textContent = remainingTime.mins;
//     this._elements.secCell.textContent = remainingTime.secs;
//   }

//   _init() {
//     const passedDateVal = '00';
//     if (this._targetDate <= new Date()) {
//       this._elements.dayCell.textContent = passedDateVal;
//       this._elements.hourCell.textContent = passedDateVal;
//       this._elements.minCell.textContent = passedDateVal;
//       this._elements.secCell.textContent = passedDateVal;
//       return;
//     }

//     this._initVals();
//   }

//   _startCount() {
//     const timerActivity = setInterval(() => {
//       if (this.targetDate <= new Date()) {
//         clearInterval(timerActivity);
//         return;
//       }

//       this._initVals();
//     }, 1000);
//   }
// }

// const timer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jun 1, 2021'),
// });
