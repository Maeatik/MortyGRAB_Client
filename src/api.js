import { apiUrl } from "./config";
import axios from "axios";

export default {
	pagesite: {
		resourceUrl: "page_sites",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}`,
				method: "GET"
			});
		},
		getAllWithExpand()
		{
			return axios({
				url: `${apiUrl}/${this.resourceUrl}?expand`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			fetch(`${apiUrl}/${this.resourceUrl}/${id}`,{
				method: "PUT",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					"site_id": item.site_id,
					"page_link": item.page_link,
					"namepage": item.namepage,
					"grabtext": item.grabtext
				}),
				data: item
			})
			// return axios({
			// 	url: `${apiUrl}/${this.resourceUrl}/${id}`,
			// 	method: "PUT",
			// 	headers: {
			// 		'Content-Type': 'application/json'
			// 	},
			// });

		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "DELETE"
			});
		}
	},
	users: {
		resourceUrl: "users",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			fetch(`${apiUrl}/${this.resourceUrl}/${id}`,{
				method: "PUT",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					"login": item.login,
					"password": item.password
				}),
				data: item
			})
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "DELETE"
			});
		}
	},
	grabsite: {
		resourceUrl: "sites",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			fetch(`${apiUrl}/${this.resourceUrl}/${id}`,{
				method: "PUT",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					"namesite": item.namesite,
					"url": item.url
				}),
				data: item
			})
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "DELETE"
			});
		}
	},
	main_text: {
		resourceUrl: "main_texts",
		getAll() {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}`,
				method: "GET"
			});
		},
		getAllWithExpand()
		{
			return axios({
				url: `${apiUrl}/${this.resourceUrl}?expand`,
				method: "GET"
			});
		},
		getOne(id) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "GET"
			});
		},
		add(item) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}`,
				method: "POST",
				data: item
			});
		},
		edit(id, item) {
			fetch(`${apiUrl}/${this.resourceUrl}/${id}`,{
				method: "PUT",
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({
					"user_id": item.user_id,
					"page_id": item.page_id,
					"page_date": item.page_date
				}),
				data: item
			})
		},
		delete(id) {
			return axios({
				url: `${apiUrl}/${this.resourceUrl}/${id}`,
				method: "DELETE"
			});
		}
	}
};
