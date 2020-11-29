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
					For help and collaboration with other Vuetify developers,
					<br />please join our online
					<a href="https://community.vuetifyjs.com" target="_blank"
						>Discord Community</a
					>
				</p>
			</v-col>

			<v-col class="mb-2" cols="12">
				<div class="my-2">
					<v-btn color="red" dark>Start testing my models</v-btn>
				</div>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		data: () => ({
			ecosystem: [
				{
					text: "vuetify-loader",
					href: "https://github.com/vuetifyjs/vuetify-loader",
				},
				{
					text: "github",
					href: "https://github.com/vuetifyjs/vuetify",
				},
				{
					text: "awesome-vuetify",
					href: "https://github.com/vuetifyjs/awesome-vuetify",
				},
			],
			importantLinks: [
				{
					text: "Documentation",
					href: "https://vuetifyjs.com",
				},
				{
					text: "Chat",
					href: "https://community.vuetifyjs.com",
				},
				{
					text: "Made with Vuetify",
					href: "https://madewithvuejs.com/vuetify",
				},
				{
					text: "Twitter",
					href: "https://twitter.com/vuetifyjs",
				},
				{
					text: "Articles",
					href: "https://medium.com/vuetify",
				},
			],
			whatsNext: [
				{
					text: "Explore components",
					href: "https://vuetifyjs.com/components/api-explorer",
				},
				{
					text: "Select a layout",
					href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
				},
				{
					text: "Frequently Asked Questions",
					href:
						"https://vuetifyjs.com/getting-started/frequently-asked-questions",
				},
			],
		}),
	};
</script>
