<template>
  <div class="bg-black w-full h-max">
    <div class="mx-auto">
      <h1 class="text-5xl text-center text-white pt-12">
        explore
        <span class="text-5xl text-orange-first">
          Collection
        </span>
      </h1>
    </div>
    <div class="w-full h-max">
      <ul
        class="w-9/12 h-24 mt-10 mx-auto flex flex-row items-center justify-center"
      >
        <a
          :href="items.link"
          @click="preventDefault()"
          class="text-white hover:bg-white/40 cursor-pointer bg-white/10 mx-2 rounded-full text-xl px-8 py-4"
          v-for="(items, index) in exploreItems"
          :key="index"
          ref="title"
        >
          <li>{{ items.name }}</li>
        </a>
      </ul>
    </div>
    <div
      class="flex items-center justify-center space-y-10 hover:bg-white/10> flex-row flex-wrap"
    >
      <explore />
      <explore />
      <explore />
      <explore />
      <explore />
      <explore />
    </div>
  </div>
</template>

<script>
import explore from './Explore.vue'
import features from './Features.vue'

export default {
  components: { explore, features },

  data() {
    return {
      exploreItems: [
        {
          name: 'Trending',
          link: '',
          active: true,
        },
        {
          name: 'Animal',
          link: '',
          active: false,
        },
        {
          name: 'Heros',
          link: '',
          active: false,
        },
        {
          name: 'Man',
          link: '',
          active: false,
        },
        {
          name: 'Woman',
          link: '',
          active: false,
        },
        {
          name: 'Fancy',
          link: '',
          active: false,
        },
        {
          name: 'Monster',
          link: '',
          active: false,
        },
      ],
    }
  },
}
</script>

<style></style>
