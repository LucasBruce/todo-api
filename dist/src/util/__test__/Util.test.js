"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Utils_1 = require("../Utils");
describe('Util Test', () => {
    it('Should concat first name and last name', () => {
        const name = (0, Utils_1.fullNameConcat)('Anderson', 'Leal');
        expect(name).toBe('Anderson Leal');
    });
});
//# sourceMappingURL=Util.test.js.map