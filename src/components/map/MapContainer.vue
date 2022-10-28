<template>
  <naver-map :zoom="10" style="width: 100%; height: 100%;">
    <naver-map-marker />
    <naver-map-marker :options="markerOptions.imageIcon" />
    <naver-map-marker :options="markerOptions.imageIconScaledSize" />
    <naver-map-marker
      :options="markerOptions.html"
      @click="dialogVisible = !dialogVisible"
    />
    <naver-map-marker :options="markerOptions.animation" />
    <naver-map-marker :options="markerOptions.polygon" />

    <naver-map-marker-cluster @click-cluster="handlerClickCluster">
      <naver-map-marker
        v-for="n in 30"
        :key="n"
        :options="{
          position: { lat: 37.3 + n * 0.001, lng: 126.9641624 },
        }"
      />
    </naver-map-marker-cluster>
  </naver-map>
</template>

<script>
import Vue from 'vue';
import VueNaverMap from 'vue-naver-map';
Vue.use(VueNaverMap, {
  key: '35df49b4bd4deaf6184dfd4280ed4c3c',
  libraries: ['geocoder'] /* type: Array */,
});

export default {
  name: 'MapContainer',
  data() {
    return {
      dialogVisible: false,
      markerOptions: {
        imageIcon: {
          position: { lat: 37.2067362, lng: 126.9841624 },
          icon: '/favicon.ico',
        },
        imageIconScaledSize: {
          position: { lat: 37.3237362, lng: 126.9431624 },
          icon: {
            url: '/favicon.ico',
            size: { width: 20, height: 20 },
            scaledSize: { width: 20, height: 20 },
            origin: { x: 0, y: 0 },
            anchor: { x: 10, y: 20 },
          },
        },
        html: {
          position: { lat: 37.4037362, lng: 127.1031624 },
          icon: {
            content: `<div class="marker-html">HM</div>`,
            size: { width: 20, height: 20 },
            origin: { x: 0, y: 0 },
            anchor: { x: 10, y: 20 },
          },
        },
        animation: {
          position: { lat: 37.4337362, lng: 127.0731624 },
          icon: '/favicon.ico',
          animation: 'DROP',
        },
        polygon: {
          position: { lat: 37.4337362, lng: 127.2031624 },
          icon: {
            path: [
              { x: 0, y: 70 },
              { x: 20, y: 100 },
              { x: 40, y: 70 },
              { x: 30, y: 70 },
              { x: 70, y: 0 },
              { x: 10, y: 70 },
            ],
            style: 'closedPath',
            anchor: { x: 23, y: 103 },
            fillColor: '#ff0000',
            fillOpacity: 1,
            strokeColor: '#000000',
            strokeStyle: 'solid',
            strokeWeight: 3,
          },
        },
      },
    };
  },
  methods: {
    handlerClickCluster(markers) {
      console.log(markers);
    },
  },
};
</script>

<style lang="scss" scoped>
.marker-html {
  width: 30px;
  height: 30px;
  position: relative;
  background: white;
  line-height: 30px;
  text-align: center;
  font-weight: bold;
  border-radius: 15px;
  border: 1px solid black;
  transition: 0.5s;

  &:hover {
    background-color: black;
    color: white;
    border-color: red;
  }
}
</style>
