import selectWt3dsTotal from '../../selectors/wt3ds-total';
import wt3ds from '../fixtures/wt3ds';

test('should return 0 if no wt3ds', () => {
  const res = selectWt3dsTotal([]);
  expect(res).toBe(0);
});

test('should correctly add up a single expense', () => {
  const res = selectWt3dsTotal([wt3ds[0]]);
  expect(res).toBe(195);
});

test('should correctly add up multiple wt3ds', () => {
  const res = selectWt3dsTotal(wt3ds);
  expect(res).toBe(114195);
});
