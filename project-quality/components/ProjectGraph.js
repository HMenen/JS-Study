import React, { useMemo, useLayoutEffect } from 'react';
import echarts from 'echarts';
import { brokenLine } from '../../options';
import { deepClone } from '@/util/util';

function ProjectGraph(props) {
  const dataSource = props.graphData;
  const exportTitle = props.exportTitle;
  const exportPath = props.exportPath;
  const processedData = {};
  const graphType = props.type;
  const domIndex = props.domIndex;
  let renderDom;

  useLayoutEffect(() => {
    renderDom = document.getElementsByClassName('echart-graph')[domIndex];
    initEchart();
  }, [props.graphData]);

  function handleGraphSourceData(data) {
    processedData.title = data.title;
    processedData.xAxis = data.qmDates;
    const seriesAndLegend = getGraphLegendAndSeries(data.detail);
    processedData.series = seriesAndLegend.xAxis;
    processedData.legend = seriesAndLegend.legend;
    return processedData;
  }

  function getGraphLegendAndSeries(dataArr) {
    const ret = {legend: [], xAxis: []};
    dataArr.forEach(item => {
      ret.legend.push(item.name);
      const xAxisObj = {};
      xAxisObj.name = item.name;
      xAxisObj.data = item.value;
      xAxisObj.type = graphType;
      ret.xAxis.push(xAxisObj);
    });
    return ret;
  }

  function initEchart() {
    const myChart = echarts.init(renderDom);
    const echartOptions = deepClone(brokenLine);
    const myOptionData = handleGraphSourceData(dataSource);
    echartOptions.title.text = myOptionData.title;
    echartOptions.legend.data = myOptionData.legend;
    echartOptions.xAxis.data = myOptionData.xAxis;
    echartOptions.series = myOptionData.series;
    echartOptions.exportTitle = exportTitle;
    echartOptions.exportPath = exportPath;
    myChart.setOption(echartOptions);
  }

  return(
    <div className='echart-graph'>
    </div>
  );
}

export default ProjectGraph;