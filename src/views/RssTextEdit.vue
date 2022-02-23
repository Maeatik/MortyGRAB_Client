<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Редактирование списока текстов пользователей</div>
		<div class="panel-body">
			<form @submit="handleSubmit">
				<div class="form-group">
					<label for="user_id">Пользователь</label>
					<select class="form-control" id="user_id" v-model="user_id">
						<option v-for="item1 in users" v-bind:value="item1.id">{{item1.login}}</option>
					</select>
				</div>
				<div class="form-group">
					<label for="page_id">Собранный текст</label>
					<select class="form-control" id="page_id" v-model="page_id">
						<option v-for="item2 in pagesites" v-bind:value="item2.id">{{item2.grabtext}}</option>
					</select>
				</div>
				<div class="form-group">
					<label for="pagedate">Дата</label>
					<input type="date" class="form-control" id="pagedate" v-model="pagedate">
				</div>
				<button type="submit" class="btn btn-primary pull-right">Сохранить</button>
			</form>
		</div>
	</div>
</template>

<script>

	import {mapActions, mapState} from "vuex";

	export default {
		data() {
			return {
				id: parseInt(this.$route.params.id),
				user_id: this.$route.params.user_id,
				page_id: this.$route.params.page_id,
				pagedate: this.$route.params.pagedate,
			};
		},
		created() {
			if (this.id !==0 && this.grabsite){
				this.user_id = this.grabsite.user_id;
				this.page_id = this.grabsite.page_id;
				this.pagedate = this.grabsite.pagedate;
			}
		},
		methods: {
			async handleSubmit(e) {
				e.preventDefault();
				const item = {
					user_id: this.user_id,
					page_id: this.page_id,
					pagedate: this.pagedate
				};
				if (this.id !== 0) {
					item.id = this.id;
					await this.editItemText(item);
				} else {
					await this.addItemText(item);
				}
				await this.$router.push({name: "LoaderText"});
			},
			...mapActions([
				'addItemText',
				'editItemText'
			])
		},
		computed: {
			...mapState({
				users: state => state.users,
				pagesites: state => state.pagesites
			}),
			main_text() {
				return this.id !== 0 ?
					this.$store.state.main_text.find(item => item.id === this.id):
					null;
			}
		}
	}
</script>

