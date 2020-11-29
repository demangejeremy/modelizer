<template>
	<v-container>
		<v-row class="text-left">
			<v-col class="mb-2" cols="12">
				<p><router-link to="/"> Homepage</router-link> > Start</p>
			</v-col>
		</v-row>
		<v-row class="text-center">
			<v-col class="mb-2" cols="12">
				<h1 class="display-2 font-weight-bold mb-3">
					Start with our models
				</h1>

				<p class="subheading font-weight-regular">
					We have designed different models so that you can test them in our
					sandbox.
				</p>
			</v-col>
		</v-row>
		<v-row class="text-left mt-6">
			<v-col class="mb-2" cols="12" sm="12" md="6">
				<v-select
					color="black"
					:items="models"
					v-model="selectedModel"
					label="Select model"
				></v-select>
			</v-col>
		</v-row>
		<v-row class="text-left" v-if="selectedModel">
			<v-col class="mb-2" cols="12" sm="12" md="6">
				<v-textarea
					name="input-7-1"
					label="Your text for testing model"
					color="black"
					v-model="content"
				></v-textarea>
			</v-col>
		</v-row>
		<v-row class="text-left" v-if="loading">
			<v-col cols="12" sm="12" md="6">
				<hr />
				<v-progress-linear
					class="mt-3"
					indeterminate
					color="black"
				></v-progress-linear>
				<p>We are loading model, please wait.</p>
			</v-col>
		</v-row>
		<v-row class="text-left" v-if="results">
			<v-col cols="12" sm="12" md="6">
				<hr />
				<h3 class="mt-3">Result</h3>
				<p v-html="results"></p>
			</v-col>
		</v-row>
		<v-row class="text-left" v-if="selectedModel">
			<v-col class="mb-2" cols="12" sm="12" md="6">
				<v-btn color="red" @click="viewResults" block dark>Testing model</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	import { Nantes } from "@/models/nantes/index.js";

	export default {
		data: () => ({
			models: ["Nantes"],
			selectedModel: null,
			results: null,
			content: "",
			loading: false,
		}),

		methods: {
			async viewResults() {
				// Loading and results
				this.results = null;
				this.loading = true;
				this.results = await Nantes(this.content);
				this.loading = false;
			},
		},
	};
</script>
