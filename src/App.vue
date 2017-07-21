<template>
	<div id="app">
		<v-header>i am a header</v-header>
		<div class="tab">
			<router-link tag="li" :to="{name: 'word'}">
				<a href="">商品</a>
			</router-link>
			<router-link tag="li" to="/hello">
				<a href="">评论</a>
			</router-link>
			<router-link tag="li" to="/word">
				<a href="">商家</a>
			</router-link>
		</div>
		<router-view></router-view>
	</div>
</template>

<script>
import header from './components/header/header'

export default {
  name: 'app',
  components: {
    'v-header': header
  }
}
</script>

<style lang="stylus">
.tab
  display: flex
  height: 40px
  line-height: 40px
  & li
    list-style: none
    flex:1

</style>
