<template>
  <footer class="w-full h-[362px] bg-black mx-auto">
    <div
      class="w-10/12 text-white h-full mx-auto flex items-center justify-evenly flex-row flex-nowrap"
    >
      <div class="w-2/5 flex items-center justify-start flex-col">
        <div class="w-1/2">
          <img src="../../public/Footer-Logo.png" class="" alt="" />
          <p class="font-fires text-white/50">
            The World’s First and largest Digital Marketplace for Crypto
            Collectibles and Non - Fungible Tokens
          </p>
          <div class="flex items-center justify-start flex-row mt-2 space-x-4">
            <a href="#">
              <img src="../../public/Social-Icons/FaceBook.png" alt="" />
            </a>
            <a href="#">
              <img src="../../public/Social-Icons/Tweeter.png" alt="" />
            </a>
            <a href="#">
              <img src="../../public/Social-Icons/instagram.png" alt="" />
            </a>
          </div>
        </div>
      </div>
      <div class="w-1/5 flex items-start flex-col justify-center">
        <h6 class="uppercase"></h6>
        <br />
        <div class="flex flex-col items-start">
          <p
            class="hover:text-white text-white/50"
            v-for="(subList, index) in Footer"
            :key="index"
          >
            {{ subList.sub }}
          </p>
        </div>
      </div>
      <div class="w-1/5">3</div>
      <div class="w-1/5">4</div>
    </div>
  </footer>
</template>

<script>
export default {
  Footer: [
    {
      sub: 'all nfts',
    },
    {
      sub: 'all nfts',
    },
    {
      sub: 'all nfts',
    },
    {
      sub: 'all nfts',
    },
  ],
}
</script>

<style></style>
