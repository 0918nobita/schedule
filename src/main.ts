import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore.js';

dayjs.extend(isSameOrBefore);
dayjs.locale(ja);

const startDay = dayjs('2024-10-01');
const endDay = dayjs('2025-01-20');

for (
    let currentDay = startDay;
    currentDay.isSameOrBefore(endDay);
    currentDay = currentDay.add(1, 'day')
) {
    console.log(currentDay.format('YYYY-MM-DD'));
}
