<template>
    <div>
        Hello second citizen {{name}}!
        <p v-for="item in list" :key="item.id">
            {{item.name}}
        </p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                name: "You",
                list: []
            }
        }
    }
</script>

<style scoped>
    div {
        color: blue;
    }
</style>