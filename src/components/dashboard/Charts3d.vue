<template>
  <div class="charts-3d">
    <div id="chart3d" />
  </div>
</template>

<script>
import * as echarts from 'echarts';
import 'echarts-gl';

export default {
  name: 'Charts3d',
  data() {
    return {
      data: [
        [0, 0, 12000],
        [1, 1, 10000],
        [2, 2, 9000],
        [3, 3, 11000],
        [4, 4, 8000],
        [5, 5, 3000],
        [6, 6, 1000],
      ],
    };
  },
  mounted() {
    const chartDom = document.getElementById('chart3d');

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
        text: '일주일 걸음 수 3D',
        textStyle: {
          fontSize: 12,
          color: '#172b4d',
        },
        top: 15,
        x: 'center',
      },
      tooltip: {
        show: true,
        formatter: function(params) {
          let week = '';
          switch (params.value[1]) {
            case 0:
              week = '월요일';
              break;
            case 1:
              week = '화요일';
              break;
            case 2:
              week = '수요일';
              break;
            case 3:
              week = '목요일';
              break;
            case 4:
              week = '금요일';
              break;
            case 5:
              week = '토요일';
              break;
            case 6:
              week = '일요일';
              break;
          }

          return `요일: ${week}, 걸음 수: ${params.value[2]
            .toString()
            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}`;
        },
      },
      visualMap: {
        max: 20,
      },
      xAxis3D: {
        type: 'category',
        nameTextStyle: {
          fontSize: 0,
        },
        data: ['', '1', '2', '3', '4', '5', '6'],
      },
      yAxis3D: {
        type: 'category',
        nameTextStyle: {
          fontSize: 0,
        },
        data: ['월', '화', '수', '목', '금', '토', '일'],
      },
      zAxis3D: {
        type: 'value',
        nameTextStyle: {
          fontSize: 0,
        },
      },
      grid3D: {
        boxWidth: 100,
        boxDepth: 60,
        viewControl: {
          // projection: 'orthographic'
        },
        light: {
          main: {
            intensity: 1,
            shadow: true,
          },
          ambient: {
            intensity: 0.2,
          },
        },
      },
      backgroundColor: '#fff',
      series: [
        {
          type: 'bar3D',
          data: this.data.map(function(item) {
            return {
              value: [item[1], item[0], item[2]],
            };
          }),
          shading: 'lambert',
          label: {
            fontSize: 16,
            borderWidth: 1,
          },
          bevelSmoothness: 2,
          emphasis: {
            label: {
              show: false,
            },
          },
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
.charts-3d {
  flex: 1;
  #chart3d {
    width: 100%;
    height: 500px;
    ::v-deep canvas {
      border-radius: 12px;
    }
  }
}
</style>
