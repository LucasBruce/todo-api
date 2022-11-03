"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncHandler = exports.fullNameConcat = void 0;
function fullNameConcat(fistName, lastName) {
    return `${fistName} ${lastName}`;
}
exports.fullNameConcat = fullNameConcat;
const asyncHandler = (fn) => function asyncUtilWrap(req, res, nextFn) {
    const fnReturn = fn(req, res, nextFn);
    return Promise.resolve(fnReturn).catch(nextFn);
};
exports.asyncHandler = asyncHandler;
//# sourceMappingURL=Utils.js.map