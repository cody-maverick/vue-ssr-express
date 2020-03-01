<template>
    <div class="content">
        <transition
                enter-active-class="router-animation animated fadeIn"
                leave-active-class="router-animation animated fadeOut"
                mode="out-in">
            <router-view/>
        </transition>
    </div>
</template>

<script>
    export default {
        name: "Content",
    }
</script>

<style scoped
       src="./Content.scss">
</style>