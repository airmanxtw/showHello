<template>
    <h1>{{ msg }}</h1>
    <br />
    <button class="buttonStyle" @click="() => { msg = 'hello world'; emit('btnClick', 'hello world') }">click</button>
</template>
<script setup lang="ts">
import { ref } from 'vue';

const msg = ref('');
const emit = defineEmits<{
    btnClick: [msg: string]
}>()

</script>
<style scoped>
@import '../style.css';
</style>