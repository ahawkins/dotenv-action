test('test runs with custom path', () => {
    const dotenv_action = require('./dotenv_action');
    expect(dotenv_action("fixtures/.env")).toEqual({ FIXTURES_1: "123" });
})

test('test runs with different path', () => {
    const dotenv_action = require('./dotenv_action');
    expect(dotenv_action("fixtures/.another.env")).toEqual({ FIXTURES_2: "xyz", "OTHER_KEY": "this" });
})

test('test runs with broken path', () => {
    const dotenv_action = require('./dotenv_action');
    expect(() => { dotenv_action("nosuchfile")}).toThrow(Error);
})
