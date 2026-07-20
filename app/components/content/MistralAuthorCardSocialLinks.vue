<template>
    <div class="flex space-x-4">
        <NuxtLink
            v-for="link in links"
            :key="link.platform"
            :to="link.url"
            :aria-label="`Open ${link.label} profile`"
            class="text-sm text-gray-500 transition hover:text-gray-600"
            target="_blank"
            :rel="link.rel"
        >
            <span class="sr-only">{{ link.label }}</span>
            <UIcon
                :name="link.icon"
                class="w-6 h-6 transition-transform hover:scale-110"
            />
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import type { Socials } from '@nuxt/schema'

// The platform -> icon -> url mapping is not thematic: it lives in the core
// (`resolveSocialLinks` / `SOCIAL_PLATFORMS`). This component only styles the links.
const props = defineProps<{
    socials?: Socials
}>()

const links = computed(() => resolveSocialLinks(props.socials))
</script>
