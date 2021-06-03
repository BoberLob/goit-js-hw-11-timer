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


// ##############
// class CountdownTimer {
//     constructor({selector, targetDate}) {
//         this.selector = document.querySelector(selector);
//         this.targetDate = targetDate;
//         this.intervalId = null;
//         this.refs = {
//             days: this.selector.querySelector('[data-value="days"]'),
//             hours: this.selector.querySelector('[data-value="hours"]'),
//             mins: this.selector.querySelector('[data-value="mins"]'),
//             secs: this.selector.querySelector('[data-value="secs"]'),
//         }
//         this.init();
//         this.start();
//     }

//     init() {
//         const timeParts = this.getTimeParts(0);
//         this.renderRefs(timeParts);
//     }

//     start() {
//         this.intervalId = setInterval(() => {
//             const time = this.targetDate - Date.now();
//             if (time <= 0) {
//                 clearInterval(this.intervalId);
//                 return;
//             }

//             const timeParts = this.getTimeParts(time);
//             this.renderRefs(timeParts);
//         }, 1000)
//     }

//     renderRefs({days, hours, mins, secs}){
//         this.refs.days.textContent = days;
//         this.refs.hours.textContent = hours;
//         this.refs.mins.textContent = mins;
//         this.refs.secs.textContent = secs;
//     }

//     getTimeParts(time)
//     {
//         const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//         const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//         const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//         const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//         return {days, hours, mins, secs};
//     }

//     pad(value) {
//         return String(value).padStart(2, '0');
//     }
// }





// new CountdownTimer({
//     selector: '#timer-1',
//     targetDate: new Date('Jul 17, 2021'),
// });




// #############################################
// import refs from './refs.js';

// class CountdownTimer {
//   constructor({ selector, targetDate }) {
//     this.elements = this.getElements(selector);
//     this.targetDate = targetDate;
//     this.init();
//     this.startCount();
//   }

//   getElements(timerId) {
//     const refs = {
//       dayCell: document.querySelector(`${timerId} [data-value="days"]`),
//       hourCell: document.querySelector(`${timerId} [data-value="hours"]`),
//       minCell: document.querySelector(`${timerId} [data-value="mins"]`),
//       secCell: document.querySelector(`${timerId} [data-value="secs"]`),
//     };
//     return refs;
//   }

//   getTimeComponents(time) {
//     const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = this.pad(
//       Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
//     );
//     const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

//     return { days, hours, mins, secs };
//   }

//   pad(value) {
//     return String(value).padStart(2, '0');
//   }

//   // updateTimeCells({ days, hours, mins, secs }) {
//   //   this.elements.dayCell.textContent = days;
//   //   this.elements.hourCell.textContent = hours;
//   //   this.elements.minCell.textContent = mins;
//   //   this.elements.secCell.textContent = secs;
//   // }

//   initVals() {
//     let remainingTime = this.getTimeComponents(this.targetDate - new Date());
//     this.elements.dayCell.textContent = remainingTime.days;
//     this.elements.hourCell.textContent = remainingTime.hours;
//     this.elements.minCell.textContent = remainingTime.mins;
//     this.elements.secCell.textContent = remainingTime.secs;
//   }

//   init() {
//     const passedDateVal = '00';
//     if (this._targetDate <= new Date()) {
//       this.elements.dayCell.textContent = passedDateVal;
//       this.elements.hourCell.textContent = passedDateVal;
//       this.elements.minCell.textContent = passedDateVal;
//       this.elements.secCell.textContent = passedDateVal;
//       return;
//     }

//     this.initVals();
//   }

//   startCount() {
//     const timerActivity = setInterval(() => {
//       if (this.targetDate <= new Date()) {
//         clearInterval(timerActivity);
//         return;
//       }

//       this.initVals();
//     }, 1000);
//   }
// }

// const timer = new CountdownTimer({
//   selector: '#timer-1',
//   targetDate: new Date('Jun 1, 2021'),
// });


// CountdownTimer.prototype.start = function() {
//     if(this.isActivTimer) {
//         return;
//     }

//     if(!getValueCalendar()){
//         return alert('Сначала укажите дату');
//     }

//     this.isActivTimer = true;
//     const targetDate = new Date(getValueCalendar()).getTime()                

//     this.intervalId = setInterval(()=>{
//         const currentTime = Date.now();
//         const deltaTime = targetDate - currentTime;
//         updateClockFace(deltaTime);                    
//     },1000)
// };

// CountdownTimer.prototype.stop = function(){
//     clearInterval(this.intervalId);
//     this.intervalId = null;
//     this.isActivTimer = false;
//     updateClockFace(0);
// };



// function getValueCalendar(){
//     return refs.calendar.value;
// }

// refs.btnStart.addEventListener('click', timer.start.bind(timer));
// refs.btnStop.addEventListener('click', timer.stop.bind(timer));



// maximus 
// ##########


// import refs from './refs';

// const CountdownTimer = function({selector, targetDate}){
//     this.selector = selector;
//     this.targetDate = targetDate;
//     this.intervalId = null;
//     this.isActivTimer = false;   
      
// };

// CountdownTimer.prototype.start = function() {
//     if(this.isActivTimer) {
//         return;
//     }

//     if(!getValueCalendar()){
//         return alert('Сначала укажите дату');
//     }

//     this.isActivTimer = true;
//     const targetDate = new Date(getValueCalendar()).getTime()                

//     this.intervalId = setInterval(()=>{
//         const currentTime = Date.now();
//         const deltaTime = targetDate - currentTime;
//         updateClockFace(deltaTime);                    
//     },1000)
// };

// CountdownTimer.prototype.stop = function(){
//     clearInterval(this.intervalId);
//     this.intervalId = null;
//     this.isActivTimer = false;
//     updateClockFace(0);
// };

// const timer = new CountdownTimer({   
//     selector: '#timer-1',
//     targetDate: new Date('Jan-14-2021'),
// });

// function updateClockFace(time) {
//     const days = pad(Math.floor(time / (1000 * 60 * 60 * 24)));
//     const hours = pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
//     const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//     const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//     refs.days.textContent = days;
//     refs.hours.textContent = hours;
//     refs.mins.textContent = mins;
//     refs.secs.textContent = secs;    
// }

// function pad(value) {
//     return String(value).padStart(2,'0');
// }

// function getValueCalendar(){
//     return refs.calendar.value;
// }

// refs.btnStart.addEventListener('click', timer.start.bind(timer));
// refs.btnStop.addEventListener('click', timer.stop.bind(timer));
