<template>
    <main>
        <div class="mx-auto max-w-[1330px] md:p-4">
            <ContentList :query="query">
                <template #not-found>
                    <p>No posts found.</p>
                </template>
                <template #default="{ list }">
                    <div
                        v-for="(article, index) in list"
                        :key="article._path"
                        class="mb-2 ml-4 lg:ml-0"
                    >
                        <div
                            v-if="shouldDisplayYear(list, article.date, index)"
                            class="mb-4"
                        >
                            <span class="text-3xl font-bold">{{
                                getYear(article.date)
                            }}</span>
                        </div>
                        <NuxtLink :to="article._path" class="text-gray-700 underline decoration-dashed underline-offset-4">
                            <span>{{ article.date }}</span> &middot;
                            <span>{{ article.title }}</span>
                        </NuxtLink>
                        <span v-if="article.tags && article.tags.length > 0">&nbsp; &middot;</span>
                        <NuxtLink v-for="tag in article.tags" :key="tag" :to="`/tags/${tag}`" class="bg-gray-200 rounded-full px-1.5 py-1 text-xs font-semibold text-gray-700 mx-1.5">
                            {{ tag }}
                        </NuxtLink>
                    </div>
                </template>
            </ContentList>
        </div>
    </main>
</template>
<script setup lang="ts">
const query = {
    path: '',
    where: [{ hidden: { $ne: true }, listed: { $ne: false } }],
    sort: [{ date: -1 }],
}

function getYear(date) {
    return new Date(date).getFullYear()
}

function shouldDisplayYear(list, date, index) {
    const currentYear = getYear(date)
    const prevYear = index > 0 ? getYear(list[index - 1].date) : null
    return currentYear !== prevYear
}
</script>
