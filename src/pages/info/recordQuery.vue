/**
* 作者: jsz
* 日期: 2018-11-08
* 描述:
*/
<template>
    <div>
      <x-header style='text-align: center;background: #ff9000;line-height: 50px;color: #fff'>申请记录</x-header>
      <div :style='{"height":maxHei}'>
        <load-more v-if='tipShow' tip="正在加载中，请稍后..."></load-more>

        <x-table  v-if='!tipShow' :cell-bordered="false" style="background-color:#fff;">
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
      <toast v-model="showPositionValue" type="text" :time="1000" is-show-mask text="" position="middle">{{popmsg}}</toast>

    </div>
</template>

<script>
  import { XInput,Group,XButton,XHeader,Cell,Tabbar,TabbarItem,Tab,TabItem ,Radio,XTable ,LoadMore ,Toast} from 'vux'
    export default {
        name: "recordQuery",
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
          LoadMore,
          Toast
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
              tipShow:true,
              datas:[],
              showPositionValue:false,
              popmsg:"",
            }
        },
        mounted() {
          let vm=this;
          vm.maxHei=window.screen.height-100+"px";
          vm.$api.get("api/bill/loan/check",{
            page:0,
            size:50,
          },function ({data}) {
            vm.tipShow=false;
            if(data.code==20){
              vm.datas=data.data.list
            }else {
              vm.popmsg=data.message;
              vm.showPositionValue=true;
            }
          })
        },
        methods: {}
    }
</script>

<style scoped lang='less'>

</style>
