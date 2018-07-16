<style lang="less" scoped>
    button{
      background-color: #fff;
    }
</style>

<template>
  <div>
    <span id="count">{{count}}</span>
    <button @click="increase">hellow</button>
  </div>
</template>
<script>
export default {
  name: 'count',
  data () {
    return {
      count: 1
    }
  },
  methods: {
    increase () {
      this.count++
    }
  }
}
</script>
