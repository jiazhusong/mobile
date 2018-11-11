/**
* 作者: jsz
* 日期: 2018-11-08
* 描述:
*/
<template>
  <div class='apps'>
    <x-header style='text-align: center;background: #ff9000;line-height: 50px;color: #fff'>用户注册</x-header>
    <div style='text-align: center'><img height='100' src="../../../static/register.png" alt=""></div>
    <div style='padding: 0 30px'>
      <group>
        <x-input title="用户名：" placeholder="请输入手机号" ref='phone' is-type='china-mobile' v-model="phoneNum" required>
          <i slot="label" style="padding-right:10px;display:block;width: 24px;height:24px"  class="iconfont icon-yonghu"  ></i>
        </x-input>
        <x-input title="密码：" type='password' placeholder='请输入密码' v-model="password" required>
          <i slot="label" style="padding-right:10px;display:block;width: 24px;height:24px"   class="iconfont icon-mima"  ></i>
          <i slot="right" style="padding-right:10px;display:block;width: 24px;height:24px"   class="iconfont icon-chakanmima"  ></i>
        </x-input>
        <x-input title="密码：" placeholder='请再次输入密码' type='password' v-model="passwordAgin" required>
          <i slot="label" style="padding-right:10px;display:block;width: 24px;height:24px"   class="iconfont icon-mima"  ></i>
          <i slot="right" style="padding-right:10px;display:block;width: 24px;height:24px"   class="iconfont icon-chakanmima"  ></i>
        </x-input>
        <x-input  title="验证码" placeholder='请输入验证码' v-model="verificationCode " required>
          <i slot="label" style="padding-right:10px;display:block;width: 24px;height:24px"   class="iconfont icon-yanzhengma"  ></i>
          <img slot="right-full-height" :src="imgUrl" @click='imgFun'>
        </x-input>
        <x-input type='number' title="发送验证码" class="weui-vcode" v-model='phoneCode' required>
          <i slot="label" style="padding-right:10px;display:block;width: 24px;height:24px"   class="iconfont  icon-yanzhengma1"  ></i>
          <x-button slot="right" type="primary"  :disabled='codeBtn!="发送验证码"'  @click.native='sendCodeFun' mini >{{codeBtn}}</x-button>
        </x-input>
        <div style='height:1px;background: #D9D9D9; '></div>
        <x-button style='margin-top: 20px;' type="primary" @click.native='registerFun'>注册</x-button>
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
            return {
              phoneNum:"",
              password:"",
              passwordAgin:"",
              verificationCode:"",
              phoneCode:"",
              codeBtn:"发送验证码",
              imgUrl:"http://39.105.80.106:9000/system/kaptcha"
            }
        },
        mounted() {
          let vm=this;
          this.$api.get("api/system/kaptcha",{responseType: 'arraybuffer'},function (res) {
            //
            console.log(res);
            // vm.imgUrl=res.data
            // vm.imgUrl =  'data:image/png;base64,' + btoa(new Uint8Array(res.data).reduce((data, byte) => data + String.fromCharCode(byte), ''));
            // console.log(vm.imgUrl);
          })

        },
        methods: {
          imgFun(){
            console.log(1);
            let vm=this;
            vm.imgUrl="http://39.105.80.106:9000/system/kaptcha"+"?"+Math.random()
          },
          registerFun(){
            let vm=this;
            if(vm.$refs["phone"].valid){
              console.log(1);
            }

            vm.$api.post("api/system/register",{
              kaptcha: vm.verificationCode,
              tel: vm.phoneNum,
              telCode: vm.phoneCode,
              password:vm.password
            },function (data) {
              
            })
          },
          sendCodeFun(){
            let vm=this;
            vm.$api.get("api/system/"+vm.phoneNum+"/code","",function (data) {
              if(data.code==0){
                let n=60;
                let timer=setInterval(function () {
                  vm.codeBtn=n+"S";
                  n--;
                  if(n==0){
                    vm.codeBtn="发送验证码";
                    clearInterval(timer);
                  }
                },1000)
              }
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
