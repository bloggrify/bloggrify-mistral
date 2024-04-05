<template>
    <Header />
    <MistralHomeLayout>
        <template #posts>
            <MistralLimitedListOfPosts />
        </template>
        <template #sidebar>
            <MistralSideAuthorCard />
        </template>
    </MistralHomeLayout>
    <Footer />
</template>
<script setup lang="ts">
import Header from '~/components/themes/mistral/Header.vue'
import Footer from '~/components/themes/mistral/Footer.vue'
defineProps<{
    doc: any;
}>()
</script>
