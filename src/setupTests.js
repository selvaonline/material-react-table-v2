// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom';




const errorString = 'Record already mapped to a Classification - 330B Accounts |122|1649|University of Dallas Texas';

const extractedData =
  errorString.match(/Record already mapped to a Classification - (.+?)(\s*\|[^|]+)+\|(.+?)$/)?.[1] + ' - ' +
  errorString.match(/Record already mapped to a Classification - (.+?)(\s*\|[^|]+)+\|(.+?)$/)?.[3];

console.log(extractedData
