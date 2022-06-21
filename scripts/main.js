window.onload = () => {
  calender();
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

const calender = () => {
  const currentMonth = date.getMonth() + 1;
  const currentMonthName = monthNames[date.getMonth()];
  const currentYear = date.getFullYear();
  const todayIndex = date.getDay();
  const lastDayIndex = new Date(currentYear, currentMonth, 0).getDay();

  const currentmonthDays = daysInCurrentMonth(currentYear, currentMonth);
  const prevMonthDays = daysInCurrentMonth(currentYear, currentMonth - 1);
  const nextMonthDays = 7 - lastDayIndex;

  const weekDay = document.querySelector(".week-days");
  const monthDay = document.querySelector(".month-days");

  document.querySelector(
    ".month-year"
  ).innerHTML = `<h3>${currentMonthName} ${currentYear}</h3>`;

  weekDay.innerHTML = ``;
  for (let i = 0; i < weekDays.length; i++) {
    weekDay.innerHTML += `<h5>${weekDays[i]}</h5>`;
  }

  monthDay.innerHTML = ``;
  for (x = todayIndex; x > 0; x--) {
    monthDay.innerHTML += `<h6 class="faint">${prevMonthDays - x + 1}</h6>`;
  }

  for (let i = 1; i <= currentmonthDays; i++) {
    if (i === date.getDate() && date.getMonth() === new Date().getMonth()) {
      monthDay.innerHTML += `<h6 class="not-active active" id="${i}${currentMonthName}">${i}</h6>`;
    } else {
      monthDay.innerHTML += `<h6 class="not-active" id="${i}${currentMonthName}">${i}</h6>`;
    }
  }

  for (let i = 1; i <= nextMonthDays; i++) {
    monthDay.innerHTML += `<h6 class="faint">${i}</h6>`;
  }

  document.querySelectorAll('.not-active').forEach(item => {
    item.addEventListener('click', event => {
      highlight(event.currentTarget.id);
    })
  });
};

const nextMonth = () => {
  date.setMonth(date.getMonth() + 1);
  calender();
};

const prevMonth = () => {
  date.setMonth(date.getMonth() - 1);
  calender();
};

const highlight = (elementId) => {
  let isActiveExist = document.getElementsByClassName('active');
  if(isActiveExist.length) {
    document.querySelector(".active").classList.remove("active");
  }
  document.getElementById(elementId).classList.add("active");
};