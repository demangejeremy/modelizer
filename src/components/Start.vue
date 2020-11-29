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
				></v-textarea>
			</v-col>
		</v-row>
		<v-row class="text-left" v-if="selectedModel">
			<v-col class="mb-2" cols="12" sm="12" md="6">
				<v-btn color="red" block dark>Testing model</v-btn>
			</v-col>
		</v-row>
	</v-container>
</template>

<script>
	export default {
		data: () => ({
			models: ["Nantes"],
			selectedModel: null,
		}),

		methods: {},
	};
</script>
