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

const daysInMonth = (year, month) => {
  return new Date(year, month, 0).getDate();
};

const currentMonth = date.getMonth() + 1;
const currentMonthName = monthNames[date.getMonth()];
const currentYear = date.getFullYear();

const calender = (currMonth, currMonthName, currYear) => {
  const monthDays = daysInMonth(currYear, currMonth);
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
  for (let i = 0; i < monthDays; i++) {
    monthDay.innerHTML += `<h6>${i + 1}</h6>`;
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
console.log(date.getDay());
calender(currentMonth, currentMonthName, currentYear);
