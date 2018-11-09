<template>
    <div>
      <x-header style='text-align: center;background: #ff9000;line-height: 50px;color: #fff'>用户登录</x-header>
      <div style='text-align: center'><img src="../../../static/banana1.jpg" height='100' alt=""></div>
      <div style='text-align: center'>香蕉派</div>
      <div style='padding: 0 30px'>
        <group>
          <x-input title="用户名：" placeholder="请输入用户名" v-model="useName">
            <i slot="label" style="padding-right:10px;display:block;width: 24px;height:24px"  class="iconfont icon-yonghu"  ></i>
          </x-input>
          <x-input title="密码：" placeholder='请输入密码' v-model="password">
            <i slot="label" style="padding-right:10px;display:block;width: 24px;height:24px"   class="iconfont icon-mima"  ></i>
          </x-input>
          <x-input  title="验证码" placeholder='请输入验证码' v-model="num">
            <i slot="label" style="padding-right:10px;display:block;width: 24px;height:24px"   class="iconfont icon-yanzhengma"  ></i>
            <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
          </x-input>
         <div style='height:1px;background: #D9D9D9; '></div>
          <x-button style='margin-top: 20px;' type="primary" @click.native='loginFun'>登录</x-button>
        </group>
        <div class='parent-box'>
          <router-link  to='/register'>注册</router-link>
          <router-link to='/resetpass'>忘记密码</router-link>
        </div>
      </div>

    </div>
</template>

<script>
  import { XInput,Group,XButton,XHeader } from 'vux'
    export default {
        name: "login",
        components: {
          XInput,
          Group,
          XButton,
          XHeader
      },
      data(){
          return{
            useName:"",
            password:"",
            num:""
          }
      },
      methods:{
        loginFun(){
          let vm=this;
          vm.$router.push({
            path:"/userlayout"
          })
        }
      }
    }
</script>

<style scoped lang='less'>
.parent-box{
  display: -webkit-box;
  display: -webkit-flex;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}
</style>
