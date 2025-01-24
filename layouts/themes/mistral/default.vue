<template>
    <MistralHeader />
    <main>
        <div v-if="doc">
            <div
                v-if="doc.cover"
                class="md:flex justify-center mt-24 hidden lg:h-[500px]"
            >
                <NuxtImg
                    :src="'/images/' + doc.cover"
                    :alt="doc.title"
                    fit="cover"
                    placeholder
                />
            </div>
            <div class="px-4 mx-auto sm:px-6 xl:max-w-7xl xl:px-0 mt-10">
                <ArticleHeader :article="doc" />

                <div class="text-left mx-auto">
                    <div class="flex flex-wrap lg:flex-row-reverse py-12">
                        <div v-if="isTocEnabled" class="w-full lg:w-1/4 px-5">
                            <PageSidebar :toc="doc.body.toc.links" />
                        </div>

                        <div
                            class="w-full px-5 max-w-none centered-image"
                            :class="isTocEnabled ? 'lg:w-3/4 ' : ''"
                        >
                            <ContentRenderer
                                id="nuxtContent"
                                :value="doc"
                                class="prose text-sm md:text-xl min-w-full md:p-10 mx-auto"
                            />
                        </div>
                    </div>
                </div>

                <div class="flex items-center justify-center mb-6">
                    <NuxtLink v-for="tag in doc.tags" :key="tag" :to="`/tags/${tag}`" class="bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mx-2">
                        {{ tag }}
                    </NuxtLink>
                </div>

                <hr class="mb-8">

                <ShareSection :title="doc.title" :cover="doc.cover" />

                <CommentSystem :id="doc.id" :nocomments="doc.nocomments" />
            </div>
        </div>
    </main>
    <MistralFooter />
</template>
<script setup lang="ts">
import ArticleHeader from '~/components/themes/mistral/ArticleHeader.vue'
import ShareSection from '~/components/themes/mistral/ShareSection.vue'
import PageSidebar from '~/components/themes/mistral/PageSidebar.vue'
import MistralHeader from '~/components/themes/mistral/MistralHeader.vue'
import MistralFooter from '~/components/themes/mistral/MistralFooter.vue'

const props = defineProps<{
    doc: any;
}>()

const config = useAppConfig()

const isTocEnabled =
    props.doc?.body?.toc?.links.length &&
    props.doc?.body.toc?.links.length > 0 &&
    (config.table_of_contents || props.doc?.table_of_contents)
</script>
<style lang="scss">
.prose {
    a {
        @apply underline underline-offset-2 decoration-dotted;
    }

    h1 a,
    h2 a,
    h3 a,
    h4 a,
    h5 a,
    h6 a {
        @apply no-underline ;
    }
}

</style>
