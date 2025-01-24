<template>
    <MistralHeader />
    <main>
        <div>
            <div class="px-4 mx-auto sm:px-6 xl:max-w-7xl xl:px-0 mt-20">
                <h1 class="text-4xl font-bold text-gray-700 mb-8 flex justify-center">
                    Archives
                </h1>
                <div class="text-left mx-auto">
                    <div class="flex flex-wrap lg:flex-row-reverse py-6">
                        <div class="w-full px-5 max-w-none centered-image">
                            <MistralFullListOfPosts />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <MistralFooter />
</template>
<script setup lang="ts">
import MistralHeader from '~/components/themes/mistral/MistralHeader.vue'
import MistralFooter from '~/components/themes/mistral/MistralFooter.vue'
</script>
