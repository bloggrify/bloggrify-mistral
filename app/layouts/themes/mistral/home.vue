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
import MistralHomeLayout from '~/components/content/MistralHomeLayout.vue'
import MistralLimitedListOfPosts from '~/components/content/MistralLimitedListOfPosts.vue'
import MistralSideAuthorCard from '~/components/content/MistralSideAuthorCard.vue'

import type { PageCollectionItem } from '@nuxt/content'

defineProps<{
    doc: PageCollectionItem;
}>()
</script>
