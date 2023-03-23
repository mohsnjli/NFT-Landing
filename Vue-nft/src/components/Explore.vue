<template>
  <div class="">
    <section class="flex items-center justify-center flex-row flex-wrap">
      <div class="w-[400px] h-[567px] bg-white/10 mx-4 rounded-xl px-4 py-2">
        <div class="w-full flex flex-row-reverse items-center justify-around">
          <div class="w-1/2 text-right p-4 text-white">
            <p class="text-sm text-white/50">remaining time</p>
            <h4 class="text-3xl">{{ cardInformation.Timer }}</h4>
          </div>
          <div class="w-1/2 flex flex-row">
            <img class="mr-2" :src="cardInformation.profileSrc" alt="" />
            <div class="text-white">
              <p>owned by</p>
              <h4 class="inline">@{{ cardInformation.userName }}</h4>
              <img
                class="inline"
                src="../../public/Profile-Pics/BlueTIck.svg"
                alt=""
              />
            </div>
          </div>
        </div>
        <img :src="cardInformation.tokenPic" alt="" />
        <h4 class="text-2xl p-4 uppercase font-semibold">
          {{ cardInformation.tokenName }}
        </h4>
        <hr />
        <div class="text-white w-full flex items-center justify-center py-6">
          <div
            class="w-2/3 flex flex-row-reverse items-center justify-around ml-2"
          >
            <div class="w-full h-full flex float-left flex-col ml-2">
              <h6 class="text-sm text-white/60">Highest Bid</h6>
              <h5 class="text-2xl">{{ cardInformation.Price }}</h5>
            </div>
            <img :src="triangleSrc" class="inline" alt="" />
          </div>

          <auction />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import auction from './Buttons/Button.vue'
export default {
  components: { auction },
  data() {
    return {
      triangleSrc: '../../public/triangle-vector.svg',
      cardInformation: {
        tokenName: 'Evol Benji',
        userName: 'Jen wilson',
        Price: '8.32ETH',
        Timer: '10:10:10',
        profileSrc: '../../public/Profile-Pics/1-Profile.png',
        tokenPic: '../../public/NFT-Pics/1.png',
      },
    }
  },
}
</script>

<style></style>
