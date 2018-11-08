/**
* 作者: jsz
* 日期: 2018-11-08
* 描述:
*/
<template>
  <div>
    <x-header style='text-align: center;background: #ff9000;line-height: 50px;color: #fff'>申请记录</x-header>
    <div :style='{"height":maxHei}' style='overflow: auto;margin-bottom: 60px; '>
      <x-table :cell-bordered="false" style="background-color:#fff;">
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
  import { XInput,Group,XButton,XHeader,Cell,Tabbar,TabbarItem,Tab,TabItem ,Radio,XTable  } from 'vux'

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
          XTable
        },
        props: [],
        data() {
            return {
              maxHei:""
            }
        },
        mounted() {
          this.maxHei=window.screen.height-100+"px"
        },
        methods: {}
    }
</script>

<style scoped lang='less'>

</style>
