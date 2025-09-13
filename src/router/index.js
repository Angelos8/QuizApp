import{ createRouter, createWebHistory} from 'vue-router'
// import components
import QuizesView from '@/views/QuizesView.vue'
import QuizView from '@/views/QuizView.vue'
// create router object
const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes:[
        
        {
            path:"/",
            name: "quizes",
            component: QuizesView
        },
        {
            path: '/quiz/:id',
            name:'quiz',
            component: QuizView,
        },
       

    ]

})
// export the router
export default router;
