import Vue from 'vue';
import Vuex from 'vuex';
import RssApi from './api';

Vue.use(Vuex);

export default new Vuex.Store({
	state: {
		pagesites: [],
		users: [],
		grabsite: [],
		main_text: [],
		alertText: ""
	},
	getters: {

	},
	mutations: {
		'SET_RSS_ITEMS'(state, rssItems) {
			state.pagesites = rssItems;
		},
		'SET_ALERT_TEXT'(state, alertText) {
			state.alertText = alertText;
		},
		'ADD_RSS_ITEM'(state, rssItem) {
			state.pagesites.push(rssItem);
		},
		'EDIT_RSS_ITEM'(state, rssItem) {
			const item = state.pagesites.find(item => item.id === rssItem.id);
			Object.assign(item, rssItem);
		},
		'REMOVE_RSS_ITEM'(state, rssItem) {
			const index = state.pagesites.findIndex(item => item.id === rssItem.id);
			state.pagesites.splice(index, 1);
		},'SET_RSS_USERS'(state, rssItems) {
			state.users = rssItems;
		},
		'ADD_RSS_USERS'(state, rssItem) {
			state.users.push(rssItem);
		},
		'EDIT_RSS_USERS'(state, rssItem) {
			const item = state.users.find(item => item.id === rssItem.id);
			Object.assign(item, rssItem);
		},
		'REMOVE_RSS_USERS'(state, rssItem) {
			const index = state.users.findIndex(item => item.id === rssItem.id);
			state.users.splice(index, 1);
		},
		'SET_RSS_SITES'(state, rssItems) {
			state.grabsite = rssItems;
		},
		'ADD_RSS_SITES'(state, rssItem) {
			state.grabsite.push(rssItem);
		},
		'EDIT_RSS_SITES'(state, rssItem) {
			const item = state.grabsite.find(item => item.id === rssItem.id);
			Object.assign(item, rssItem);
		},
		'REMOVE_RSS_SITES'(state, rssItem) {
			const index = state.grabsite.findIndex(item => item.id === rssItem.id);
			state.grabsite.splice(index, 1);
		},
		'SET_RSS_TEXTS'(state, rssItems) {
			state.main_text = rssItems;
		},
		'ADD_RSS_TEXTS'(state, rssItem) {
			state.main_text.push(rssItem);
		},
		'EDIT_RSS_TEXTS'(state, rssItem) {
			const item = state.main_text.find(item => item.id === rssItem.id);
			Object.assign(item, rssItem);
		},
		'REMOVE_RSS_TEXTS'(state, rssItem) {
			const index = state.main_text.findIndex(item => item.id === rssItem.id);
			state.main_text.splice(index, 1);
		}

	},
	actions: {
		async initialize(context) {
			try {
				const response = await RssApi.pagesite.getAllWithExpand();
				context.commit('SET_RSS_ITEMS', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},

		async addItem(context, item) {
			try {
				const response = await RssApi.pagesite.add(item);
				context.commit('ADD_RSS_ITEM', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editItem(context, item) {
			try {
				const response = await RssApi.pagesite.edit(item.id, item);
				context.commit('EDIT_RSS_ITEM', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeItem(context, id) {
			try {
				const response = await RssApi.pagesite.delete(id);
				context.commit('REMOVE_RSS_ITEM', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},

		async initializeUsers(context) {
			try {
				const response = await RssApi.users.getAll();
				context.commit('SET_RSS_USERS', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async addItemUsers(context, item) {
			try {
				const response = await RssApi.users.add(item);
				context.commit('ADD_RSS_USERS', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editItemUsers(context, item) {
			try {
				const response = await RssApi.users.edit(item.id, item);
				context.commit('EDIT_RSS_USERS', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeItemUsers(context, id) {
			try {
				const response = await RssApi.users.delete(id);
				context.commit('REMOVE_RSS_USERS', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async initializeSite(context) {
			try {
				const response = await RssApi.grabsite.getAll();
				context.commit('SET_RSS_SITES', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async addItemSite(context, item) {
			try {
				const response = await RssApi.grabsite.add(item);
				context.commit('ADD_RSS_SITES', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editItemSite(context, item) {
			try {
				const response = await RssApi.grabsite.edit(item.id, item);
				context.commit('EDIT_RSS_SITES', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeItemSite(context, id) {
			try {
				const response = await RssApi.grabsite.delete(id);
				context.commit('REMOVE_RSS_SITES', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async initializeText(context) {
			try {
				const response = await RssApi.main_text.getAllWithExpand();
				context.commit('SET_RSS_TEXTS', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async addItemText(context, item) {
			try {
				const response = await RssApi.main_text.add(item);
				context.commit('ADD_RSS_TEXTS', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async editItemText(context, item) {
			try {
				const response = await RssApi.main_text.edit(item.id, item);
				context.commit('EDIT_RSS_TEXTS', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},
		async removeItemText(context, id) {
			try {
				const response = await RssApi.main_text.delete(id);
				context.commit('REMOVE_RSS_TEXTS', response.data );
			} catch (error) {
				context.commit('SET_ALERT_TEXT', "Произошла ошибка" );
			}
		},

	}
});
