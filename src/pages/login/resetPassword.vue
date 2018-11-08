/**
* 作者: jsz
* 日期: 2018-11-08
* 描述:
*/
<template>
  <div>
    <x-header style='text-align: center;background: #ff9000;line-height: 50px;color: #fff'>修改密码</x-header>
    <div style='text-align: center'><img src="../../../static/editPass.png" height='100' alt=""></div>
    <div style='padding: 0 30px'>
      <group>
        <x-input  placeholder="请输入手机号" v-model="phoneNum">
          <i slot="label" style="padding-right:10px;display:block;width: 24px;height:24px"  class="iconfont icon-shouji"  ></i>
        </x-input>
        <x-input  placeholder="请输入真实姓名" v-model="useName">
          <i slot="label" style="padding-right:10px;display:block;width: 24px;height:24px"  class="iconfont icon-zhenshixingming"  ></i>
        </x-input>

        <x-input  placeholder='请输入验证码' v-model="verificationCode">
          <i slot="label" style="padding-right:10px;display:block;width: 24px;height:24px"   class="iconfont icon-yanzhengma"  ></i>
          <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
        </x-input>
        <x-input placeholder='请输入短信验证码'v-model="phoneCode" phoneCode class="weui-vcode">
          <i slot="label" style="padding-right:10px;display:block;width: 24px;height:24px"   class="iconfont  icon-yanzhengma2"  ></i>
          <x-button slot="right" type="primary" mini>发送验证码</x-button>
        </x-input>
        <x-input  placeholder='请输入新密码' v-model="password">
          <i slot="label" style="padding-right:10px;display:block;width: 24px;height:24px"   class="iconfont icon-mima"  ></i>
          <i slot="right" style="padding-right:10px;display:block;width: 24px;height:24px"   class="iconfont icon-chakanmima"  ></i>
        </x-input>
        <x-input  placeholder='确认新密码' v-model="passwordAgin">
          <i slot="label" style="padding-right:10px;display:block;width: 24px;height:24px"   class="iconfont icon-mima"  ></i>
          <i slot="right" style="padding-right:10px;display:block;width: 24px;height:24px"   class="iconfont icon-chakanmima"  ></i>

        </x-input>
        <div style='height:1px;background: #D9D9D9; '></div>
        <x-button style='margin-top: 20px;' type="primary">确认</x-button>
      </group>
      <!--<div class='parent-box'>-->
        <!--<router-link  to='/register'>注册</router-link>-->
        <!--<router-link to='/resetPass'>忘记密码</router-link>-->
      <!--</div>-->
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
        props: [],
        data() {
            return {
              phoneNum:"",
              useName:"",
              verificationCode:"",
              phoneCode:"",
              password:"",
              passwordAgin:"",
            }
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style scoped lang='less'>

</style>
