/**
* 作者: jsziconfont 阿里巴巴矢量图标库
* 日期: 2018-11-08
* 描述:
*/
<template>
    <div>
      <x-header style='text-align: center;background: #ff9000;line-height: 50px;color: #fff'>用户主页</x-header>
      <div style='margin-top: 20px;padding: 0 30px'>
        <div style='border: 1px solid #ccc;padding: 20px 10px;box-shadow:0 0 10px #ccc '>
          <img height='50' src="../../../static/user.png" alt="">
          <span style='vertical-align: top'>欢迎：</span>
          <span style='vertical-align: top'>{{account}}</span>
        </div>
        <div style='border: 1px solid #ccc'>
          <group>
            <cell is-link title="我的资料" icon-class='iconfont icon-yanzhengma' link="/myInfo">
              <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../static/myinfo.png">
            </cell>
            <cell is-link title="申请记录 " link='/applicationRecord'>
              <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../static/applicationRecord.png">
            </cell>
            <cell is-link title="账单查询 " link="/recordQuery">
              <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../static/billQuery.png">
            </cell>
            <cell is-link title="修改密码 " link="/resetpass">
              <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../static/editpass1.png">
            </cell>
            <cell is-link title="退出登录 " @click.native="loginoutFun"  >
              <img slot="icon" width="20" style="display:block;margin-right:5px;" src="../../../static/outlogin.png">

            </cell>
          </group>
        </div>
      </div>
      <tabbar>
        <tabbar-item link="/layout">
          <i slot="icon" class='iconfont icon-yemian-copy'></i>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item selected link="/userlayout">
          <i slot="icon" class='iconfont icon-wodedangxuan'></i>
          <span slot="label">我的</span>
        </tabbar-item>

      </tabbar>
      <toast v-model="showPositionValue" type="text" :time="1000" is-show-mask text="" position="middle">{{popmsg}}</toast>
    </div>
</template>

<script>
  import { XInput,Group,XButton,XHeader,Cell,Tabbar,TabbarItem } from 'vux'
    export default {
        name: "userMain",
        components: {
          XInput,
          Group,
          XButton,
          XHeader,
          Cell,
          Tabbar,
          TabbarItem
        },
        props: [],
        data() {
            return {
              account:"",
              userId:"",
              showPositionValue:false,
              popmsg:""
            }
        },
        mounted() {
          let vm=this;
          this.$api.get("api/user/info","",function ({data}) {
            if(data.code==20){
              vm.userId=data.data.id;
              vm.account=data.data.tel;
            }
          });
          // vm.account=vm.$router.
        },
        methods: {
          loginoutFun(){
            let vm=this;
            vm.$api.post("api/system/logout","",function ({data}) {
              if(data.code==20){
                sessionStorage.clear();
                vm.showPositionValue=true;
                  vm.popmsg="退出登录成功"
                vm.$router.push({
                  path:"/",
                })
              }
            })
          }
        }
    }
</script>

<style scoped lang='less'>

</style>
