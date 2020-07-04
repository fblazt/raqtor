<template>
  <div class="w-full flex flex-col justify-center items-center text-white">
    <AppLogo></AppLogo>
    <div class="flex flex-row justify-center items-center">
      <button class="m-1 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">Random Quote</button>
      <button >
        <router-link to="/custom" class="m-1 px-4 py-2 bg-blue-500 rounded-lg hover:bg-blue-600">Custom Quote</router-link>
      </button>
    </div>
  </div>
</template>

<script>
import AppLogo from '@/components/AppLogo'
export default {
  name: 'AppHome',
  components: {
    AppLogo
  }
}
</script>

<style>

</style>