import healthStatus from "./app.js";
/* test.each([
  [90, "healthy"],
  [40, "wounded"],
  [10, "critical"]
])(
  ('Check health status'),
(health, expected) => {
  const result = healthStatus(health);
  expect(result).toBe(expected);
}); */

test('Check health status', () => {
  const result = healthStatus({name: 'Маг', health: 90});
  expect(result).toBe("healthy");
});
test('Check health status', () => {
  const result = healthStatus({name: 'Маг', health: 40});
  expect(result).toBe("wounded");
});
test('Check health status', () => {
  const result = healthStatus({name: 'Маг', health: 10});
  expect(result).toBe("critical");
});
