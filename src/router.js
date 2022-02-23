import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './views/App';
import Loader from "./views/Loader";
import RssList from "./views/RssList";
import RssEdit from "./views/RssEdit";
import RssUserList from "./views/RssUserList";
import RssUserEdit from "./views/RssUserEdit";
import LoaderUser from "./views/LoaderUser";
import LoaderSite from "./views/LoaderSite";
import RssSiteList from "./views/RssSiteList";
import RssSiteEdit from "./views/RssSiteEdit";
import LoaderText from "./views/LoaderText";
import RssTextList from "./views/RssTextList";
import RssTextEdit from "./views/RssTextEdit";



Vue.use(VueRouter);
export default new VueRouter({
	mode: 'history',
	routes: [
		{ path: "/", name: "loader", component: Loader },
		{ path: "/app", component: App, children: [
				{ path: "/app", name: "app", component: RssList},
				{ path: "/:id", name: "edit", component: RssEdit },
		]},
		{path: "/LoaderUser", name: "LoaderUser", component: LoaderUser},
		{path: "/users", name: "users", component: RssUserList},
		{path: "/users/:id", name: "editUsers", component: RssUserEdit},

		{path: "/LoaderSite", name: "LoaderSite", component: LoaderSite},
		{path: "/grabsite", name: "grabsite", component: RssSiteList},
		{path: "/grabsite/:id", name: "editsite", component: RssSiteEdit},

		{path: "/LoaderText", name: "LoaderText", component: LoaderText},
		{path: "/main_text", name: "main_text", component: RssTextList},
		{path: "/main_text/:id", name: "main_textedit", component: RssTextEdit}
	]
});
