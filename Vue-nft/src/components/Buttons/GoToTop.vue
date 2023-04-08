<template>
  <button
    @click="scrollToTop"
    class="w-12 h-12 bg-white fixed bottom-8 right-8 p-4 rounded-full z-50"
  >
    <i>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="{1.5}"
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
        />
      </svg>
    </i>
  </button>
</template>

<script>
export default {
  setup() {
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      })
    }
    return { scrollToTop }
  },
}
</script>

<style></style>
