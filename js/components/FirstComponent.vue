<template>
    <div>
        Hello first citizen {{name}}!
        <p v-for="item in list" :key="item.id">
            {{item.name}}
        </p>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                name: "Evan",
                list: []
            }
        }
    }
</script>

<style scoped>
    div {
        color: green;
    }
</style>