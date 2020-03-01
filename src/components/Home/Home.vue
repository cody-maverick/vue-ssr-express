<template>
    <div>
        <h3>Home</h3>
    </div>
</template>

<script>
    export default {
        name: "Home",
        metaInfo: {
            title: 'Home',
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