import moment from 'moment';
// mock data
const visitData = [];
const beginDay = new Date().getTime();
const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];

for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const visitData2 = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];

for (let i = 0; i < fakeY2.length; i += 1) {
  visitData2.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY2[i],
  });
}

const salesData = [];

for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}

const searchData = [];

for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: i + 1,
    keyword: `搜索关键词-${i}`,
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2),
  });
}

const salesTypeData = [
  {
    x: '家用电器',
    y: 4544,
  },
  {
    x: '食用酒水',
    y: 3321,
  },
  {
    x: '个护健康',
    y: 3113,
  },
  {
    x: '服饰箱包',
    y: 2341,
  },
  {
    x: '母婴产品',
    y: 1231,
  },
  {
    x: '其他',
    y: 1231,
  },
];
const salesTypeDataOnline = [
  {
    x: '家用电器',
    y: 244,
  },
  {
    x: '食用酒水',
    y: 321,
  },
  {
    x: '个护健康',
    y: 311,
  },
  {
    x: '服饰箱包',
    y: 41,
  },
  {
    x: '母婴产品',
    y: 121,
  },
  {
    x: '其他',
    y: 111,
  },
];
const salesTypeDataOffline = [
  {
    x: '家用电器',
    y: 99,
  },
  {
    x: '食用酒水',
    y: 188,
  },
  {
    x: '个护健康',
    y: 344,
  },
  {
    x: '服饰箱包',
    y: 255,
  },
  {
    x: '其他',
    y: 65,
  },
];
const offlineData = [];

for (let i = 0; i < 10; i += 1) {
  offlineData.push({
    name: `Stores ${i}`,
    cvr: Math.ceil(Math.random() * 9) / 10,
  });
}

const offlineChartData = [];

for (let i = 0; i < 20; i += 1) {
  offlineChartData.push({
    x: new Date().getTime() + 1000 * 60 * 30 * i,
    y1: Math.floor(Math.random() * 100) + 10,
    y2: Math.floor(Math.random() * 100) + 10,
  });
}

