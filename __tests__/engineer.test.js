const Engineer = require("../lib/engineer");
const sample = new Engineer("Lorem Ipsum", "555", "username@domain.com", "githubName");

test("Valid Engineer Name", () => {
    expect(sample.name).not.toBe("");
    expect(sample.name).toEqual("Lorem Ipsum");
    expect(sample.name).toEqual(expect.any(String));
});

test("Valid Engineer ID", () => {
    expect(sample.id).toEqual("555");
    expect(sample.id).toEqual(expect.any(String));
});

test("Valid Engineer Email", () => {
    expect(sample.email).toEqual("username@domain.com");
    expect(sample.email).toContain("@");
    expect(sample.email).toContain(".com");
    expect(sample.email).toEqual(expect.any(String));
});

test("Valid Engineer GitHub Name", () => {
    expect(sample.github).toEqual("githubName");
    expect(sample.github).toEqual(expect.any(String));
});

test("Return Engineer Name", () => {
    expect(sample.getName()).toBe("Lorem Ipsum");
});

test("Return Engineer ID", () => {
    expect(sample.getId()).toBe("555")
});

test("Return Engineer Email", () => {
    expect(sample.getEmail()).toBe("username@domain.com");
});

test("Return Engineer GitHub", () => {
    expect(sample.getGithub()).toBe("githubName");
})

test("Return Engineer Role", () => {
    expect(sample.getRole()).toBe("Engineer");
});