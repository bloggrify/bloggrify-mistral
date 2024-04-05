<template>
    <Header />
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
                                :value="doc"
                                class="prose text-sm md:text-xl min-w-full md:p-10 mx-auto"
                            />
                        </div>
                    </div>
                </div>

                <hr class="mb-8">

                <ShareSection :title="doc.title" :cover="doc.cover" />

                <CommentSystem :id="doc.id" :nocomments="doc.nocomments" />
            </div>
        </div>
    </main>
    <Footer />
</template>
<script setup lang="ts">
import Header from '~/components/themes/mistral/Header.vue'
import Footer from '~/components/themes/mistral/Footer.vue'
import ArticleHeader from '~/components/themes/mistral/ArticleHeader.vue'
import ShareSection from '~/components/themes/mistral/ShareSection.vue'
import PageSidebar from '~/components/themes/mistral/PageSidebar.vue'

const props = defineProps<{
    doc: any;
}>()

const config = useAppConfig()

const isTocEnabled =
    props.doc?.body?.toc?.links.length &&
    props.doc?.body.toc?.links.length > 0 &&
    (config.table_of_contents || props.doc?.table_of_contents)
</script>
