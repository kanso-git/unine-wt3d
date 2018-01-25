import moment from 'moment';
import selectWt3ds from '../../selectors/wt3ds';
import wt3ds from '../fixtures/wt3ds';

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectWt3ds(wt3ds, filters);
  expect(result).toEqual([wt3ds[2], wt3ds[1]]);
});

test('should filter by startDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: moment(0),
    endDate: undefined
  };
  const result = selectWt3ds(wt3ds, filters);
  expect(result).toEqual([wt3ds[2], wt3ds[0]]);
});

test('should filter by endDate', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: moment(0).add(2, 'days')
  };
  const result = selectWt3ds(wt3ds, filters);
  expect(result).toEqual([wt3ds[0], wt3ds[1]]);
});

test('should sort by date', () => {
  const filters = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectWt3ds(wt3ds, filters);
  expect(result).toEqual([wt3ds[2], wt3ds[0], wt3ds[1]]);
});

test('should sort by amount', () => {
  const filters = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectWt3ds(wt3ds, filters);
  expect(result).toEqual([wt3ds[1], wt3ds[2], wt3ds[0]]);
});
