<template>
	<div id="app">
		<v-header :seller="seller">i am a header</v-header>
		<div class="tab border-1px">
			<router-link :to="{name: 'foods'}">
				商品
			</router-link>
			<router-link to="/hello">
				评论
			</router-link>
			<router-link to="/word">
				商家
			</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import header from './components/header/header'

const ERR_OK = 0

export default {
  name: 'app',
  data () {
    return {
      seller: {}
    }
  },
  created () {
    this.$http.get('/api/seller').then((response) => {
      response = response.body
      if (response.errno === ERR_OK) {
        this.seller = response.data
      }
    })
  },
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus">
@import "./common/stylus/mixin.styl"
.tab
  display: flex
  width: 100%
  height: 40px
  line-height: 40px
  border-1px(rgba(7,17,27,0.1))
  & a
    list-style: none
    flex:1
    text-align: center
    font-size: 14px
    color: rgb(77,85,93)
    &.active
      color: rgb(240,20,20)
	
</style>
