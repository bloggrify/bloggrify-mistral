<template>
    <main>
        <div class="mx-auto max-w-[1330px] md:p-4">
            <div
                v-for="(article, index) in docs"
                :key="article.path"
                class="mb-2 ml-4 lg:ml-0"
            >
                <div
                    v-if="shouldDisplayYear(docs, article.date, index)"
                    class="mb-4"
                >
                    <span class="text-3xl font-bold">{{
                        getYear(article.date)
                    }}</span>
                </div>
                <NuxtLink :to="article.path" class="text-gray-700 underline decoration-dashed underline-offset-4">
                    <span>{{ article.date }}</span> &middot;
                    <span>{{ article.title }}</span>
                </NuxtLink>
                <span v-if="article.tags && article.tags.length > 0">&nbsp; &middot;</span>
                <NuxtLink
                    v-for="tag in article.tags"
                    :key="tag"
                    :to="`/tags/${tag}`"
                    class="bg-gray-200 rounded-full px-1.5 py-1 text-xs font-semibold text-gray-700 mx-1.5">
                    {{ tag }}
                </NuxtLink>
            </div>
        </div>
    </main>
</template>
<script setup lang="ts">
// Use the composable to fetch all content without pagination
const { docs } = await useContentListing({
    paginated: false,
    key: 'mistral-full-list'
})

function getYear(date) {
    return new Date(date).getFullYear()
}

function shouldDisplayYear(list, date, index) {
    const currentYear = getYear(date)
    const prevYear = index > 0 ? getYear(list[index - 1].date) : null
    return currentYear !== prevYear
}
</script>
