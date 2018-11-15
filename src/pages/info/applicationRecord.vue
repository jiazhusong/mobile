/**
* 作者: jsz
* 日期: 2018-11-08
* 描述:
*/
<template>
  <div>
    <x-header style='text-align: center;background: #ff9000;line-height: 50px;color: #fff'>申请记录</x-header>
    <div :style='{"height":maxHei}' style='overflow: auto;margin-bottom: 60px; '>
      <load-more v-if='tipShow' tip="正在加载中，请稍后..."></load-more>

      <x-table v-if='!tipShow' :cell-bordered="false"  style="background-color:#fff;">
        <thead>
        <tr>
          <th>申请周期</th>
          <th>申请时间</th>
          <th>状态</th>
          <th>申请额度</th>
        </tr>
        </thead>
        <tbody>
        <tr v-for='item in datas'>
          <td>{{item.loanDay}}天</td>
          <td>{{item.submitDate}}</td>
          <td>{{item.status|statusFun}}</td>
          <td style='color: rgb(255, 144, 0)'>{{item.bill}}</td>
        </tr>

        </tbody>
      </x-table>
      <p style='text-align: center' v-if='datas.length==0&&!tipShow'>暂无数据</p>
    </div>
    <tabbar style='position: fixed'>
      <tabbar-item link="/layout">
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
  import { XInput,Group,XButton,XHeader,Cell,Tabbar,TabbarItem,Tab,TabItem ,Radio,XTable ,LoadMore } from 'vux'

  export default {
        name: "applicationRecord",
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
          XTable,
          LoadMore
        },
        props: [],
        filters:{
          statusFun(value){
            if(value=="PENDING"){
              return "待审核"
            }else if(value=="PASS"){
              return "审核通过"
            }else {
              return "结束"
            }
          }
        },
        data() {
            return {
              maxHei:"",
              datas:[],
              tipShow:true
            }
        },
        mounted() {
          let vm=this;
          vm.maxHei=window.screen.height-100+"px";
          vm.$api.get("api/bill/loan/history",{
            page:0,
            size:50,
          },function ({data}) {
            vm.tipShow=false;
            if(data.code==20){
              vm.datas=data.data.list
            }else {

            }
          })
        },
        methods: {

        }
    }
</script>

<style scoped lang='less'>

</style>
