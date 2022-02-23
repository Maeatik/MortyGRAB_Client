<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Список собранных текстов</div>
		<div class="panel-body">
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'edit', params: {id: 0}}">
				Добавить
			</router-link>
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'LoaderUser', params: {id: 0}}">
				Пользователи
			</router-link>
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'LoaderSite', params: {id: 0}}">
				Корни сайтов
			</router-link>
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'LoaderText', params: {id: 0}}">
				Тексты пользователей
			</router-link>
		</div>
		<table class="table table-striped">
			<thead>
			<tr>
				<th>№</th>
				<th style="width: 60%">Полученный текст</th>
				<th style="width: 15%">Название сайта</th>
				<th style="width: 15%">Название страницы</th>
				<th style="width: 10%">Источник</th>
				<th style="width: 20px"></th>
				<th style="width: 20px"></th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="item in pagesites" :key=item.id>
				<td>{{item.id}}</td>
				<td>{{item.grabtext}}</td>
				<td>{{item.site_exp.namesite}}</td>
				<td>{{item.namepage}}</td>
				<td>{{item.page_link}}</td>
				<td><router-link role="button" class="btn btn-sm btn-link" :to="{name: 'edit',
				params: {id: item.id, site_id: item.site_id, page_link: item.page_link, namepage: item.namepage, grabtext: item.grabtext}}">
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
		name: 'pagesites',
		computed: {
			...mapState({
				pagesites: state => state.pagesites,
				grabsite: state => state.grabsite
			})
		},
		methods: {
			async handleRemoveClick(e, id) {
				await this.removeItem(id);
				await this.$router.push({name: "loader"});
			},
			...mapActions([
				'removeItem',
			])
		},
	}
</script>
