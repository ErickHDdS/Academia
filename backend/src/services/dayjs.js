import dayjs from 'dayjs';

export const isExpired = (expires) => !dayjs().isBefore(expires);

