
function convertToDonutChart(data, options) {

  const fieldCounts = {};
  // counts the option.filed parameter 
  data.forEach(item => {
      const fieldValue = item[options.field];
      fieldCounts[fieldValue] = (fieldCounts[fieldValue] || 0) + 1;
  });
  const widgetData = Object.keys(fieldCounts).map(key => ({ "name": key, "value": fieldCounts[key] }));


  const donutChartData = {
      "componentType": "donut",
      "data": {
          "title": options.title || "Donut Chart",
          "colorScheme": options.colorScheme || ["#5AA464", "#A10A28", "#C7B42C", "#AAAAAA"],
          "widgetData": widgetData,

      }
  };

  return donutChartData;
}



function convertToSimpleBarChart(data, options) {


  const fieldCounts = {};

  data.forEach(item => {
      const fieldValue = item[options.field];
      fieldCounts[fieldValue] = (fieldCounts[fieldValue] || 0) + 1;
  });

  const widgetData = Object.keys(fieldCounts).map(key => fieldCounts[key]);
  const datareturn = Object.keys(fieldCounts)


  const simpleBarChartData = {
      "componentType": "simpleBar",
      "data": {
          "title": options.title || "Simple Bar Chart",
          "colorScheme": options.colorScheme || ["#5AA464", "#A10A28", "#C7B42C", "#AAAAAA"],
         
          "xAxis": {
              "type": "category",
              "data":Object.keys(fieldCounts),
              
          },
          "yAxis": {
              "type": "value",
          },
          "widgetData": widgetData,
      }
  };

  return simpleBarChartData;
}



function convertToStackedBarChart(data, field, categoryField, options) {


  const categories = [...new Set(data.map(item => item[categoryField]))];
  const seriesKeys = [...new Set(data.map(item => item[field]))]; 


  const widgetData = seriesKeys.map(seriesKey => ({
      "name": seriesKey,
      "type": "bar",
      "stack": "Ad",
      "barWidth": "35",
      "emphasis": {
          "focus": "series"
      },
      "data": categories.map(category => {
          const matchingItems = data.filter(item => item[field] === seriesKey && item[categoryField] === category);
      
          return matchingItems.length;
      }),
  }));

  
  const stackedBarChartData = {
    "componentType": "stackedBar",
    "data":{
      "title": options.title || "Stacked Bar Chart",
      "colorScheme": options.colorScheme || ["#5AA464", "#A10A28", "#C7B42C", "#AAAAAA"],
      "xAxis": 
          {
              "type": "category",
              "data": categories,
              
          }
      ,
      "yAxis": 
          {
              "type": options.yAxisType || "value",
          }
      ,
      "widgetData": widgetData,
    }
  };

  return stackedBarChartData;
}

// const stackedBarChartConfig = convertToStackedBarChart(inputModel.data, 'processLevel', 'status', { title: 'Custom Stacked Bar Chart', colorScheme: ['#ff0000', '#00ff00', '#0000ff'] });
// console.log("------------------output-----------------")
// console.log(stackedBarChartConfig)

module.exports = {
  convertToDonutChart,
  convertToSimpleBarChart,
  convertToStackedBarChart
}
