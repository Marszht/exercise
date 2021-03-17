import { queryBasicProfile } from './service';

const Model = {
  namespace: 'profileAndbasic',
  state: {
    basicGoods: [],
  },
  effects: {
    *fetchBasic(_, { call, put }) {
      const response = yield call(queryBasicProfile);
      yield put({
        type: 'show',
        payload: response,
      });
    },
  },
  reducers: {
    show(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};
export const SimpleData = {
  SVM: {
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  'AS-CNM': {
    data: [0, 0, 0, 0, 0, 0, 0, 0, 0],
  },
  'CS-CNN': {
    data: [0.02, 0, 0, 0, 0, 0, 0.04, 0, 0],
  },
  'SS-CNN': {
    data: [0.09, 0.1, 0, 0, 0, 0, 0, 0, 0],
  },
};
export default Model;
