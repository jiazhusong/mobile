/**
* 作者: jsz
* 日期: 2018-11-08
* 描述:
*/
<template>
    <div>
      <x-header style='text-align: center;background: #ff9000;line-height: 50px;color: #fff'>首页</x-header>
      <div style=''>
        <swiper :list="list" auto style="width:100%;margin:0 auto;" height="180px" dots-class="custom-bottom" dots-position="center"></swiper>
      </div>
      <div style='padding: 30px'>
        <div style='display: flex;justify-content: space-between;color: #fff;'>
          <div :class='{"active":active==1}' style='width: 40%;background: #365F7D;height: 100px;text-align: center;' @click='applyFun(1)'>
            <p style='margin-top: 20px;font-size: 18px'>申请额度</p>
            <div style='color: #ff9000;font-size: 28px'>
              <i  class='iconfont icon-qian-copy'></i>
              <span style='font-size: 28px'>1200</span>
            </div>
          </div>
          <div :class='{"active":active==2}' style='width: 40%;background: #365F7D;height: 100px;text-align: center;' >
            <p style='margin-top: 20px;font-size: 18px'>申请额度</p>
            <div style='color: #ff9000;font-size: 28px'>
              <i  class='iconfont icon-qian-copy'></i>
              <span style='font-size: 28px'>2400</span>
            </div>
          </div>
        </div>
        <div>
          <p style='color:rgb(25, 131, 173);line-height: 50px;margin-top:20px;'>借款期限：7天</p>
        </div>
        <div>
          <x-button type='primary'>立即申请</x-button>
        </div>
        <div style='margin-top: 20px;color: rgb(25, 131, 173)'>
          注：点击申请即表示您已同意用户条款和隐私条款，本平台不对在校大学生开放
        </div>
      </div>
      <tabbar>
        <tabbar-item selected link="/layout">
          <i slot="icon" class='iconfont icon-yemian-copy'></i>
          <span slot="label">首页</span>
        </tabbar-item>
        <tabbar-item  link="/userlayout">
          <i slot="icon" class='iconfont icon-wodedangxuan'></i>
          <span slot="label">我的</span>
        </tabbar-item>

      </tabbar>
    </div>
</template>

<script>
  import { XInput,Group,XButton,XHeader,Cell,Tabbar,TabbarItem,Swiper } from 'vux'
    export default {
        name: "layout",
        components: {
          XInput,
          Group,
          XButton,
          XHeader,
          Cell,
          Tabbar,
          TabbarItem,
          Swiper
        },
        props: [],
        data() {
            return {
              active:1,
              list:[{
                url: 'javascript:',
                img: 'http://pic29.nipic.com/20130511/9252150_174018365301_2.jpg',
                title: '送你一朵fua'
              }, {
                url: 'javascript:',
                img: 'http://pic.58pic.com/58pic/15/63/07/42Q58PIC42U_1024.jpg',
                title: '送你一次旅行',
              }]
            }
        },
        mounted() {

        },
        methods: {}
    }
</script>

<style scoped lang='less'>
.active{
  box-shadow: 0 0 20px #2BFAFF
}
</style>
