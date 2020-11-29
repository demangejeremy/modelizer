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
			<Modelizer />
		</v-main>

		<v-footer class="font-weight-medium mt-12">
			<v-col class="text-center" cols="12">
				{{ new Date().getFullYear() }} —
				<strong>Jérémy DEMANGE | CY IDHN</strong>
			</v-col>
		</v-footer>
	</v-app>
</template>

<script>
	import Modelizer from "./components/Modelizer";

	export default {
		components: {
			Modelizer,
		},

		data: () => ({
			//
		}),
	};
</script>
