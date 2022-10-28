<template>
  <grid-layout
    :layout.sync="layout"
    :col-num="4"
    :row-height="120"
    :is-draggable="draggable"
    :is-resizable="resizable"
  >
    <grid-item
      v-for="item in layout"
      :key="item.i"
      :static="item.static"
      :x="item.x"
      :y="item.y"
      :w="item.w"
      :h="item.h"
      :i="item.i"
    >
      <p class="description">{{ item.description }}</p>
      <h3>
        {{ item.total | number('0,0') }}
      </h3>
      <p class="success">
        <span class="point" :class="{ down: item.status === 'down' }">
          <font-awesome-icon
            icon="fa-solid fa-arrow-up"
            v-if="item.status === 'up'"
          />
          <font-awesome-icon
            v-if="item.status === 'down'"
            icon="fa-solid fa-arrow-down"
          />
          {{ (item.success * 0.01) | percent(2) }}
        </span>
        <span class="since">Since last month</span>
      </p>
    </grid-item>
  </grid-layout>
</template>

<script>
import { GridLayout, GridItem } from 'vue-grid-layout';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
library.add(faArrowUp, faArrowDown);

export default {
  name: 'DashInfo',
  data() {
    return {
      // layout
      layout: [
        {
          x: 0,
          y: 0,
          w: 1,
          h: 1,
          i: '0',
          static: false,
          description: 'TOTAL TRAFFIC',
          total: '350897',
          success: '3.48',
          status: 'up',
        },
        {
          x: 1,
          y: 0,
          w: 1,
          h: 1,
          i: '1',
          static: false,
          description: 'TOTAL TRAFFIC',
          total: '2356',
          success: '3.48',
          status: 'up',
        },
        {
          x: 2,
          y: 0,
          w: 1,
          h: 1,
          i: '2',
          static: false,
          description: 'SALES',
          total: '924',
          success: '3.48',
          status: 'down',
        },
        {
          x: 3,
          y: 0,
          w: 1,
          h: 1,
          i: '3',
          static: false,
          description: 'PERFORMANCE',
          total: '4965',
          success: '3.48',
          status: 'up',
        },
      ],
      draggable: true,
      resizable: false,
      index: 0,
    };
  },
  components: {
    GridLayout,
    GridItem,
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.vue-grid-layout {
  margin: 0 -10px;
  ::v-deep {
    .vue-grid-item {
      position: relative;
      display: flex;
      flex-direction: column;
      min-width: 0;
      word-wrap: break-word;
      background-color: #fff;
      background-clip: border-box;
      box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.05);
      border-radius: 0.375rem;
      padding: 1rem 1.5rem;
      &.vue-grid-placeholder {
        background: #aaa;
      }

      .description {
        color: #8898aa;
        font-size: 0.75rem;
      }
      .success {
        display: flex;
        justify-content: space-between;
        font-size: 0.75rem;
        .point {
          color: #2dce89;
          &.down {
            color: #f5365c;
          }
        }
        .since {
          color: #8898aa;
        }
      }
    }
  }
}
</style>
