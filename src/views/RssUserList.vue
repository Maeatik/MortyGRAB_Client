<template>
	<div class="panel panel-primary" style="margin-top: 10px">
		<div class="panel-heading">Список пользователей</div>
		<div class="panel-body">
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'editUsers', params: {id: 0}}">
				Добавить
			</router-link>
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'LoaderSite', params: {id: 0}}">
				Корни сайтов
			</router-link>
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'LoaderText', params: {id: 0}}">
				Тексты пользователей
			</router-link>
			<router-link role="button" class="btn btn-lg btn-block btn-default" :to="{name: 'loader', params: {id: 0}}">
				Списки собранных текстов
			</router-link>
		</div>
		<table class="table table-striped">
			<thead>
			<tr>
				<th>№</th>
				<th style="width: 30%">Имя пользователя</th>
				<th style="width: 35%">Пароль</th>
				<th style="width: 20px"></th>
				<th style="width: 20px"></th>
			</tr>
			</thead>
			<tbody>
			<tr v-for="item in users" :key=item.id>
				<td>{{item.id}}</td>
				<td>{{ item.login}}</td>
				<td>{{ item.password}}</td>
				<td><router-link role="button" class="btn btn-sm btn-link" :to="{name: 'editUsers',
				params: {id: item.id, login: item.login, password: item.password}}">
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
			name: 'users',
			computed: {
				...mapState({
					users: state => state.users
				})
			},
			methods: {
				async handleRemoveClick(e, id) {
					await this.removeItemUsers(id);
					await this.$router.push({name: "LoaderUser"});
				},
				...mapActions([
					'removeItemUsers'
				])
			}
    }
</script>

