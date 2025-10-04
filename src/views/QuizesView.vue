<template>
  <div >
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search..." style="color: burlywood;">
    </header>
    <div class="options-container">  
      <TransitionGroup 
        name="card" 
        appear 
        @before-enter="beforeEnterHomePage" 
        @enter="enterHomePage"
      >
        <Card 
          v-for="(quiz, index) in quizzes" 
          :key="quiz.id" 
          :quiz="quiz"
          :data-index="index" 
        /> 
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import q from '../data/data.json'
import { ref, watch } from 'vue'
import Card from '../components/QuizCard.vue'
import gsap from 'gsap'

// state to store quizzes
const quizzes = ref(q)
// search state
const search = ref('')


// watch for changes
watch(search, () => {
  quizzes.value = q.filter((dataQuiz) =>{
    return dataQuiz.name.toLowerCase().includes(search.value.toLowerCase())
  })
})

// animation functions
const beforeEnterHomePage = (htmlElement) =>{
  htmlElement.style.opacity = 0
    htmlElement.style.transform = 'translateY(60px)'


}

const enterHomePage = (htmlElement) =>{
  // gsap animation
  gsap.to(htmlElement, 
    {
      y:0,
      opacity:1,
      duration:0.5,
      delay: htmlElement.dataset.index * 0.3
    }
  )

}
</script>


<style scoped>
  .container {
    max-width: 1000px;
    margin: 0 auto
  }

  header {
    margin-bottom: 10px;
    margin-top: 30px;
    display: flex;
    align-items: center;
  }

  header h1 {
    font-weight: bold;
    margin-right: 30px;
  }

  header input {
    border: none;
    background-color: rgba(128,128,128,0.1);
    padding: 10px;
    border-radius: 5px;
  }

  .options-container {
    display: flex;
    flex-wrap: wrap;
    margin-top: 40px;
  }

  .card-enter-from{
    opacity: 0;
    transform: translateY(-50px);
  }

.card-enter-to{
  opacity: 1;
    transform: translateY(0px);
}
.card-enter-active{
  transition: all 0.5s ease
}
</style>