<template>
	<div bg="[#3398af]" min="h-full" flex>
		<div class="content" bg-3398af flex-center text-center w="56%">
			<h2 text="#fff size-100px">404</h2>
		</div>
		<div class="right-content" flex="1">
			<div pl-80px>
				<h3 mt-200px text="[#3397af] 40px" capitalize>我们很抱歉！</h3>
				<h4 my-30px text="[#222] 18px" capitalize>您请求的页面无法找到。</h4>
				<p>请联系管理员或者点击下方按钮返回首页</p>
				<!-- <p mt-50px>Copyright &copy; 2017.Company name All rights reserved.</p> -->
				<el-button mt-50px type="primary" size="large" @click="handleGoToHome">
					<template #icon>
						<i-material-symbols:home></i-material-symbols:home>
					</template>
					返回首页
				</el-button>
				<el-button mt-50px type="primary" plain size="large" @click="handleToPreviousPage">
					<template #icon>
						<i-material-symbols:arrow-back></i-material-symbols:arrow-back>
					</template>
					返回上一页
				</el-button>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
const router = useRouter()
const handleGoToHome = () => router.replace('/')

const handleToPreviousPage = () => router.go(-1)
</script>

<style lang="scss" scoped>
.content {
	background: url(../../assets/images/banner.png) center no-repeat;
	background-size: cover;
}
.right-content {
	background: url(../../assets/images/cut.jpg) no-repeat center;
	background-size: cover;
}
</style>
