<template>
  <div class="w-full h-max">
    <div class="w-full h-max flex items-center justify-around mx-auto my-4">
      <div class="w-1/3">
        <img alt="" class="w-16 ml-12" :src="logo" />
      </div>
      <ul class="w-1/3">
        <a
          class="mx-4 my-10 text-white"
          :href="item.link"
          v-for="(item, index) in list"
          :key="index"
        >
          {{ item.name }}
        </a>
      </ul>
      <div class="w-1/3 flex items-center justify-end mr-12">
        <button class="w-[157px] h-[60px] bg-white rounded-full">
          Login
        </button>
      </div>
    </div>
    <div
      class="container w-full h-max mt-14 flex flex-row items-start justify-around"
    >
      <div
        class="w-1/2 mx-auto text-white text-justify uppercase ml-24 font-semibold"
      >
        <h1 class="text-7xl leading-normal">
          collect
          <br />
          digital nfts
        </h1>
        <p class="text-xl leading-normal">
          Discover NFTs by category track the latest drops and follow the
          collections you love Enjoy it
        </p>
        <button class="mt-24">
          Explore Now
        </button>
        <img
          class="opacity-50 inline transition-all duration-300 w-1/5"
          :src="buttonImage"
          alt=""
        />
      </div>
      <div class="w-1/2 flex justify-center relative">
        <img
          :src="HeaderImage"
          alt=""
          class="border-8 border-white rounded-full"
        />
        <div
          class="w-44 h-44 bg-white absolute rounded-full left-1/2 -bottom-12 -translate-x-1/2"
        >
          <span
            class="w-16 h-16 bg-red-500 z-50 absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full"
          ></span>
        </div>
      </div>
    </div>
    <div class="backgroundImage w-full h-screen relative top-28 z-0">
      <img class="mx-auto" src="../../public/main-shape-2.png" alt="" />
    </div>
    <div class="mainImage w-full h-screen relative -top-96"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      HeaderImage: '../../public/1-header.png',
      logo: '../../public/Logo.png',
      buttonImage: '../../public/ExploreBtn.svg',
      list: [
        {
          name: 'Home',
          link: 'google.com',
        },
        {
          name: 'About',
          link: 'google.com',
        },
        {
          name: 'Artwork',
          link: 'google.com',
        },
        {
          name: 'Collection',
          link: 'google.com',
        },
        {
          name: 'Artist',
          link: 'google.com',
        },
      ],
    }
  },
}
</script>

<style scope>
.backgroundImage {
  background-image: url(../../public/main-shape.svg);
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
