<template>
  <div class="flex items-center justify-center flex-wrap w-full h-max">
    <produceCard :prod="prod" v-for="prod in productsInfo" :key="prod.id" />
  </div>
</template>

<script>
import { ref } from 'vue'
import produceCard from '../components/Cards.vue'
import nfts from '../assets/nft-name.json'

export default {
  components: { produceCard },
  setup() {
    const productsInfo = ref([])

    function getProducts() {
      productsInfo.value = nfts
    }

    getProducts()
    return { productsInfo }
  },
}
</script>

<style></style>
