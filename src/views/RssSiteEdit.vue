<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Редактирование корня сайта</div>
		<div class="panel-body">
			<form @submit="handleSubmit">
				<div class="form-group">
					<label for="namesite">Название корня</label>
					<input type="text" class="form-control" id="namesite" v-model="namesite">
				</div>
				<div class="form-group">
					<label for="url">Ссылка</label>
					<input type="text" class="form-control" id="url" v-model="url">
				</div>
				<button type="submit" class="btn btn-primary pull-right">Сохранить</button>
			</form>
		</div>
	</div>
</template>

<script>

	import {mapActions} from "vuex";

	export default {
		data() {
			return {
				id: parseInt(this.$route.params.id),
				namesite: this.$route.params.namesite,
				url: this.$route.params.url,
			};
		},
		created() {
			if (this.id !==0 && this.grabsite){
				this.namesite = this.grabsite.namesite;
				this.url = this.grabsite.url;

			}
		},
		methods: {
			async handleSubmit(e) {
				e.preventDefault();
				const item = {
					namesite: this.namesite,
					url: this.url
				};
				if (this.id !== 0) {
					item.id = this.id;
					await this.editItemSite(item);
				} else {
					await this.addItemSite(item);
				}
				await this.$router.push({name: "LoaderSite"});
			},
			...mapActions([
				'addItemSite',
				'editItemSite'
			])
		},
		computed: {
			grabsite() {
				return this.id !== 0 ?
					this.$store.state.grabsite.find(item => item.id === this.id):
					null;
			}
		}
	}
</script>

