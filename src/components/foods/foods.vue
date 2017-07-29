<template>
	<div class="food-content">
		<ul class="foodlist">
			<li v-for="item in foods">{{ item.name }}</li>
		</ul>
	</div>
</template>

<script>
  const ERR_OK = 0
  export default{
  	props: {
      sellers: {
        type: Object
      }
  	},
  	data() {
      return {
        foods: []
      }
  	},
  	created() {
      this.$http.get('/api/goods').then((response) => {
      	response = response.body
      	if (response.errno === ERR_OK) {
      		this.foods = response.data
      	}
      })
  	}
  }
</script>

<style lang="stylus">
  .food-content
    display: flex
    position: absolute
    top: 174px
    bottom: 46px
    overflow: hidden
    .foodlist
       flex: 0 0 80px
       height: 54px
       line-height: 54px
       font-size: 12px
</style>
