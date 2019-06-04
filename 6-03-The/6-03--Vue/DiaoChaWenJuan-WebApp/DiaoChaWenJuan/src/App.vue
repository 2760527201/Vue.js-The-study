<template>
  <div id="app">
      <my-header></my-header>
      <FirstVolume v-show="volume == 1" @on-aaa="getTiaozhuan" @on-aaaa="getShuju1"></FirstVolume>
      <TwoVolume v-show="volume == 2" @on-bbb="getTiaozhuan2" @on-ccc="getTiaozhuan2" @on-bbbb="getShuju2"></TwoVolume>
      <ThreeVolume v-show="volume == 3" @on-ddd="getTiaozhuan3" @on-dddd="getShuju3" :obj="obj"></ThreeVolume>
  </div>
</template>

<script>
import Header from "./components/Header";
import FirstVolume from "./components/First-Volume";
import TwoVolume from "./components/Two-Volume";
import ThreeVolume from "./components/Three-Volume";
export default {
  name: 'app',
  data () {
    return {
      volume : 1,
      obj : {}
    }
  },
  components : {
    myHeader : Header,
    FirstVolume,
    TwoVolume,
    ThreeVolume
  },
  methods : {
    getTiaozhuan : function(data){
      this.volume = data;
    },
    getTiaozhuan2 : function(data){
      this.volume = data;
    },
    getTiaozhuan3 : function(data){
      this.volume = data;
    },
    getShuju1 : function(data){
      this.obj.sex=data
    },
    getShuju2 : function(data){
      this.obj.love=data
    },
    getShuju3 : function(data){
      this.obj.introduce =data
    }
  }
}
</script>

<style>

</style>