const radarOriginData = [
  {
    name: '个人',
    ref: 10,
    koubei: 8,
    output: 4,
    contribute: 5,
    hot: 7,
  },
  {
    name: '团队',
    ref: 3,
    koubei: 9,
    output: 6,
    contribute: 3,
    hot: 1,
  },
  {
    name: '部门',
    ref: 4,
    koubei: 1,
    output: 6,
    contribute: 5,
    hot: 7,
  },
];
const radarData = [];
const radarTitleMap = {
  ref: '引用',
  koubei: '口碑',
  output: '产量',
  contribute: '贡献',
  hot: '热度',
};
radarOriginData.forEach((item) => {
  Object.keys(item).forEach((key) => {
    if (key !== 'name') {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key],
        value: item[key],
      });
    }
  });
});
const getFakeChartData = {
  visitData,
  visitData2,
  salesData,
  searchData,
  offlineData,
  offlineChartData,
  salesTypeData,
  salesTypeDataOnline,
  salesTypeDataOffline,
  radarData,
};
// FIXME: 可以学习一下
export default {
  'GET  /api/fake_chart_data': getFakeChartData,
};
const data1 = [
  {
    year: 0,
    value: 2.7,
  },
  {
    year: 1,
    value: 0.1,
  },
  {
    year: 2,
    value: 0.09,
  },
  {
    year: 3,
    value: 0.01,
  },
  {
    year: 4,
    value: 0,
  },
  {
    year: 5,
    value: 0,
  },
  {
    year: 6,
    value: 0,
  },
  {
    year: 7,
    value: 0,
  },
  {
    year: 8,
    value: 0.1,
  },
  {
    year: 9,
    value: 0,
  },
  {
    year: 10,
    value: 0,
  },
  {
    year: 11,
    value: 0,
  },
  {
    year: 12,
    value: 0.1,
  },
  {
    year: 13,
    value: 0,
  },
  {
    year: 14,
    value: 0,
  },
  {
    year: 15,
    value: 0,
  },
  {
    year: 16,
    value: 0.1,
  },
];
const data2 = [
  {
    year: 0,
    value: 0.9,
  },
  {
    year: 1,
    value: 0.3,
  },
  {
    year: 2,
    value: 0.31,
  },
  {
    year: 3,
    value: 0.4,
  },
  {
    year: 4,
    value: 0.16,
  },
  {
    year: 5,
    value: 0.2,
  },
  {
    year: 6,
    value: 0.1,
  },
  {
    year: 7,
    value: 0.14,
  },
  {
    year: 8,
    value: 0.16,
  },
  {
    year: 9,
    value: 0.19,
  },
  {
    year: 10,
    value: 0.18,
  },
  {
    year: 11,
    value: 0.3,
  },
  {
    year: 12,
    value: 0.2,
  },
  {
    year: 13,
    value: 0.18,
  },
  {
    year: 14,
    value: 0.16,
  },
  {
    year: 15,
    value: 0.14,
  },
  {
    year: 16,
    value: 0.1,
  },
  {
    year: 17,
    value: 0.08,
  },
  {
    year: 18,
    value: 0.04,
  },
  {
    year: 19,
    value: 0.1,
  },
];
const data3 = [
  {
    year: 0,
    value: 0.59,
  },
  {
    year: 1,
    value: 0.3,
  },
  {
    year: 2,
    value: 0.11,
  },
  {
    year: 3,
    value: 0.13,
  },
  {
    year: 4,
    value: 0.22,
  },
  {
    year: 5,
    value: 0.25,
  },
  {
    year: 6,
    value: 0.18,
  },
  {
    year: 7,
    value: 0.2,
  },
  {
    year: 8,
    value: 0.27,
  },
  {
    year: 8,
    value: 0.26,
  },
  {
    year: 9,
    value: 0.15,
  },
  {
    year: 10,
    value: 0.16,
  },
  {
    year: 11,
    value: 0.14,
  },
  {
    year: 12,
    value: 0.26,
  },
  {
    year: 13,
    value: 0.14,
  },
  {
    year: 14,
    value: 0.09,
  },
  {
    year: 15,
    value: 0.1,
  },
  {
    year: 16,
    value: 0.12,
  },
  {
    year: 17,
    value: 0.13,
  },
  {
    year: 18,
    value: 0.1,
  },
  {
    year: 19,
    value: 0.12,
  },
  {
    year: 20,
    value: 0.08,
  },
];
const data4 = [
  {
    year: 0,
    value: 1.9,
  },
  {
    year: 1,
    value: 0.4,
  },
  {
    year: 2,
    value: 0.6,
  },
  {
    year: 3,
    value: 0.4,
  },
  {
    year: 4,
    value: 0.5,
  },
  {
    year: 5,
    value: 0.54,
  },
  {
    year: 6,
    value: 0.7,
  },
  {
    year: 7,
    value: 0.52,
  },
  {
    year: 8,
    value: 0.4,
  },
  {
    year: 9,
    value: 0.2,
  },
  {
    year: 10,
    value: 0.18,
  },
  {
    year: 11,
    value: 0.3,
  },
  {
    year: 12,
    value: 0.21,
  },
  {
    year: 13,
    value: 0.22,
  },
  {
    year: 14,
    value: 0.19,
  },
  {
    year: 15,
    value: 0.15,
  },
  {
    year: 16,
    value: 0.1,
  },
  {
    year: 17,
    value: 0.08,
  },
  {
    year: 18,
    value: 0.05,
  },
  {
    year: 19,
    value: 0.04,
  },
];
const data5 = [
  {
    year: 0,
    value: 2.9,
  },
  {
    year: 1,
    value: 1.3,
  },
  {
    year: 2,
    value: 0.4,
  },
  {
    year: 3,
    value: 0.9,
  },
  {
    year: 4,
    value: 0.78,
  },
  {
    year: 5,
    value: 0.7,
  },
  {
    year: 6,
    value: 0.72,
  },
  {
    year: 7,
    value: 0.71,
  },
  {
    year: 8,
    value: 0.45,
  },
  {
    year: 9,
    value: 0.9,
  },
  {
    year: 10,
    value: 0.18,
  },
  {
    year: 11,
    value: 0.3,
  },
  {
    year: 12,
    value: 0.39,
  },
  {
    year: 13,
    value: 0.28,
  },
  {
    year: 14,
    value: 0.22,
  },
  {
    year: 15,
    value: 0.14,
  },
  {
    year: 16,
    value: 0.25,
  },
  {
    year: 17,
    value: 0.18,
  },
  {
    year: 18,
    value: 0.1,
  },
  {
    year: 19,
    value: 0.08,
  },
];

export { data1, data2,data3, data4, data5 };
