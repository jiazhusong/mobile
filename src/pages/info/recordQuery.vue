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
          <tr>
            <td>7天</td>
            <td>2018/11/08 16:36:43</td>
            <td>待审核</td>
            <td style='color: rgb(255, 144, 0)'>1200</td>
          </tr>
          <tr>
            <td>7天</td>
            <td>2018/11/08 16:36:43</td>
            <td>通过</td>
            <td style='color: rgb(255, 144, 0)'>1200</td>
          </tr>

          <tr>
            <td>8天</td>
            <td>2018/11/08 16:36:43</td>
            <td>结束</td>
            <td style='color: rgb(255, 144, 0)'>1200</td>
          </tr>
          </tbody>
        </x-table>
      </div>
    </div>
</template>

<script>
  import { XInput,Group,XButton,XHeader,Cell,Tabbar,TabbarItem,Tab,TabItem ,Radio,XTable ,LoadMore } from 'vux'
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
          LoadMore
        },
        props: [],
        data() {
            return {
              maxHei:"",
              tipShow:true
            }
        },
        mounted() {
          let vm=this;
          vm.maxHei=window.screen.height-100+"px";

        },
        methods: {}
    }
</script>

<style scoped lang='less'>

</style>
