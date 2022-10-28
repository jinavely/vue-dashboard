<template>
  <nav>
    <ul class="navs" ref="navRef">
      <li
        v-for="(nav, index) in navs"
        :key="nav.id"
        :class="{ active: navIndex === index }"
        @click="navActive(index)"
        ref="liRef"
      >
        <router-link :to="nav.link">
          <font-awesome-icon :icon="nav.icon" />
          {{ nav.text }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { library } from '@fortawesome/fontawesome-svg-core';
import { faGlobe, faClipboard, faPoo } from '@fortawesome/free-solid-svg-icons';
library.add(faGlobe, faClipboard, faPoo);

export default {
  name: 'AppHeader',
  components: {},
  data() {
    return {
      // Nav
      navIndex: 0,
      navs: [
        {
          id: '1',
          link: '/',
          text: 'DashBoard',
          icon: 'fa-poo',
        },
        {
          id: '2',
          link: '/map',
          text: 'Map',
          icon: 'fa-globe',
        },
        {
          id: '3',
          link: '/board',
          text: 'Board',
          icon: 'fa-clipboard',
        },
      ],
    };
  },
  mounted() {
    // this.$refs.liRef[0].classList.remove('active');
    // console.dir(this.$refs.liRef[1].classList.add('active'));
  },
  methods: {
    // Nav Tabs
    navActive(index) {
      this.navIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
nav {
  .navs {
    display: flex;
    align-content: center;
    justify-content: center;
    padding: 20px 0;
    li {
      a {
        display: inline-block;
        text-decoration: none;
        padding: 20px 30px;
        color: #fff;
        background: #59b58e;
      }
      &.active a {
        background: #2e7666;
      }
      &:first-child a {
        border-radius: 12px 0 0 12px;
      }
      &:last-child a {
        border-radius: 0 12px 12px 0;
      }
    }
  }
}
</style>
