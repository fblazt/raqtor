<template>
  <div class="h-screen flex flex-col justify-evenly">
    <AppTitle></AppTitle>
    <AppHome></AppHome>
  </div>
</template>

<script>
import AppTitle from '@/components/AppTitle'
import AppHome from '@/components/AppHome'

export default {
  name: 'Home',
  components: {
    AppTitle,
    AppHome
  }
}
</script>
