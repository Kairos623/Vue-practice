<template>
    <div class="content-box">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'v-div'
}
</script>

<style>
.content-box {
    display: flex;
    align-items: center;
    flex-direction: column;
    border: 3px solid #6C757D;
    border-radius: 5px;
    padding: 10px;
}
</style>