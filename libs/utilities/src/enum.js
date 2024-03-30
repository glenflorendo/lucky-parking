import _ from "lodash";
export const getNth = (enums, index) => _.chain(enums).values().nth(index).value();
export const getFirst = (enums) => getNth(enums, 0);
