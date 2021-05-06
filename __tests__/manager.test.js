const Manager = require("../lib/manager");
const sample = new Manager("Lorem Ipsum", "555", "username@domain.com", "321");

test("Valid Manager Name", () => {
    expect(sample.name).toEqual("Lorem Ipsum");
    expect(sample.name).not.toBe("");
    expect(sample.name).toEqual(expect.any(String));
});

test("Valid Manager ID", () => {
    expect(sample.id).toEqual("555");
    expect(sample.id).toEqual(expect.any(String));
});

test("Valid Manager Email", () => {
    expect(sample.email).toEqual("username@domain.com");
    expect(sample.email).toContain("@");
    expect(sample.email).toContain(".com");
    expect(sample.email).toEqual(expect.any(String));
});

test("Valid Manager Office Number", () => {
    expect(sample.officeNumber).toEqual("321");
    expect(sample.officeNumber).toEqual(expect.any(String));
});

test("Return Manager Name", () => {
    expect(sample.getName()).toBe("Lorem Ipsum");
});

test("Return Manager ID", () => {
    expect(sample.getId()).toBe("555")
});

test("Return Manager Email", () => {
    expect(sample.getEmail()).toBe("username@domain.com");
});

test("Return Manager Office Number", () => {
    expect(sample.getOfficeNumber()).toBe("321");
});

test("Return Manager Role", () => {
    expect(sample.getRole()).toBe("Manager");
});