//Vue Router必須引用的元件
import Vue from 'vue'; //引用Vue套件 位置為node_modules/Vue/dist/vue.js
import VueRouter from 'vue-router';//引用Vue-Router套件 位置為node_modules/vue-router/dist/vue-router.js
//(也可以用路徑的方式引用)

//引入自訂的元件
import GeneralPageCarrier from '@/webPages/generalPageCarrier';
import GeneralIndex from '@/webPages/general/index';
import GeneralPage1 from '@/webPages/general/page1';
import MemberPageCarrier from '@/webPages/memberPageCarrier';
import MemberIndex from '@/webPages/member/index';
import MemberPage1 from '@/webPages/member/page1';

//啟用Vue Router
Vue.use(VueRouter);

//匯出給進入點使用
export default new VueRouter({
    routes:[
        {
            name: 'generalPageCarrier', //元件名稱
            path: '/', //元件對應的路徑
            component: GeneralPageCarrier, //對應的元件
            children:[
                {
                    name: 'index', //元件名稱
                    path: '', //元件對應的路徑(空白就直接對應/)
                    component: GeneralIndex, //對應的元件
                },
                {
                    name: 'page1', //元件名稱
                    path: '/page1', //元件對應的路徑
                    component: GeneralPage1, //對應的元件
                }
            ]
        },
        {
            name: 'memberPageCarrier', //元件名稱
            path: '/member', //元件對應的路徑(空白就直接對應/member)
            component: MemberPageCarrier, //對應的元件
            children:[
                {
                    name: 'index', //元件名稱
                    path: '', //元件對應的路徑
                    component: MemberIndex, //對應的元件
                },
                {
                    name: 'page1', //元件名稱
                    path: 'page1', //元件對應的路徑
                    component: MemberPage1, //對應的元件
                }
            ]
        },
    ]
});
