import dayjs from 'dayjs';
import ja from 'dayjs/locale/ja';

dayjs.locale(ja);

const today = dayjs();

console.log(today.format('YYYY-MM-DD HH:mm:ss'));
