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
    data: [0.001, 0.001, 0.001, 0.001, 0.001, 0.001, 0.001, 0.0, 0.001, 0.001],
  },
  'AS-CNN': {
    data: [0.001, 0.001, 0.001, 0.001, 0.001, 0.001, 0.001, 0.0, 0.001, 0.001],
  },
  'CS-CNN': {
    data: [0.002, 0, 0, 0, 0, 0, 0.004, 0.004, 0, 0],
  },
  'SS-CNN': {
    data: [0.003, 0.001, 0, 0, 0, 0, 0, 0.002, 0, 0],
  },
  yAxisMax: 0.1,
  yAxisMin: 0,
  name: 'ER',
  splitNumber: 11,
};
export const SimpleData1 = {
  SVM: {
    data: [0.88, 0.91, 0.92, 0.93, 0.94, 0.935, 0.942, 0.945, 0.94, 0.94],
  },
  'AS-CNN': {
    data: [0.91, 0.921, 0.943, 0.949, 0.953, 0.95, 0.96, 0.965, 0.962, 0.96],
  },
  'CS-CNN': {
    data: [0.912, 0.918, 0.923, 0.929, 0.937, 0.94, 0.945, 0.955, 0.963, 0.96],
  },
  'SS-CNN': {
    data: [0.915, 0.92, 0.933, 0.948, 0.953, 0.955, 0.96, 0.97, 0.972, 0.972],
  },
  yAxisMax: 1,
  yAxisMin: 0.8,
  name: 'ACC',
  splitNumber: 10,
};
export const SimpleData2 = {
  SVM: {
    data: [0.078, 0.06, 0.055, 0.045, 0.032, 0.03, 0.028, 0.025, 0.022, 0.02],
  },
  'AS-CNN': {
    data: [0.068, 0.045, 0.036, 0.033, 0.026, 0.023, 0.017, 0.018, 0.01, 0.01],
  },
  'CS-CNN': {
    data: [0.067, 0.043, 0.037, 0.03, 0.027, 0.018, 0.016, 0.01, 0.009, 0.008],
  },
  'SS-CNN': {
    data: [0.069, 0.045, 0.035, 0.028, 0.022, 0.0183, 0.017, 0.018, 0.012, 0.01],
  },
  yAxisMax: 0.09,
  yAxisMin: 0,
  name: 'FR',
  splitNumber: 10,
};
export default Model;
