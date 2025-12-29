<template>
            <div class="space-y-8">
                <div
                    v-for="article in docs"
                    :key="article.path"
                    class="flex flex-col"
                >
                    <div class="grid grid-cols-3 gap-4">
                        <div
                            class="col-span-2 p-4"
                            :class="article.cover ? 'col-span-2' : 'col-span-3'"
                        >
                            <NuxtLink :to="article.path">
                                <h2 class="text-3xl font-bold mb-2">
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
                            <NuxtLink :to="article.path" class="w-full">
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
                    <USeparator />
                </div>

                <div class="flex items-center justify-center mt-10">
                    <NuxtLink to="/archives" class="mt-2 bg-black hover:bg-slate-800 text-white font-semibold py-2 px-4 rounded">
                        View all posts
                    </NuxtLink>
                </div>
            </div>
</template>
<script setup lang="ts">
import type { PageCollectionItem } from '@nuxt/content'

function desc(article: PageCollectionItem): string {
    return (
        article.description?.slice(0, 200) + '...' || ''
    )
}

const {itemsPerPage, currentPage} = usePagination()

// Helper function to build the base query with all filters
const buildQuery = () => {
    let query = queryCollection('page')

    // Filtres de visibilité
    query = query
        .orWhere(query => query.where('listed', '=', true).where('listed', 'IS NULL'))
        .orWhere(query => query.where('hidden', '=', false).where('hidden', 'IS NULL'))
        .orWhere(query => query.where('draft', '=', false).where('draft', 'IS NULL'))

    return query
}

const numberOfPostsPerPage = itemsPerPage.value

const { data: docs } = useAsyncData("mistral-limited-list", () => {
    return buildQuery()
        .order('date', 'DESC')
        .skip((currentPage.value - 1) * numberOfPostsPerPage)
        .limit(numberOfPostsPerPage)
        .all()
})
</script>
