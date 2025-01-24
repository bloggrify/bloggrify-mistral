<template>
    <div class="w-[110px] h-[110px] border border-gray-300 rounded-full flex items-center justify-center p-1">
        <NuxtImg
            v-if="author.avatar"
            :src="author.avatar"
            :alt="author.name"
            class="rounded-full border border-gray-300"
            width="100"
            height="100"
        />
    </div>
    <div class="font-semibold text-xl mt-2">
        {{ author.name }}
    </div>
    <div class="text-gray-500 text-sm mt-2">
        {{ author.description }}
    </div>
    <div v-if="author.socials" class="mt-4">
        <div class="flex mb-3 space-x-4">
            <MistralAuthorCardSocialLinks :socials="author.socials" />
        </div>
    </div>
</template>
<script setup lang="ts">
import {findAuthor} from '#imports'

const config = useAppConfig()

const author = findAuthor()

</script>
