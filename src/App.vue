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
			<router-view />
		</v-main>

		<v-footer class="font-weight-medium mt-12">
			<v-col class="text-center" cols="12">
				{{ new Date().getFullYear() }} —
				<strong>Jérémy DEMANGE | CY IDHN</strong>
			</v-col>
		</v-footer>
	</v-app>
</template>

<style lang="scss">
	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}

	#nav {
		padding: 30px;

		a {
			font-weight: bold;
			color: #2c3e50;

			&.router-link-exact-active {
				color: #42b983;
			}
		}
	}
</style>
