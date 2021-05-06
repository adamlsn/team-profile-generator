const Intern = require("../lib/intern");
const sample = new Intern("Lorem Ipsum", "555", "username@domain.com", "UW Extended Campus");

test("Valid Intern Name", () => {
    expect(sample.name).not.toBe("");
    expect(sample.name).toEqual("Lorem Ipsum");
    expect(sample.name).toEqual(expect.any(String));
});

test("Valid Intern ID Number", () => {
    expect(sample.id).toEqual("555");
    expect(sample.id).toEqual(expect.any(String));
});

test("Valid Intern Email", () => {
    expect(sample.email).toEqual("username@domain.com");
    expect(sample.email).toContain("@");
    expect(sample.email).toContain(".com");
    expect(sample.email).toEqual(expect.any(String));
});

test("Valid Intern School", () => {
    expect(sample.school).toEqual("UW Extended Campus");
    expect(sample.school).toEqual(expect.any(String));
});

test("Return Intern Name", () => {
    expect(sample.getName()).toBe("Lorem Ipsum");
});

test("Return Intern ID", () => {
    expect(sample.getId()).toBe("555")
});

test("Return Intern Email", () => {
    expect(sample.getEmail()).toBe("username@domain.com");
});

test("Return Intern School", () => {
    expect(sample.getSchool()).toBe("UW Extended Campus")
});

test("Return Intern Role", () => {
    expect(sample.getRole()).toBe("Intern");
})