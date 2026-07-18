<template>
    <MistralHeader />
    <main class="mt-14">
        <div class="mx-auto max-w-[1330px] md:p-4">
            <div class="p-4">
                <h1 class="text-4xl font-bold mb-8">
                    Authors
                </h1>

                <ul class="grid gap-4 sm:grid-cols-2">
                    <li
                        v-for="author in authors"
                        :key="author.username"
                    >
                        <NuxtLink
                            :to="author.username ? `/authors/${author.username}` : undefined"
                            class="flex items-start gap-4 rounded-xl border border-gray-200 p-5 h-full transition hover:border-gray-400"
                        >
                            <UAvatar
                                :src="author.avatar"
                                :alt="author.name"
                                :text="getInitials(author.name)"
                                size="xl"
                            />
                            <div class="min-w-0">
                                <div class="font-semibold text-lg">
                                    {{ author.name }}
                                </div>
                                <p
                                    v-if="author.description"
                                    class="text-gray-500 text-sm mt-1 line-clamp-3"
                                >
                                    {{ author.description }}
                                </p>
                            </div>
                        </NuxtLink>
                    </li>
                </ul>
            </div>
        </div>
    </main>
    <MistralFooter />
</template>
<script setup lang="ts">
import type { Author } from '@nuxt/schema'
import MistralHeader from '~/components/themes/mistral/MistralHeader.vue'
import MistralFooter from '~/components/themes/mistral/MistralFooter.vue'

defineProps<{
    authors: Author[];
}>()
</script>
