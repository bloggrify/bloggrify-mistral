<template>
    <Header />
    <main>
        <div v-if="doc">
            <div class="px-4 mx-auto sm:px-6 xl:max-w-7xl xl:px-0 mt-20">
                <h1 class="text-4xl font-bold text-gray-700 mb-8 flex justify-center">
                    {{ doc.title }}
                </h1>
                <div class="text-left mx-auto">
                    <div class="flex flex-wrap lg:flex-row-reverse py-6">
                        <div class="w-full px-5 max-w-none centered-image">
                            <ContentRenderer
                                id="nuxtContent"
                                :value="doc"
                                class="prose text-sm md:text-xl min-w-full md:p-10 mx-auto"
                            />
                        </div>
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
}>()

const config = useAppConfig()
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
