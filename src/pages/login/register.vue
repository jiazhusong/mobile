/**
* 作者: jsz
* 日期: 2018-11-08
* 描述:
*/
<template>
  <div>
    <x-header style='text-align: center;background: #ff9000;line-height: 50px;color: #fff'>用户注册</x-header>
    <div style='text-align: center'><img height='100' src="../../../static/register.png" alt=""></div>
    <div style='padding: 0 30px'>
      <group>
        <x-input title="用户名：" placeholder="请输入手机号" v-model="useName">
          <i slot="label" style="padding-right:10px;display:block;width: 24px;height:24px"  class="iconfont icon-yonghu"  ></i>
        </x-input>
        <x-input title="密码：" placeholder='请输入密码' v-model="password">
          <i slot="label" style="padding-right:10px;display:block;width: 24px;height:24px"   class="iconfont icon-mima"  ></i>
        </x-input>
        <x-input title="密码：" placeholder='请再次输入密码' v-model="password">
          <i slot="label" style="padding-right:10px;display:block;width: 24px;height:24px"   class="iconfont icon-mima"  ></i>
        </x-input>
        <x-input  title="验证码" placeholder='请输入验证码' v-model="num">
          <i slot="label" style="padding-right:10px;display:block;width: 24px;height:24px"   class="iconfont icon-yanzhengma"  ></i>
          <img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">
        </x-input>
        <x-input title="发送验证码" class="weui-vcode">
          <i slot="label" style="padding-right:10px;display:block;width: 24px;height:24px"   class="iconfont  icon-yanzhengma1"  ></i>
          <x-button slot="right" type="primary" mini>发送验证码</x-button>
        </x-input>
        <div style='height:1px;background: #D9D9D9; '></div>
        <x-button style='margin-top: 20px;' type="primary">注册</x-button>
      </group>
      <div class='parent-box'>
        如果您已经拥有账号，请点击这里
        <router-link to='/'> <x-button style='' type="primary" mini  >登录</x-button></router-link>

      </div>
    </div>

  </div>
</template>

<script>
  import { XInput,Group,XButton,XHeader } from 'vux'
    export default {
        name: "register",
      components: {
        XInput,
        Group,
        XButton,
        XHeader
      },
        props: [],
        data() {
            return {}
        },
        mounted() {

        },
        methods: {}
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
  @header-arrow-color:#fff
</style>
