<template>
	<div>
		<img :src="$route.query.img"/>
	</div>
</template>

<script>
import axios from "axios";
export default {

  name: 'detail',

  data () {
    return {
    	filminfo:null
    }
  },
  mounted(){
  		console.log(this.$route.params.detailid);
  	
  }
}
</script>

<style lang="scss" scoped>

  div{
  	img{
  		width: 100%;
  	}
  }
</style>