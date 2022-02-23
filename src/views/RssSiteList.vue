<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Список сайтов</div>
		<div class="panel-body">
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'editsite', params: {id: 0}}">
				Добавить
			</router-link>
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'LoaderText', params: {id: 0}}">
				Тексты пользователей
			</router-link>
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'LoaderUser', params: {id: 0}}">
				Пользователи
			</router-link>
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'loader', params: {id: 0}}">
				Списки собранных текстов
			</router-link>
		</div>
		<table class="table table-striped">
			<thead>
			<tr>
				<th>№</th>
				<th style="width: 30%">Название корня сайта</th>
				<th style="width: 35%">Ссылка</th>
				<th style="width: 20px"></th>
				<th style="width: 20px"></th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="item in grabsite" :key=item.id>
				<td>{{item.id}}</td>
				<td>{{item.namesite}}</td>
				<td>{{item.url}}</td>
				<td><router-link role="button" class="btn btn-sm btn-link" :to="{name: 'editsite',
				params: {id: item.id, namesite: item.namesite, url: item.url}}">
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

	export default {
		name: 'grabsite',
		computed: {
			...mapState({
				grabsite: state => state.grabsite,
			})
		},
		methods: {
			async handleRemoveClick(e, id) {
				await this.removeItemSite(id);
				await this.$router.push({name: "LoaderSite"});
			},
			...mapActions([
				'removeItemSite'
			])
		}
	}
</script>

