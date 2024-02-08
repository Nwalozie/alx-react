import { getLatestNotification, getFooterCopy } from "./utils";

test('getLatestNotification returns the correct string', () =>
{
    const result = getLatestNotification();
    expect(result).toMatch(/<strong>.*<\/strong>/);
}
)

test('getFooterCopy returns the correct string when the argument is true', () => {
const result = getFooterCopy(true);
expect(result).toBe('Holberton School');
});

test('getFooterCopy returns the correct string when the argument is false', () => {
const result = getFooterCopy(false);
expect(result).toBe('Holberton School main dashboard');
});