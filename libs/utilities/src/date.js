import { format } from "date-fns";
export const formatToMiddleEndian = (date) => format(date, "MM/dd/yyyy");
export const formatToRangeString = (dates) => {
    const fromDate = formatToMiddleEndian(dates[0]);
    const toDate = formatToMiddleEndian(dates[1]);
    return `${fromDate} - ${toDate}`;
};
