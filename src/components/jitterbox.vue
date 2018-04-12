<template>
  <div class="jitterbox" ref="jitterbox">
    <div class="content" ref="content" v-bind:style="{ padding: noiseScale + 'px' }">
      <slot></slot>
    </div>
  </div>
</template>

<script>
/*
TODO:
- rotate box?
*/
import P5 from 'p5'
export default {
  name: 'jitterbox',
  props: {
    noiseScale: {
      type: Number,
      default: 15
    },
    maxRects: {
      type: Number,
      default: 6
    },
    backgroundColor: {
      type: String,
      default: '#FFFFFF'
    }
  },
  data () {
    return {
      script: null,
      p5: null,
      canvas: null,
      a: 0,
      rects: [],
      width: 0,
      height: 0
    }
  },
  methods: {
    addRect (x, y, w, h) {
      this.rects.push({x, y, w, h})
      if (this.rects.length > this.maxRects) {
        this.rects.shift()
      }
    }
  },
  mounted () {
    this.width = this.$refs.content.offsetWidth
    this.height = this.$refs.content.offsetHeight
    this.script = sketch => {
      sketch.setup = () => {
        this.canvas = sketch.createCanvas(this.width, this.height)
        this.canvas.parent(this.$refs.jitterbox)
        sketch.frameRate(60)
      }

      sketch.draw = () => {
        sketch.background(this.backgroundColor)
        this.a += 0.5
        let x = sketch.noise(this.a) * this.noiseScale
        let y = sketch.noise(this.a) * this.noiseScale
        sketch.noFill()
        this.addRect(x, y, this.width - this.noiseScale, this.height - this.noiseScale)
        this.rects.forEach(r => {
          sketch.rect(r.x, r.y, r.w, r.h)
        })
      }
    }
    this.p5 = new P5(this.script)
    // console.log(this.p5)
  }
}
</script>

<style>
.jitterbox {

}

.jitterbox .content {
  position: absolute;
}
</style>
