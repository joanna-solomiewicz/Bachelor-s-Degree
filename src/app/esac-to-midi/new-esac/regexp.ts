const digits: string = '[0-7]';
const newLine: string = '(\n\ \ \ \ )'; //do poprawy
const plus: string = '(\\+\\d)';
const minus: string = '(\\-\\d)';
const caret: string = '(\\d\\^)';
const hash: string = '(\\d\\#)';
const b: string = '(\\db)';
const doubleSpace: string = '(\\d\ {2}\\d)';
const quadrupleSpace: string = '(\\d\ {4}\\d)';
const underscore: string = '(\\d_*)';
const dot: string = '(\\d_*\\.*[^_])';
const parenthesis: string = '(\\(\\d+\\))'; //do poprawy

export const pattern: string = '(?:' 
                        + digits + '|' + newLine + '|' + plus + '|' + minus + '|' 
                        + caret + '|' + hash + '|' + b + '|' + doubleSpace + '|' 
                        + quadrupleSpace + '|' + underscore + '|' + dot + '|' + parenthesis 
                        + ')+\ \/\/';