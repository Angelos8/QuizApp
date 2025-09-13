<template>
  <div >
    <header>
      <h1>Quizes</h1>
      <input v-model.trim="search" type="text" placeholder="Search..." style="color: burlywood;">
    </header>
    <div class="options-container">  
      <Card v-for="quiz in quizzes" :key="quiz.id" :quiz="quiz"/> <!--":quiz" is a prop-->
    </div>
  </div>
</template>

<script setup>
import q from '../data/data.json'
import { ref, watch } from 'vue'
import Card from '../components/QuizCard.vue'


// state to store quizzes
const quizzes = ref(q)
// search state
const search = ref('')

// watch for changes
watch(search, () => {
  /**find quize based on search value
  .filter(): returns a new array
           takes a callbac function as input
           the callback function takes a set of arguments: var for item, index (optional), array (optional)
  */
  quizzes.value = q.filter((dataQuiz) =>{
    return dataQuiz.name.toLowerCase().includes(search.value.toLowerCase())
  })
})

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


</style>