<template>
    <div class="inner">
      <h3>1.请问您的性别是：</h3>
        <input type="radio" value="男" v-model="picked" id="男">
        <label for="男">男</label>
        <input type="radio" value="女" v-model="picked" id="女">
        <label for="女">女</label>
        <input type="radio" value="保密" v-model="picked" id="保密">
        <label for="保密">保密</label>
        <div class="forrt">
          <input type="button" value="下一步" @click="clickxs">
          <input type="reset" value="重置" @click="chongzhi">
        </div>
    </div>
</template>

<script>
    export default {
        name: "First-Volume",
        data : function(){
          return {
            picked : "",
            num : 1
          }
        },
        methods : {
          clickxs : function () {
            if (this.picked != "") {
                this.num = 2;
                this.$emit("on-aaa",this.num);
                this.$emit("on-aaaa",this.picked)
              console.log(this.num)
            }else{
              alert("请选择...")
            }
          },
          chongzhi : function(){
              this.picked = ""
          }
        }
    }
</script>

<style scoped>
  *{margin: 0;padding:0;}
  .inner{width: 100%;}
  .inner h3{font-size: 30px;}
  .inner input{width: 23px;height: 23px;margin: 50px 20px;}
  .inner label{font-size: 26px;margin-top: 10px;}
  .inner .forrt{margin-left: 50px;}
  .inner .forrt input{width: 40%;height: 50px;margin: 0px 5px;}
</style>
