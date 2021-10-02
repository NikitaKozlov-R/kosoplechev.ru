<template>
  <a href="https://ru-ru.facebook.com/kosoplechev" target="_blanc">
    <svg class="ks-socials__icon--svg" viewBox="0 0 12 24" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3.06332 24V12.7385H0V8.68382H3.06332V5.2206C3.06332 2.49917 4.87284 0 9.04235 0C10.7305 0 11.9788 0.15732 11.9788 0.15732L11.8805 3.9437C11.8805 3.9437 10.6074 3.93166 9.21814 3.93166C7.71455 3.93166 7.47365 4.60522 7.47365 5.72316V8.68382H12L11.8031 12.7385H7.47365V24H3.06332Z"
      />
    </svg>
  </a>
</template>

<script>
export default {}
</script>

<style>
.ks-socials__icon--svg {
  cursor: pointer;
  width: calc(2rem - 4px);
  height: 3rem;
  fill: black;
}
.ks-socials__icon--svg {
  transition: 0.4s ease;
}
.ks-socials__icon--svg:hover {
  fill: var(--color-primary);
  transform: translateY(-4px);
}
</style>
