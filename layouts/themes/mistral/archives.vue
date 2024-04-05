<template>
    <Header />
    <MistralCenteredTitle clazz="mt-14">
        Archives
    </MistralCenteredTitle>
    <MistralFullListOfPosts />
    <Footer />
</template>
<script setup lang="ts">
import Header from '~/components/themes/mistral/Header.vue'
import Footer from '~/components/themes/mistral/Footer.vue'
defineProps<{
    doc: any;
}>()
</script>
