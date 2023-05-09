import { green as successColor, red as failColor } from 'console-log-colors';

export const print = message => console.log(message);
export const printClear = console.clear;
export const printFail = message => console.log(failColor(message));
export const printSuccess = message => console.log(successColor(message));
