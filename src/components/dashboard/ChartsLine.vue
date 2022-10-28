<template>
  <div class="charts-line">
    <div id="chartLine" />
  </div>
</template>

<script>
import * as echarts from 'echarts';

export default {
  name: 'ChartsLine',
  components: {},
  data() {
    return {
      data: [7000, 12000, 9000, 11000, 8000, 3000, 1000],
    };
  },
  mounted() {
    const chartDom = document.getElementById('chartLine');

    let myChart = echarts.init(chartDom);

    if (myChart != null && myChart != '' && myChart != undefined) {
      myChart.dispose(); //차트돔이 먼저 생성된 경우 기존 돔을 삭제해준다
    }

    myChart = echarts.init(chartDom);

    let option;
    option = {
      darkMode: 'auto',
      title: {
        show: true,
        text: '일주일 걸음 수 Line',
        textStyle: {
          fontSize: 12,
          color: '#172b4d',
        },
        top: 15,
        x: 'center',
      },
      tooltip: {
        show: true,
        trigger: 'axis',
        valueFormatter: (value) =>
          value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + ' 걸음',
      },
      xAxis: {
        type: 'category',
        data: ['월', '화', '수', '목', '금', '토', '일'],
      },
      yAxis: {
        type: 'value',
      },
      backgroundColor: '#fff',
      series: [
        {
          data: this.data,
          type: 'line',
          smooth: true,
          lineStyle: {
            width: 3,
            shadowColor: 'rgba(0, 0, 0, 0.5)',
            shadowBlur: 10,
            color: '#172b4d',
          },
          symbolSize: 10,
        },
      ],
    };

    option && myChart.setOption(option);

    //윈도우 사이즈가 변경될때마다 resize되도록 설정해준다
    window.onresize = function() {
      myChart.resize();
    };
  },
};
</script>

<style lang="scss" scoped>
.charts-line {
  flex: 1.5;
  #chartLine {
    width: 100%;
    height: 500px;
    ::v-deep canvas {
      border-radius: 12px;
    }
  }
}
</style>
