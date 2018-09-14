/* global expect*/

import {
  FETCH_RECORD_REQUEST,
  fetchRecordRequest,
  FETCH_RECORD_SUCCESS,
  fetchRecordSuccess,
  FETCH_RECORD_ERROR,
  fetchRecordError
} from '../../actions/records';

describe('fetchRecordRequest', () => {
  it('Should return the action', () => {
    const action = fetchRecordRequest();
    expect(action.type).toEqual(FETCH_RECORD_REQUEST);
  });
});
describe('fetchRecordSuccess', () => {
  it('Should return the action', () => {
    const data = {test: 'test'};
    const action = fetchRecordSuccess(data);
    expect(action.type).toEqual(FETCH_RECORD_SUCCESS);
    expect(action.data).toEqual(data);
  });
});
describe('fetchRecordError', () => {
  it('Should return the action', () => {
    const error = 'test';
    const action = fetchRecordError(error);
    expect(action.type).toEqual(FETCH_RECORD_ERROR);
    expect(action.error).toEqual(error);

  });
});