<template>
    <div class="options-container">
         <div   class="card" @click="router.push(`/quiz/${quiz.id}`)">
             <img :src="quiz.img" alt="">
               <div class="card-text" >
                   <h2> {{ quiz.name }}</h2>
                   <p>{{ quiz.questions.length }} questions</p>
               </div>
         </div>
       </div>
</template>

<script setup>
import { defineProps } from 'vue'

import { useRoute, useRouter} from 'vue-router'

// route variable allows to get path parameters   
const route = useRoute()

// router provides the ability to navigate to different routes
const router = useRouter()

// access the props object
const { quiz } = defineProps(['quiz'])
</script>
   
<style>
     /* CARD */
   
     .card {
       width: 310px;
       overflow: hidden;
       border-radius: 2%;
       box-shadow: 1px 1px 10px rgba(0,0,0,0.1);
       margin-bottom: 35px;
       margin-right: 20px;
       cursor: pointer;
     }
   
     .card img {
       width: 100%;
       height: 190px;
       margin: 0
     }
   
     .card .card-text {
       padding: 0 5px
     }
   
     .card .card-text h2 {
       font-weight: bold;
     }
</style>