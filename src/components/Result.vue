<template>
    <div class="results">
        <p> Results: </p>
        <h3>
            {{ correctAnswers }} / {{ totalQuestions }} 
        </h3>
        <RouterLink to="/"> Home</RouterLink>        
    </div>
</template>

<script setup>
import { defineProps } from 'vue'
const { totalQuestions, correctAnswers } = defineProps(['totalQuestions', 'correctAnswers'])


</script>


<style scoped>
    .results {
        text-align: center;
        font-weight: bold;
        text-align: center;
        padding: 100px 0px;
    }   
    .p {
        font-size: 30px;
    }
    .h1 {
        font-size: 80px;
    }
    </style>