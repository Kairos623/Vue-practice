<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'v-button'
}
</script>

<style>
.btn {
    padding: 10px 15px;
    margin: 5px;
    background: none;
    font-size: 12pt;
    color: white;
    background: #6C757D;
    border: 3px solid #6C757D;
    border-radius: 5px;
}
</style>