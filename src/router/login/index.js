export default[
    {
        path:'/',
        name:'Login',
        redirect:'/login'
    },
    {
        path:'/login',
        name:'login',
        component:()=> import('@/views/login/login.vue')
    },
    {
        path:'/index',
        name:'index',
        component:()=> import('@/views/main/index.vue')
    }
]