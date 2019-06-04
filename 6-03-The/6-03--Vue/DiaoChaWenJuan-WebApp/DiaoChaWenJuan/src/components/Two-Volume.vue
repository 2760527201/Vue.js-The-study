<template>
    <div class="twoge">
      <h3>2.请选择您的兴趣爱好：</h3>
      <input type="checkbox" value="看书" id="t1" v-model="picked">
      <label for="t1">看书</label><br>
      <input type="checkbox" value="游泳" id="t2" v-model="picked">
      <label for="t2">游泳</label><br>
      <input type="checkbox" value="跑步" id="t3" v-model="picked">
      <label for="t3">跑步</label><br>
      <input type="checkbox" value="看电影" id="t4" v-model="picked">
      <label for="t4">看电影</label><br>
      <input type="checkbox" value="听音乐" id="t5" v-model="picked">
      <label for="t5">听音乐</label><br>
      <div class="forrt">
        <input type="button" value="下一步" @click="clickxs">
        <input type="button" value="上一步" @click="clickss">
        <input type="reset" value="重置" @click="chongzhi">
      </div>
    </div>
</template>

<script>
    export default {
        name: "Two-Volume",
        data : function(){
            return {
                num: 2,
                picked : []
            }
        },
        methods : {
            clickxs : function () {
                if (this.picked.length >= 2) {
                    this.num  = 3;
                    this.$emit("on-bbb",this.num);
                    this.$emit("on-bbbb",this.picked)
                  console.log(this.num)
                }else{
                    alert("请选择...")
                }
            },
            clickss : function(){
                this.num  = 1;
                this.$emit("on-ccc",this.num);
              console.log(this.num)
            },
            chongzhi : function(){
                this.picked = []
            },

        }
    }
</script>

<style scoped>
  *{margin: 0;padding: 0;}
  h3{font-size: 30px;}
  input{width: 20px;height: 20px;margin: 15px 5px;}
  label{font-size: 20px;}
  .forrt{margin-top: 10px;}
  .forrt input{width: 30%;height: 50px;}
</style>
