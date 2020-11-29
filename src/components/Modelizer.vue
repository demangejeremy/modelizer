<template>
	<v-container>
		<v-row class="text-center">
			<v-col cols="12">
				<v-img
					:src="require('../assets/Modelizer_transparent.png')"
					class="my-3"
					contain
					height="200"
				/>
			</v-col>

			<v-col class="mb-2" cols="12">
				<h1 class="display-2 font-weight-bold mb-3">
					Welcome to Modelizer
				</h1>

				<p class="subheading font-weight-regular">
					For help and collaboration with other testers,
					<br />please join our
					<a href="https://github.com/demangejeremy/modelizer" target="_blank"
						>GitHub</a
					>
				</p>
			</v-col>

			<v-col class="mb-2" cols="12">
				<div class="my-2">
					<v-btn color="red" @click="go" dark>Start testing my models</v-btn>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		data: () => ({}),

		methods: {
			go() {
				this.$router.push("start");
			},
		},
	};
</script>
