<template>
  <div class="dashboard">
    <DashInfo /><!-- DashInfo -->
    <section class="charts">
      <ChartsLine /><!-- ChartsLine -->
      <Charts3d /><!-- Charts3d -->
    </section>
  </div>
</template>

<script>
import DashInfo from '../components/dashboard/DashInfo.vue';
import ChartsLine from '../components/dashboard/ChartsLine.vue';
import Charts3d from '../components/dashboard/Charts3d.vue';

export default {
  name: 'Main',
  data() {
    return {};
  },
  components: {
    DashInfo,
    ChartsLine,
    Charts3d,
  },
};
</script>

<style lang="scss" scoped>
.charts {
  display: flex;
  gap: 20px;
  margin-top: 20px;
}
</style>
