import './modules/books.js';
import './modules/navigation.js';
import { DateTime } from '../node_modules/luxon/src/luxon.js';


const displayDate = () => {
    setInterval(() => {
      const now = DateTime.now();
      const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const formatTime = (time) => (time < 10 ? `0${time}` : time);
      const dateText = `${months[now.month - 1]} ${now.day}, ${now.year}, ${formatTime(now.hour)}:${formatTime(now.minute)}:${formatTime(now.second)}`;
      const awesomeDate = document.querySelector('#awesome-date');
      awesomeDate.textContent = dateText;
    }, 1000);

   
  }

  //call the displayDate function
displayDate();


