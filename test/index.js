const respo = require('ktern-charts-json')
const moduleData = require('./input')


const donutChartConfigStatus = respo.convertToDonutChart(moduleData.data, { title: 'Status Distribution', colorScheme: ['#ff0000', '#00ff00', '#0000ff'], field: 'processLevel' });
console.log(donutChartConfigStatus)
const simpleBarChartConfig = respo.convertToSimpleBarChart(moduleData.data, { title: 'Custom Bar Chart', colorScheme: ['#ff0000', '#00ff00', '#0000ff'], field: 'processLevel' });
console.log(simpleBarChartConfig)
const stackedBarChartConfig = respo.convertToStackedBarChart(moduleData.data, 'status', 'processLevel', { title: 'Custom Stacked Bar Chart', colorScheme: ['#ff0000', '#00ff00', '#0000ff'] });



console.log(stackedBarChartConfig);
