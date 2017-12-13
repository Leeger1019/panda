<template>
  <div id="app">
    <navbar>
      <i class="iconfont icon-category" @click="isShow = !isShow"></i> 
    </navbar>
   
    <section>
       <router-view></router-view>
    </section>
    <footerbar>
      
    </footerbar>
   </div>
</template>

<script>
import navbar from "@/components/common/navbar";

import footerbar from "@/components/common/footerbar";
export default {
  data(){
    return{
      datalist:[],
      isShow:false
    } 
  },
  mounted(){

  },
  components:{
    navbar,
 
    footerbar
  },
  methods:{
    handleClick(value){
      this.isShow = value
    }
  }
}

  </script>

<style lang="scss">
*{
  margin: 0;padding: 0;box-sizing: border-box;
}
html{
  display: block;
  height: 100%;
  font-size: 23.4375px;
}
  #app,body{
   width: 16rem!important;    margin: 0 auto!important;
  height: 100%;
  font-size: 23.4375px;
  background-color: #f2f2f2;
  padding-bottom: 2.4rem;
}

section{
  position: relative;
   
}

footerbar{
  #copyright{
       padding: .75rem 0 .25rem 0;
        font-size: .45rem;
        -webkit-transform: translate3d(0,0,0);
        transform: translate3d(0,0,0);
        line-height: 1.6;
        color: #bcbccb;
        text-align: center;
        a{
          color: #bcbccb;
          outline: none;
            text-decoration: none;
        }
  }
  #tip-download {
      width: 16rem;
      height: 2rem;
      overflow: hidden;
      position: fixed;
      left: 50%;
      -webkit-transform: translateX(-50%);
      -ms-transform: translateX(-50%);
      transform: translateX(-50%);
      bottom: 0;
      z-index: 980;
      background-color: rgba(0,0,0,.8);
      .logo {
          width: 2rem;
          height: 1.2rem;
          position: absolute;
          left: .5rem;
          top: 50%;
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          transform: translateY(-50%);
      }
      .slogan {
          font-size: .5rem;
          line-height: 2rem;
          padding-left: 3rem;
          color: #fff;
      }
      .btn-download {
          height: 1.35rem;
          line-height: 1.35rem;
          padding: 0 .25rem;
          font-size: .5rem;
          position: absolute;
          right: .5rem;
          top: 50%;
          -webkit-transform: translateY(-50%);
          -ms-transform: translateY(-50%);
          transform: translateY(-50%);
          border-radius: .15rem;
          color: #fff;
          background-color: #1cd39b;
          outline: none;
          text-decoration: none;
      }
  }
}
</style>
