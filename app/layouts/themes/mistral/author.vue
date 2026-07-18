<template>
    <MistralHeader />
    <main class="mt-14">
        <div class="mx-auto max-w-[1330px] md:p-4">
            <div class="p-4 flex flex-col items-center text-center">
                <div
                    v-if="author.avatar"
                    class="w-[110px] h-[110px] border border-gray-300 rounded-full flex items-center justify-center p-1"
                >
                    <NuxtImg
                        :src="author.avatar"
                        :alt="`Avatar of ${author.name}`"
                        class="rounded-full border border-gray-300"
                        width="100"
                        height="100"
                    />
                </div>

                <h1 class="text-4xl font-bold mt-4">
                    {{ author.name }}
                </h1>

                <p v-if="author.description" class="text-gray-500 mt-2 max-w-2xl">
                    {{ author.description }}
                </p>

                <div v-if="author.socials" class="flex mt-4 space-x-4">
                    <MistralAuthorCardSocialLinks :socials="author.socials" />
                </div>
            </div>

            <MinimalistListing
                :title="`Posts by ${author.name}`"
                :author="author.username"
                format="list"
            />
        </div>
    </main>
    <MistralFooter />
</template>
<script setup lang="ts">
import type { Author } from '@nuxt/schema'
import MistralHeader from '~/components/themes/mistral/MistralHeader.vue'
import MistralFooter from '~/components/themes/mistral/MistralFooter.vue'

defineProps<{
    author: Author;
}>()
</script>
