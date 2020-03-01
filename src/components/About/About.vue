<template>
    <div>
        <h3>About</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquid asperiores molestiae molestias, nisi nulla quo quod vero! A alias consectetur consequatur doloremque ea enim hic inventore iusto nihil soluta.</p>
    </div>
</template>

<script>
    export default {
        name: "About",
        metaInfo: {
            title: 'About',
            titleTemplate: '%s - Webpack!',
            meta: [
                {
                    hid: 'og:title',
                    name: 'og:title',
                    content: 'Hello World'
                },
                {
                    hid: 'description',
                    name: 'description',
                    content: 'Hello World'
                }
            ]
        }
    }
</script>

<style scoped>

</style>