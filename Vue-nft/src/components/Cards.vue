<template>
  <div class="">
    <section class="flex items-center justify-center flex-row flex-wrap">
      <div
        class="w-[400px] h-[567px] bg-white/10 transition duration-300 hover:scale-95 hover:bg-white/20 mx-2 rounded-xl px-3 my-4"
      >
        <div class="w-full flex flex-row-reverse items-center justify-around">
          <div class="w-1/3 text-right p-4 text-white">
            <p class="text-xs text-white/50">remaining time</p>
            <h4 class="text-2xl">{{ prod.Timer }}</h4>
          </div>
          <div class="w-2/3 flex flex-row">
            <img class="mr-2" :src="prod.profileSrc" alt="" />
            <div class="text-white">
              <p>owned by</p>
              <h4 class="inline text-xs text-white/50">
                @{{ prod.userName }}
                <img
                  class="inline"
                  src="../../public/Profile-Pics/BlueTIck.svg"
                  alt=""
                />
              </h4>
            </div>
          </div>
        </div>
        <img alt="" :src="prod.tokenPic" />
        <h4 class="text-2xl p-4 uppercase font-semibold text-white">
          {{ prod.tokenName }}
        </h4>
        <hr />
        <div class="text-white w-full flex items-center justify-center py-6">
          <div
            class="w-2/3 flex flex-row-reverse items-center justify-around ml-2"
          >
            <div class="w-full h-full flex float-left flex-col ml-2">
              <h6 class="text-sm text-white/60">Highest Bid</h6>
              <h5 class="text-2xl">{{ prod.Price }} ETH</h5>
            </div>
            <img src="../../public/triangle-vector.svg" class="inline" alt="" />
          </div>
          <auction />
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import auction from '../../src/components/Buttons/Auction.vue'

export default {
  components: { auction },
  props: {
    prod: Object,
  },
}
</script>

<style></style>
