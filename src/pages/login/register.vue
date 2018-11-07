<template>
    <div>
      <div>用户登录</div>
      <div>tupain</div>
      <div>
        <group>
          <x-input title="用户名：" v-model="useName"></x-input>
          <br>
          <x-input title="密码：" v-model="password"></x-input>
          <br>
          <x-input title="验证码：" v-model="num"></x-input>
        </group>
      </div>

    </div>
</template>

<script>
  import { XInput,Group } from 'vux'
    export default {
        name: "register",
        components: {
          XInput,
          Group
      },
      data(){
          return{
            useName:"",
            password:"",
            num:""
          }
      }
    }
</script>

<style scoped>

</style>
