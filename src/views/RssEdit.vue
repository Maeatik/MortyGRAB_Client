<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Редактирование текста</div>
		<div class="panel-body">
			<form @submit="handleSubmit">

				<div class="form-group">
					<label for="grabtext">Текст</label>
					<input type="text" class="form-control" id="grabtext" v-model="grabtext">
				</div>
<!--				<div class="form-group">-->
<!--					<label for="site_id">Название сайта</label>-->

<!--					<select class="form-control" id="site_id" v-model="site_id">-->
<!--						<option v-for="item in grabsite":value="grabsite.id">{{item.namesite}}</option>-->
<!--					</select>-->
<!--				</div>-->
<!--								Работает через экспанд-->
<!--								<div class="form-group">-->
<!--									<label for="site_id">Название сайта</label>-->
<!--									<select class="form-control" id="site_id" v-model="site_id">-->
<!--										<option v-for="item in pagesites":value="item.id">{{item.site_exp.namesite}}</option>-->
<!--									</select>-->
<!--								</div>-->
<!--				Работает-->
<!--				<div class="form-group">-->
<!--					<label for="site_id">Название сайта</label>-->
<!--					<select class="form-control" id="site_id" v-model="site_id">-->
<!--						<option v-for="item in grabsite" v-bind:value="item.id">{{item.namesite}}</option>-->
<!--					</select>-->
<!--				</div>-->
				<div class="form-group">
					<label for="site_id">Название сайта</label>
					<select class="form-control" id="site_id" v-model="site_id">
						<option v-for="item in grabsite" v-bind:value="item.id">{{item.namesite}}</option>
					</select>
				</div>
				<div class="form-group">
					<label for="namepage">Название страницы</label>
					<input type="text" class="form-control" id="namepage" v-model="namepage">
				</div>
				<div class="form-group">
					<label for="page_link">Ссылка на страницу</label>
					<input type="text" class="form-control" id="page_link" v-model="page_link">
				</div>
				<button type="submit" class="btn btn-primary pull-right">Сохранить</button>
			</form>
		</div>
	</div>
</template>

<script>
	import {namesites} from "../config";
	import {mapActions, mapState} from "vuex";

	export default {
		data() {
			return {
				id: parseInt(this.$route.params.id),
				site_id: this.$route.params.site_id,
				page_link: this.$route.params.page_link,
				namepage: this.$route.params.namepage,
				grabtext: this.$route.params.site_id
			};
		},
		created() {
			if (this.id !== 0 && this.pagesite) {
				this.site_id = this.pagesite.site_id;
				this.grabtext = this.pagesite.grabtext;
				this.page_link = this.pagesite.page_link;
				this.namepage = this.pagesite.namepage;
			}
		},
		methods: {
			async handleSubmit(e) {
				e.preventDefault();
				const item = {
					site_id: this.site_id,
					page_link: this.page_link,
					namepage:  this.namepage,
					grabtext: this.grabtext,
				};
				if (this.id !== 0) {
					item.id = this.id;
					await this.editItem(item);
					await this.$router.push({name: "loader"});
				} else {
					await this.addItem(item);
					await this.$router.push({name: "loader"});
				}

			},
			...mapActions([
				'addItem',
				'editItem'
			])
		},
		computed: {

			pagesite() {
				return this.id !== 0 ?
					this.$store.state.pagesites.find(item => item.id === this.id) :
					null;
			},
			...mapState({
				pagesites: state => state.pagesites,
				grabsite: state => state.grabsite,
			}),
		}
	}
</script>
