<template>
    <div>
         <div class="question-container">
            <h1 class="question"> {{ question.text }}</h1>
        </div>
        <div v-for="option in question.options" :key="option.id" class="option" @click="handleOptionSelected(option.isCorrect)">
            <p class="option-label">{{ option.label }}</p>
            <div class="option-value">
                <p>{{ option.text }}</p>
            </div>
        </div>
    </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const { question } = defineProps(['question'])
const emit = defineEmits(['selectOption'])
const emitSelectOption = () => {
    emit('selectOption')
}
const handleOptionSelected = (isCorrect) => {
        emit('selectOption', isCorrect)
}
//
</script>

<style scoped>
    .question-container {
        margin-top: 20px;
    }

    .question {
        font-size: 24px;
        font-weight: bold;
    }

    .options-container {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 20px;
    }

    .option {
        display: flex;
        align-items: center;
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        cursor: pointer;
    }

    .option-label {
        font-weight: bold;
        margin-right: 10px;
    }

    .option-value p {
        margin: 0;
    }

</style>