<template>
	<div id="lolgame">
		<ul
    v-infinite-scroll="loadMore"
  infinite-scroll-disabled="loading"
  infinite-scroll-distance="0"
  infinite-scroll-immediate-check ="false"
    >
			
      <li class="item1" v-for="data in datalist" @click="handleClick(data.id,data.pictures.img)">
        <img :src="data.pictures.img"/>
        <h2 class="title">{{data.name}}</h2>
        <div class="info">
          <div class="nickName">{{data.userinfo.nickName}}</div>
          <div class="person_num"><i class="iconfont icon-account">：{{data.person_num}}</i></div>

        </div>
      </li>
         
		</ul>

    <div>{{text}}</div>
	</div>
</template>

<script>
import axios from "axios";
import router from "@/router";
export default {

  name: 'lushi',

  data () {
    return {
    	datalist:[],
      loading:false, //控制无限滚动组件 是否禁用
      pageno:1,  //表示第几页数据
      total:0,
      text:"正在加载数据中..."
    }
  },

  mounted(){
  		// axios 是一个http 请求的库， 基于promsie 封装的
  		axios.get("ajax_get_live_list_by_cate?pageno=1&pagenum=10&__plat=h5&cate=hearthstone").then(res=>{
  			console.log(res.data);
  			this.datalist = res.data.data.items;
        this.total = res.data.data.total;
  		})
  },

  methods:{
  	handleClick(id,img){
  		router.push(`/detail?id=${id}&img=${img}`);
  	},

    loadMore(){
      console.log("到底部");

      this.pageno++;

      if(this.pageno>this.total){
        this.loading = true; //禁用滚动加载功能
        this.text="没有数据了";
        return ;
      }

      axios.get("/ajax_get_live_list_by_cate?pageno=1&pagenum=10&__plat=h5&cate=lol",{
        params:{
          pageno:this.pageno,
          pagenum:10
        }
      }).then(res=>{
        console.log(res.data);
        //es6 的数组展开与合并
        this.datalist = [...this.datalist,...res.data.data.items];
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  #lolgame{
        ul{
          margin: 0;
            padding: 0 .25rem 0 0;
            li{
              width: 7.625rem;
              height: 5.3rem;
              position: relative;
              float: left;
              margin-left: .25rem;
              margin-bottom: .25rem;
              font-size: .5rem;
              list-style: none;
              overflow:hidden;
              img{
                width:100%;
                height:4.3rem;
              }
              h2{
                position:absolute;
                width: 100%;
                height: .9rem;
                line-height: .9rem;
                padding: 0 .25rem;
                font-size: .45rem;
                font-weight: 400;
                color: #fff;
                background-color: rgba(0,0,0,.5);
                position: absolute;
                left: 0;
                bottom: 1rem;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display:block;
              }
              .nickName{
                  float:left;
                    width: 4.4rem;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
              }
              .person_num{
                  float:right;
                    font-size: .4rem;
                    color: #999;
                    height: 1rem;
                    overflow: hidden;
                    i{  
                       font-size: .4rem;  
                      width:3rem;
                      display:block;
                      height: 1rem;
                    }
              }
            }
        }
  }
</style>