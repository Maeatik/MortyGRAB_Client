<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Редактирование пользовтеля</div>
		<div class="panel-body">
			<form @submit="handleSubmit">
				<div class="form-group">
					<label for="login">Логин</label>
					<input type="text" class="form-control" id="login" v-model="login">
				</div>
				<div class="form-group">
					<label for="password">Пароль</label>
					<input type="text" class="form-control" id="password" v-model="password">
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
					login: this.$route.params.login,
					password: this.$route.params.password,
				};
			},
			created() {
				if (this.id !==0 && this.users){
					this.login = this.users.login;
					this.password = this.users.password;
				}
			},
			methods: {
				async handleSubmit(e) {
					e.preventDefault();
					const item = {
						login: this.login,
						password: this.password,
					};
					if (this.id !== 0) {
						item.id = this.id;
						await this.editItemUsers(item);
					} else {
						await this.addItemUsers(item);
					}
					await this.$router.push({name: "LoaderUser"});
				},
				...mapActions([
					'addItemUsers',
					'editItemUsers'
				])
			},
			computed: {
				users() {
					return this.id !== 0 ?
						this.$store.state.users.find(item => item.id === this.id):
						null;
				}
			}
		}
</script>

