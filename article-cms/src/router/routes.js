import Layout from '../components/Layout'
// 用户列表在项目运行时进行加载,提高加载速度的同时也会使项目首次加载时间延长
import userList from '../components/authController/userController/userList'

let routes = [
    {
        path: '/',
        component: Layout, // 异步加载 (懒加载)
        redirect: { path: '/dashboard' },
        meta: {
            title: "根目录",
            icon: 'bx bx-notification',
            style: 'color:#ffffff',
            // hidden: true,
        },
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                meta: {
                    title: "仪表盘",
                    icon: 'bx bxs-dashboard',
                    style: 'color:#ffffff'
                },
                component: () => import('../components/Dashboard/dashboard')
            },
            {
                path: 'home',
                name: 'home',
                meta: {
                    title: "首页",
                    icon: 'bx bx-window',
                    style: 'color:#ffffff'
                },
                component: () => import('../components/views/home'),
                beforeEnter(to, from, next) {
                    console.log("首页路由独享的守卫：beforeEnter");
                    next();
                }
            },
            {
                path: 'carousel',
                name: 'carousel',
                meta: {
                    title: "轮播图管理",
                    icon: 'bx bx-slideshow',
                    style: 'color:#ffffff'
                },
                component: () => import('../components/views/carousel')
            },
            // {
            //     path: 'log',
            //     name: 'log',
            //     meta: {
            //         title: "日志中心",
            //         icon: 'bx bxl-blogger',
            //         style: 'color:#ffffff'
            //     },
            //     component: () => import('../components/sidebar/log')
            // },

        ],
    },
    {
        path: '/Article',
        component: Layout,
        meta: {
            title: "文章管理",
            icon: 'bx bx-chart',
            style: 'color:#ffffff'

        },
        children: [{
            path: 'ArticleContent',
            name: 'ArticleContent',
            meta: {
                title: "文章内容",
                icon: 'bx bx-slideshow',
                style: 'color:#ffffff'
            },
            component: () => import('../components/views/ArticleContent')
        }]
    },
    {
        // path: '/authController',
        // component: Layout,
        // name: "authController",
        // meta: {
        //     title: "权限管理",
        //     icon: 'bx bxs-user'
        // },
        // children: [
        //     {
        path: '/userController',
        name: 'userController',
        component: Layout,
        meta: {
            title: "用户管理",
            icon: 'bx bx-user-pin',
            style: 'color:#ffffff'
        },
        children: [
            {
                path: 'userList',
                name: 'userList',
                meta: {
                    title: "用户列表",
                    icon: 'bx bxs-user-detail',
                    style: 'color:#ffffff'
                },
                component: userList,
                beforeEnter(to, from, next) {
                    console.log("用户列表路由独享的守卫：beforeEnter");
                    next();
                }
            },
            {
                path: 'problemList',
                name: 'problemList',
                meta: {
                    title: "问题列表",
                    icon: 'bx bx-help-circle',
                    style: 'color:#ffffff'
                },
                component: () => import('../components/authController/userController/problemList')
            }
        ]
        // }
        // ],
    },
    {
        path: '/personalCenter',
        name: 'personalCenter',
        component: Layout,
        meta: {
            title: "个人中心",
            icon: 'bx bx-user',
            style: 'color:#ffffff',

        },
        children: [
            {
                path: 'profile',
                name: 'profile',
                meta: {
                    title: "个人信息",
                    icon: 'bx bx-id-card',
                    style: 'color:#ffffff'
                },
                component: () => import('../components/personalCenter/profile')
            },
            // {
            //     path: 'resetPwd',
            //     name: 'resetPwd',
            //     meta: {
            //         title: "密码更改",
            //         icon: 'bx bx-wrench',
            //         style: 'color:#ffffff'
            //     },
            //     component: () => import('../components/personalCenter/resetPwd')
            // },
        ]
    },
    {
        path: '/webSystem',
        component: Layout,
        meta: {
            title: "网站管理",
            icon: 'bx bx-wrench',
            style: 'color:#ffffff'
        },
        children: [{
            path: 'QRCode',
            name: 'QRCode',
            meta: {
                title: "二维码管理",
                icon: 'bx bx-scan',
                style: 'color:#ffffff'
            },
            component: () => import('../components/views/QRCode')
        },
        {
            path: 'webInfo',
            name: 'webInfo',
            meta: {
                title: "网站信息",
                icon: 'bx bx-planet',
                style: 'color:#ffffff'
            },
            component: () => import('../components/views/webInfo')
        },
        {
            path: 'support',
            name: 'support',
            meta: {
                title: "支持我们",
                icon: 'bx bx-like',
                style: 'color:#ffffff'
            },
            component: () => import('../components/views/support')
        },
        ]
        // path: 'QRCode',
        // name: 'QRCode',
        // meta: {
        //     title: "二维码管理",
        //     icon: 'bx bx-qr-scan',
        //     style: 'color:#ffffff'
        // },
        // component: () => import('../components/views/QRCode')
    },
    {
        path: '/Login',
        title: "登錄",
        meta: {
            hidden: true
        },
        component: () => import('../components/Login/Login')
    },
    // {
    //     path: '/Register',
    //     title: "注冊",
    //     component: () => import('../components/Register')
    // },

]


export default routes