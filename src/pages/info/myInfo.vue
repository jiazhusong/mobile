/**
* 作者: jsz
* 日期: 2018-11-08
* 描述:
*/
<template>
    <div >
      <x-header style='text-align: center;background: #ff9000;line-height: 50px;color: #fff'>我的资料</x-header>
      <div  style='margin-bottom: 60px; '>
        <div>
          <tab>
            <tab-item selected @on-item-click="onItemClick">基本信息</tab-item>
            <tab-item @on-item-click="onItemClick">银行卡信息</tab-item>
            <tab-item @on-item-click="onItemClick">工作信息</tab-item>
          </tab>
        </div>
        <div v-show='showNum==0' :style='{"max-height": maxHei}' style='overflow: auto'>
          <group ref='groups'>
            <x-input label-width='100' title='姓名：' required  ref='realName'  placeholder="请输入真实姓名" v-model="realName">
            </x-input>
            <x-input label-width='100' title='身份证号码：'  ref='realName'  placeholder="请输入身份证号码" v-model="idcard">
            </x-input>
            <x-input label-width='100' title='QQ号码：'   placeholder="请输入QQ号码" v-model="qqNum">
            </x-input>
            <x-input label-width='100' title='微信号码：'  placeholder="请输入微信号码" v-model="wxNum">
            </x-input>
            <x-input label-width='100' title='学信网账号：'  placeholder="请输入学信网账号" v-model="chsi">
            </x-input>
            <x-input label-width='100' title='学信网密码：'  placeholder="请输入学信网密码" v-model="chsiPass">
            </x-input>
            <x-input label-width='100' title='运营商密码：'  placeholder="请输入运营商密码" v-model="operatorPass">
            </x-input>
            <!--<div style='padding-left: 15px;'>-->
              <!--<span>身份证正面照</span>-->
              <!--<input  type='file' >-->
              <!--<uploader-->
                <!--style='display: inline-block'-->
                <!--:images="uploadObj.images"-->
                <!--:handle-click="true"-->
                <!--:show-header="false"-->
                <!--:readonly="true"-->
                <!--:upload-url="uploadObj.uploadUrl"-->
                <!--name="img"-->
                <!--:params="uploadObj.params"-->
                <!--size="small"-->
                <!--@add-image="addImageMethod"-->
              <!--&gt;-->
                <!--上传-->
              <!--</uploader>-->
            <!--</div>-->

            <x-input label-width='100' title='父亲姓名：'  placeholder="请输入父亲姓名" v-model="fatherName">
            </x-input>
            <x-input label-width='100' title='父亲电话：'  placeholder="请输入父亲电话" v-model="fatherPhone">
            </x-input>

            <x-input label-width='100' title='母亲姓名：'  placeholder="请输入母亲姓名" v-model="matherName">
            </x-input>
            <x-input label-width='100' title='母亲电话：'  placeholder="请输入母亲电话" v-model="matherPhone">
            </x-input>
            <x-input label-width='100' title='同学姓名：'  placeholder="请输入同学姓名" v-model="schoolmate">
            </x-input>
            <x-input label-width='100' title='同学电话：'  placeholder="请输入同学电话" v-model="schoolPhone">
            </x-input>
            <!--<div style='display: flex;border-top: 1px solid #D9D9D9;'>-->
            <!--<spans style='width: 100px;margin-left: 15px;'>性别：</spans>-->
            <!--<div style='flex: 1'>-->
            <!--<radio v-model='sex' :selected-label-style="{color: '#1AAD19'}"    :options="list" @on-change="change"></radio>-->
            <!--</div>-->
            <!--</div>-->

            <!--<x-input  placeholder='年龄' v-model="age">-->
            <!--<i slot="label" style="padding-right:10px;display:block;width: 24px;height:24px"   class="iconfont icon-yanzhengma"  ></i>-->
            <!--<img slot="right-full-height" src="https://ws1.sinaimg.cn/large/663d3650gy1fq684go3glj203m01hmwy.jpg">-->
            <!--</x-input>-->
            <div style='height:1px;background: #D9D9D9; '></div>
            <x-button style='margin-top: 20px;' @click.native='basicSubmit' type="primary" >保存</x-button>
          </group>
        </div>
        <div v-show='showNum==1' :style='{"max-height": maxHei}' style='overflow: auto'>
          <group>
            <x-input label-width='100' title='银行账号：'  placeholder="请输入银行账号" v-model="bankNum">
            </x-input>
            <x-input label-width='100' title='分行信息：'  placeholder="请输入分行信息" v-model="bankInfo">
            </x-input>
            <x-input label-width='100' title='支付宝账号：'  placeholder="请输入支付宝账号" v-model="AlipayNum">
            </x-input>
            <x-input label-width='100' title='支付宝密码：'  placeholder="请输入支付宝密码" v-model="alipayPass">
            </x-input>
            <x-input label-width='100' title='淘宝账号：'  placeholder="请输入淘宝账号" v-model="taobaoNum">
            </x-input>
            <x-input label-width='100' title='淘宝密码：'  placeholder="请输入淘宝密码" v-model="taobaoPass">
            </x-input>
            <div style='height:1px;background: #D9D9D9; '></div>
            <x-button style='margin-top: 20px;' type="primary" @click.native='bankSubmit'>保存</x-button>
          </group>
        </div>
        <div v-show='showNum==2' :style='{"max-height": maxHei}' style='overflow: auto'>
          <group>
            <x-input title='工作单位：'  placeholder="请输入工作单位" v-model="work">
            </x-input>
            <x-input title='单位地址：'  placeholder="请输入单位地址" v-model="workAdrass">
            </x-input>
            <x-input title='家庭地址：'  placeholder="请输入家庭地址" v-model="familyAdrass">
            </x-input>

            <div style='height:1px;background: #D9D9D9; '></div>
            <x-button style='margin-top: 20px;' type="primary" @click.native='workSubmit'>保存</x-button>
          </group>
        </div>
      </div>

      <tabbar style='position: fixed'>
        <tabbar-item  link="/layout">
          <i slot="icon" class='iconfont icon-yemian-copy'></i>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item selected link="/userlayout">
          <i slot="icon" class='iconfont icon-wodedangxuan'></i>
          <span slot="label">我的</span>
        </tabbar-item>

      </tabbar>
    </div>
