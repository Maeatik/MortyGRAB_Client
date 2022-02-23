<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Список текстов пользователей</div>
		<div class="panel-body">
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'main_textedit', params: {id: 0}}">
				Добавить
			</router-link>
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'LoaderUser', params: {id: 0}}">
				Пользователи
			</router-link>
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'LoaderSite', params: {id: 0}}">
				Корни сайтов
			</router-link>
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'loader', params: {id: 0}}">
				Списки собранных текстов
			</router-link>
		</div>
		<table class="table table-striped">
			<thead>
			<tr>
				<th>№</th>
				<th style="width: 30%">Пользователь</th>
				<th style="width: 35%">Собранный текст</th>
				<th style="width: 35%">Дата</th>
				<th style="width: 20px"></th>
				<th style="width: 20px"></th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="item in main_text" :key=item.id>
				<td>{{item.id}}</td>
				<td>{{item.user_exp.login}}</td>
				<td>{{item.page_exp.grabtext}}</td>
				<td>{{formatDate(new Date(item.pagedate))}}</td>
				<td><router-link role="button" class="btn btn-sm btn-link" :to="{name: 'main_textedit',
				params: {id: item.id, user_id: item.user_id, page_id: item.page_id, pagedate: item.pagedate}}">
					<span class="glyphicon glyphicon-pencil"></span>
				</router-link></td>
				<td><button type="button" class="btn btn-sm btn-link" @click="handleRemoveClick($event, item.id)">
					<span class="glyphicon glyphicon-remove"></span>
				</button></td>
			</tr>
			</tbody>
		</table>
	</div>
</template>

<script>

	import {mapActions, mapState} from 'vuex';
	import { formatDate } from "../utils";
	export default {
		name: 'main_text',
		computed: {
			...mapState({
				main_text: state => state.main_text,
			})
		},
		methods: {
			formatDate,
			async handleRemoveClick(e, id) {
				await this.removeItemText(id);
				await this.$router.push({name: "LoaderText"});
			},
			...mapActions([
				'removeItemText'
			])
		}
	}
</script>

