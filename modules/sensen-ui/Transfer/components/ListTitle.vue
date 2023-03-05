<template>
	<h1 class="list-title">{{ title }}</h1>
</template>
<script setup>
defineProps({
	title: {
		type: String,
		default: '默认title',
	},
})
</script>
<style scoped>
.list-title {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 38px;
	font-weight: normal;
	margin: 0;
	color: #666;
	border-bottom: 1px solid #ddd;
	background-color: #efefef;
	font-size: 14px;
}
</style>
