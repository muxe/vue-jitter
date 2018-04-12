# vue-jitter

jittering vue component experiments with p5.js

## usage
`npm install vue-jitter`

```
<template>
  <div id="app">
    <jitterbox v-for="a in 3" :maxRects="6" :noiseScale="15">
      <span>Moep {{a}}</span>
      <div>
        What is happening <a href="#">here?</a>
      </div>
    </jitterbox>
  </div>
</template>

<script>
import { Jitterbox } from 'vue-jitter'
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
    Jitterbox
  }
}
</script>

<style>

</style>
```
