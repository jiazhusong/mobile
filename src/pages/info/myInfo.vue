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
            <x-input label-width='100' title='父亲姓名：'  placeholder="请输入父亲姓名" v-model="fatherName">
            </x-input>
            <x-input label-width='100' title='父亲电话：'  placeholder="请输入父亲电话" v-model="fatherPhone">
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
            <x-button style='margin-top: 20px;' @click.native='submitData' type="primary">保存</x-button>
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
            <x-button style='margin-top: 20px;' type="primary">保存</x-button>
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
            <x-button style='margin-top: 20px;' type="primary">保存</x-button>
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
          Radio
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
            }
        },
        mounted() {
          console.log(document.body.clientHeight);
          this.maxHei=document.body.clientHeight-160+"px"
        },
        methods: {
          onItemClick(value){
            console.log(value);
            this.showNum=value;
          },
          submitData(){
            console.log(this.$refs["realName"].valid);
          }
        }
    }
</script>

<style scoped lang='less'>

</style>
