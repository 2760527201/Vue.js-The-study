<template>
    <div class="three3">
      <h3>3.请介绍一下自己：</h3>
      <textarea name="文本域" id="" cols="50" rows="15" v-model="aaa">{{aaa}}</textarea>
      <div class="forrt">
        <input type="button" value="提交" @click="tijiao" >
        <input type="button" value="上一步" @click="clickon">
        <input type="reset" value="重置" @click="qingkong">
      </div>
    </div>
</template>

<script>
    export default {
        name: "Three-Volume",
        props : ['obj'],
        data : function(){
            return {
              aaa : "",
              num : 3
            }
        },
        methods : {
          qingkong : function(){
              this.aaa = ""
          },
          clickon : function(){
            this.num = 2;
            this.$emit("on-ddd",this.num);

              console.log(this.num)
          },
          tijiao : function () {
            if (this.aaa.length != 0) {
              this.$emit("on-dddd",this.aaa);
              console.log(this.obj)
            }else{
              alert("请填写...")
            }
          }
        }
    }
</script>

<style scoped>
  *{margin: 0;padding: 0;}
  h3{font-size: 30px;}
  textarea{margin: 10px 0;}
  .forrt{margin-top: 10px;}
  .forrt input{width: 30%;height: 50px;}
</style>
