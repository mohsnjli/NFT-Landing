<template>
  <div class="w-full h-max">
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
    <div class="backgroundImage w-full h-screen relative">
      <img class="mx-auto" src="../../public/main-shape-2.png" alt="" />
      <img
        class="absolute top-1/4 border-8 border-white rounded-full translate-x-44"
        src="../../public/2-header.png"
        alt=""
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      HeaderImage: '../../public/1-header.png', //header Svg image
      logo: '../../public/Logo.png', //Header logo image
      buttonImage: '../../public/ExploreBtn.svg', //explore Btn
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
