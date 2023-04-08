<template>
  <!-- Logo header  -->
  <div class="w-full h-max flex items-center justify-center flex-row">
    <div class="w-1/3 h-24 uppercase flex items-center justify-start ml-24">
      <img src="../../../public/Logo.png" alt="" />
    </div>
    <!-- navigation Bar Links -->
    <div class="w-1/3 h-24">
      <ul
        class="flex items-center justify-center h-full capitalize text-white text-lg"
      >
        <li class="mx-4"><router-link>home</router-link></li>
        <li class="mx-4"><router-link>about</router-link></li>
        <li class="mx-4"><router-link>artwork</router-link></li>
        <li class="mx-4"><router-link>collection</router-link></li>
        <li class="mx-4"><router-link>artist</router-link></li>
      </ul>
    </div>
    <!-- loGin Button -->
    <div class="w-1/3 h-24 uppercase flex items-center justify-center">
      <button
        class="px-8 py-2 hover:px-16 hover:py-5 transition-all bg-white rounded-full"
      >
        Login
      </button>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