</template>

<script>
  import { XInput,Group,XButton,XHeader,Cell,Tabbar,TabbarItem,Tab,TabItem ,Radio  } from 'vux'
  import Uploader from 'vux-uploader'
    export default {
        name: "myInfo",
        components: {
          XInput,
          Group,
          XButton,
          XHeader,
          Cell,
          Tabbar,
          TabbarItem,
          Tab,
          TabItem,
          Radio,
          Uploader,
        },
        props: [],
        data() {
            return {
              showNum:0,
              list: [{key: '1', value: '男'}, {key: '2', value: '女'}],
              sex:"1",
              age:"",
              realName:"",
              idcard:"",
              qqNum:"",
              wxNum:"",
              chsi:"",
              chsiPass:"",
              operatorPass:"",
              fatherName:"",
              fatherPhone:"",
              matherName:"",
              matherPhone:"",
              schoolmate:"",
              schoolPhone:"",
              maxHei:"",

              bankNum:"",
              bankInfo:"",
              AlipayNum:"",
              alipayPass:"",
              taobaoNum:"",
              taobaoPass:"",
              work:"",
              workAdrass:"",
              familyAdrass:"",
              uploadObj:{
                images:[{
                  url:"http://pic.58pic.com/58pic/15/63/07/42Q58PIC42U_1024.jpg"
                }],
                uploadUrl:"",
                params:{}
              }
            }
        },
        mounted() {

          this.maxHei=window.screen.height-160+"px";
         this.$api.get("api/user/basic","",function (data) {
           if(data.code==0){

           }
         });
         this.$api.get("api//user/bank","",function (data) {

         });
         this.$api.get("api/user/work","",function (data) {

         })
        },
        methods: {
          onItemClick(value){
            console.log(value);
            this.showNum=value;
          },
          submitData(){
            console.log(this.$refs["realName"].valid);

          },
          basicSubmit(){
            console.log(this.$refs["realName"].valid);
          },
          addImageMethod(){

          },
          bankSubmit(){
            let vm=this;
            vm.$api.post("api/user/bank",{
              bankAccount: vm.bankNum,
              "fhxx": vm.bankInfo,
              "tbmm": vm.taobaoPass,
              "tbzh": vm.taobaoNum,
              "userId": 1,
              "zfbmm": vm.alipayPass,
              "zfbzh": vm.AlipayNum
              } ,function (data) {

              }
            )
          },
          workSubmit(){
            let vm=this;
            vm.$api.post("api/user/work",{
              familyAddress:vm.familyAdrass,
              workAddress:vm.workAdrass,
              workUnit:vm.work,
              userId:1,
            })
          }
        }
    }
</script>

<style scoped lang='less'>

</style>
