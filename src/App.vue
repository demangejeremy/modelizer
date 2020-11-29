<template>
	<v-app>
		<v-app-bar app color="red" dark>
			<div class="d-flex align-center">
				<a href="/">
					<v-img
						alt="Modelizer Logo"
						class="shrink mr-2"
						contain
						:src="require('./assets/Modelizer.png')"
						transition="scale-transition"
						width="150"
					/>
				</a>
			</div>

			<v-spacer></v-spacer>

			<v-btn
				href="https://github.com/demangejeremy/modelizer"
				target="_blank"
				text
			>
				<span class="mr-2">See on GitHub</span>
				<v-icon>mdi-open-in-new</v-icon>
			</v-btn>
		</v-app-bar>

		<v-main>
			<HelloWorld />
		</v-main>
	</v-app>
</template>

<script>
	import HelloWorld from "./components/HelloWorld";

	export default {
		name: "App",

		components: {
			HelloWorld,
		},

		data: () => ({
			//
		}),
	};
</script>
