<template>
    <div
        class="mx-auto max-w-[1330px] md:p-4 items-center justify-center"
        :class="clazz"
    >
        <h1 class="text-4xl font-bold text-gray-700 mb-8 flex justify-center">
            <slot />
        </h1>
    </div>
</template>
<script setup lang="ts">
defineProps({
    clazz: {
        type: String,
        default: '',
    },
})
</script>
