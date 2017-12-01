import Vue from 'vue'
import Router from 'vue-router'

//Pages
import Home from '@/pages/Home'
import Page1 from '@/pages/Page1'
import Page2 from '@/pages/Page2'
//end of Pages

import SLComponent from "@/router/component.js"

import VueJsModal from "@/components/dialog/index.js"
import VTooltip from '@/components/tooltip/index.js'

import axios from 'axios'

Vue.use(VueJsModal, {
  dialog: true
})


Vue.use(VTooltip,{
	disposeTimeout: 10000,
	defaultClass : 'sl-tooltip'
})

Vue.use(Router)

//Ajax
Vue.prototype.$ajax = {
  get: function (_url, _data, config) {
    return this.request("get", _url, _data, config);
  },
  post: function (_url, _data, config) {
    return this.request("post", _url, _data, config);
  },
  all: function (urls, cb) {
    var promises = [];
    for (var index in urls) {
      var url = urls[index];
      promises.push(this.get(url));
    }
    axios.all(promises)
      .then(axios.spread(function (acct, perms) {
        if (typeof cb === "function") {
          cb(acct, perms);
        }
      }));
  },
  request: function (_method, _url, _data, config) {
    if (typeof config === "object") {
      config.method = _method;
      config.baseURL = Config.Ajax.url,
        config.url = _url,
        config.params = _data,
        config.data = _data
    }
    if (_method === "get") {
      if (typeof config === "object") {
        return axios(config);
      } else {
        return axios({
          method: _method,
          baseURL: Config.Ajax.url,
          params: _data,
          url: _url
        });
      }
    } else if (_method === "post") {
      if (typeof config === "object") {
        return axios(config);
      } else {
        return axios({
          method: _method,
          baseURL: Config.Ajax.url,
          url: _url,
          data: _data
        });
      }
    } else {
      if (typeof config === "object") {
        return axios(config);
      } else {
        return axios({
          method: _method,
          baseURL: Config.Ajax.url,
          url: _url,
          params: _data,
          data: _data
        });
      }
    }

  }
};

export default new Router({
  mode: 'history',
  linkActiveClass: 'active',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/admin',
      component: resolve => require(['../pages/Admin.vue'], resolve),
      children: [
        {
          path: '/home',
          name: 'home',
          component: Home
        },
        {
          path: '/page1',
          name: 'page1',
          component: Page1
        },
        {
          path: '/page2',
          name: 'page2',
          component: Page2
        }
      ]
    },
    {
      path: '/login',
      component: resolve => require(['../pages/Login.vue'], resolve)
    }
  ]
})
