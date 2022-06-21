window.onload = () => {
  document.querySelectorAll('.not-active').forEach(item => {
      item.addEventListener('click', event => { 
        highlight(event.currentTarget.id);
      })
    }); 
}
const date = new Date();
const weekDays = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const monthNames = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const daysInCurrentMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

const currentMonth = date.getMonth() + 1;
const currentMonthName = monthNames[date.getMonth()];
const currentYear = date.getFullYear();


const calender = (currMonth, currMonthName, currYear) => {
  const firstDayIndex = date.getDay();
  const lastDayIndex = new Date(currYear, currMonth, 0).getDay();
  
  const monthDays = daysInCurrentMonth(currYear, currMonth);
  const prevMonthDays = daysInCurrentMonth(currYear, currMonth - 1);

  const nextDays = 7 - lastDayIndex;
  const weekDay = document.querySelector(".week-days");
  const monthDay = document.querySelector(".month-days");

  document.querySelector(
    ".month-year"
  ).innerHTML = `<h3>${currMonthName} ${currentYear}</h3>`;

  weekDay.innerHTML = ``;
  for (let i = 0; i < weekDays.length; i++) {
    weekDay.innerHTML += `<h5>${weekDays[i]}</h5>`;
  }

  monthDay.innerHTML = ``;
  for(x = firstDayIndex; x > 0; x--){
    monthDay.innerHTML +=`<h6 class="faint">${prevMonthDays - x + 1}</h6>`
  }

  for (let i = 1; i <= monthDays; i++) {
    if(i === date.getDate() && date.getMonth() === new Date().getMonth()){
      monthDay.innerHTML += `<h6 class="not-active active" id="${i}">${i}</h6>`;  
    }else{
      monthDay.innerHTML += `<h6 class="not-active" id="${i}">${i}</h6>`;
    }    
  }

  for(let i = 1; i <= nextDays; i++){
    monthDay.innerHTML +=`<h6 class="faint">${i}</h6>`
  }
};

const nextMonth = () => {
  date.setMonth(date.getMonth() + 1);
  const currentMonthName = monthNames[date.getMonth()];
  calender(date.getMonth() + 1, currentMonthName, currentYear);
};

const prevMonth = () => {
  date.setMonth(date.getMonth() - 1);
  const currentMonthName = monthNames[date.getMonth()];
  calender(date.getMonth() + 1, currentMonthName, currentYear);
};

calender(currentMonth, currentMonthName, currentYear);

const highlight = (elementId) => {
  console.log(`as${elementId}`);
  document.querySelector('.active').classList.remove('active'); 
  document.getElementById(elementId).classList.add('active');
}