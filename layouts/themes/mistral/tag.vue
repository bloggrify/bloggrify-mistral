<template>
    <Header />
    <main class="mt-14">
        <div class="mx-auto max-w-[1330px] md:p-4">
            <div class="">
                <h1 class="p-4 text-4xl font-bold">
                    Tag : {{ tag }}
                </h1>
                <div class="space-y-8">
                    <div
                        v-for="article in docs"
                        :key="article._path"
                        class="flex flex-col"
                    >
                        <div class="grid grid-cols-3 gap-4">
                            <div
                                class="col-span-2 p-4"
                                :class="article.cover ? 'col-span-2' : 'col-span-3'"
                            >
                                <NuxtLink :to="article._path">
                                    <h2 class="text-3xl font-semibold mb-2">
                                        {{ article.title }}
                                    </h2>
                                    <p class="text-gray-700 mb-4">
                                        {{ desc(article) }}
                                    </p>
                                    <div class="mb-3">
                                        <span class="text-sm text-gray-500">{{ formatDate(article.date) }}
                                            ∙
                                        </span>
                                        <span class="text-sm text-gray-500">{{
                                            article.readingTime.text
                                        }}</span>
                                    </div>
                                </NuxtLink>
                                <div class="flex flex-wrap gap-2">
                                    <NuxtLink
                                        v-for="tag in article.tags"
                                        :key="tag"
                                        class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700"
                                        :to="`/tags/${tag}`"
                                    >
                                        {{ tag }}
                                    </NuxtLink>
                                </div>
                            </div>
                            <div
                                v-if="article.cover"
                                class="col-span-1 p-4 flex justify-center items-center"
                            >
                                <NuxtLink :to="article._path" class="w-full">
                                    <NuxtImg
                                        :src="'/images/' + article.cover"
                                        :alt="article.title"
                                        class="w-full object-cover"
                                        sizes="233px sm:400px md:400px"
                                        format="webp"
                                        loading="lazy"
                                        placeholder
                                    />
                                </NuxtLink>
                            </div>
                        </div>
                        <hr>
                    </div>

                    <div class="flex items-center justify-center mt-10">
                        <NuxtLink to="/archives" class="mt-2 bg-black hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded">
                            View all posts
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <Footer />
</template>
<script setup lang="ts">
import Header from '~/components/themes/mistral/Header.vue'
import Footer from '~/components/themes/mistral/Footer.vue'
defineProps<{
    doc: any;
    docs: any;
    currentPage: number;
    total: number;
    category: string;
    tag: string;
}>()

function desc(article: any): string {
    return (
        article.description.slice(0, 200) + '...' ||
        article.body.slice(0, 200) + '...'
    )
}
</script>
