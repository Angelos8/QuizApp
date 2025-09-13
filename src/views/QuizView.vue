<template>
    <div v-if="!showResults">
     <QuizHeader :questionStatus="questionStatus" :barPercentage="barPercentage" />
    <Question  :question="questions[currentQuestionIndex]" @selectOption="onOptionSelected" />

    </div>
    <div v-else>
        <Result  :totalQuestions="questions.length" :correctAnswers="corectAnswers" />
    </div>
</template>

<script setup>
import Question from '../components/Question.vue'
import QuizHeader from '../components/QuizHeader.vue' 
import Result from '../components/Result.vue'
import q from '../data/data.json'
import { ref, watch, computed } from 'vue'
// extract path parameters
import { useRoute } from 'vue-router'

// state to store quizzes
const quizzes = ref(q)

const route = useRoute()
console.log("Route params:", route.params)

// get the questions from quiz
const questions =  quizzes.value.find((quiz) => {
    // return the quiz tht matches the id from path
    return quiz.id === parseInt(route.params.id)
}).questions
console.log("Quiz questions ", questions)

// state to store current question index
const currentQuestionIndex = ref(0)

// question status
const questionStatus = computed(() =>{
return `${questions[currentQuestionIndex.value].id}/${questions.length}`
})

// bar percentage
const barPercentage = computed(() => {
    return `${(currentQuestionIndex.value) / questions.length * 100}%`
})

const corectAnswers = ref(0)
const showResults = ref(false)

const onOptionSelected = (isCorrect) => {
    if(isCorrect) {
        corectAnswers.value++
    }
    if(currentQuestionIndex.value < questions.length -1){
        currentQuestionIndex.value++
    } else {
        // reset the quiz
        showResults.value = true
      
    }
}

</script>



