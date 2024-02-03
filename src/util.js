// util.js

import dayjs from "dayjs";

export function getMonth(
  month = dayjs().month(),
  selectedYear = dayjs().year()
) {
  month = Math.floor(month);
  const firstDayOfTheMonth = dayjs(new Date(selectedYear, month, 1)).day();
  let currentMonthCount = 0 - firstDayOfTheMonth;
  const daysMatrix = new Array(5).fill([]).map(() => {
    return new Array(7).fill(null).map(() => {
      currentMonthCount++;
      return dayjs(new Date(selectedYear, month, currentMonthCount));
    });
  });
  return daysMatrix;
}
