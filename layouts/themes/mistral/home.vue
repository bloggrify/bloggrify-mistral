<template>
    <MistralHeader />
    <MistralHomeLayout>
        <template #posts>
            <MistralLimitedListOfPosts />
        </template>
        <template #sidebar>
            <MistralSideAuthorCard />
        </template>
    </MistralHomeLayout>
    <MistralFooter />
</template>
<script setup lang="ts">
import MistralHeader from '~/components/themes/mistral/MistralHeader.vue'
import MistralFooter from '~/components/themes/mistral/MistralFooter.vue'
defineProps<{
    doc: any;
}>()
</script>
