<template>
    <div v-if="sharingNetworks">
        <span class="text-sm md:text-xl"> Share </span>
        <div class="mt-4 flex flex-row gap-2">
            <SharingButtons
                :image="cover"
                :title="title"
                :styled="true"
                class-button="text-white"
            />
        </div>
    </div>
</template>
<script setup lang="ts">
const config = useAppConfig()
const sharingNetworks = config.socials?.sharing_networks || []

defineProps<{
    title: string;
    cover: string | undefined;
}>()

</script>
