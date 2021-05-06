const { test, expect } = require("@jest/globals");
const Employee = require("../lib/employee");
const sample = new Employee("Lorem Ipsum", "555", "username@domain.com");

test("Valid Employee Name", () => {
    expect(sample.name).not.toBe("");
    expect(sample.name).toEqual("Lorem Ipsum");
    expect(sample.name).toEqual(expect.any(String));
});

test("Valid Employee ID Number", () => {
    expect(sample.id).toEqual("555");
    expect(sample.id).toEqual(expect.any(String));
});

test("Valid Email", () => {
    expect(sample.email).toEqual("username@domain.com");
    expect(sample.email).toContain("@");
    expect(sample.email).toEqual(expect.any(String));
});

test("Returns Employee Role", () => {
    expect(sample.getRole()).toBe("Employee");
})