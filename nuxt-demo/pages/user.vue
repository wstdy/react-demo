<template>
    <div class="user">
        <div>父路由</div>
        <nuxt-child></nuxt-child>
    </div>
</template>

<script>
export default {
    name: 'user',
    data() {
        return {
            data: 'user'
        };
    }
}
</script>