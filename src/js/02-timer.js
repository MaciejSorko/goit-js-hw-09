import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

let countdown = null;
const startBtn = document.querySelector('[data-start]');
startBtn.disabled = true;
const dataDays = document.querySelector('[data-days]');
const dataHours = document.querySelector('[data-hours]');
const dataMin = document.querySelector('[data-minutes]');
const dataSec = document.querySelector('[data-seconds]');
const addLeadingZero = value => {
  return value.toString().padStart(2, '0');
};
function convertMs(ms) {
  // Number of milliseconds per unit of time
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  // Remaining days
  const days = Math.floor(ms / day);
  // Remaining hours
  const hours = Math.floor((ms % day) / hour);
  // Remaining minutes
  const minutes = Math.floor(((ms % day) % hour) / minute);
  // Remaining seconds
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
      const dateStatic = new Date();
      if (selectedDates[0].getTime() > dateStatic.getTime()) {
        startBtn.disabled = false;
        startBtn.addEventListener('click', () => {
          startBtn.disabled = true;
          document.querySelector('input#datetime-picker').disabled = true;
          countdown = setInterval(() => {
            let date = new Date();
            dataDays.textContent = addLeadingZero(
              convertMs(selectedDates[0] - date.getTime()).days
            );
            dataHours.textContent = addLeadingZero(
              convertMs(selectedDates[0] - date.getTime()).hours
            );
            dataMin.textContent = addLeadingZero(
              convertMs(selectedDates[0] - date.getTime()).minutes
            );
            dataSec.textContent = addLeadingZero(
              convertMs(selectedDates[0] - date.getTime()).seconds
            );
            if ((selectedDates[0].getTime() - date.getTime())  < 1000) {
              clearInterval(countdown);
            }
          }, 1000);
         
        });
      } else {
        window.alert('Please choose a date in the future');
        startBtn.disabled = true;
      }
  },
};
flatpickr('input#datetime-picker', options);




