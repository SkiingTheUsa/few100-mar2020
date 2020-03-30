import { Employee, VacationRequest } from '../src/hr';

describe('using classes', () => {
    describe('creating instances', () => {
        it('using constructors', () => {
            const bob = new Employee(45_000, `Robert`, `Jones`);

            expect(bob.getSalary()).toBe(45_000);
            expect(bob.firstName).toBe(`Robert`);
            expect(bob.lastName).toBe(`Jones`);
            expect(bob.fullName).toBe(`Jones, Robert`);

        });
    });
});
