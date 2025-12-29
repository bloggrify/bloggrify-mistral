<template>
    <footer class="mt-auto bg-gray-100 text-gray-800 p-6">
        <div
            class="max-w-6xl mx-auto grid grid-cols-1 gap-4"
            :class="newsletterEnabled ? 'md:grid-cols-3' : 'md:grid-cols-2'"
        >
            <div>
                <h3 class="font-bold text-lg mb-4">
                    Menu
                </h3>
                <ul>
                    <li v-for="item in menu" :key="item.path">
                        <NuxtLink
                            :key="item.path"
                            :to="item.path"
                            class="hover:text-gray-400"
                        >
                            {{ item.name }}
                        </NuxtLink>
                    </li>
                </ul>
            </div>
            <div>
                <h3 class="font-bold text-lg mb-4">
                    Follow
                </h3>
                <div class="flex flex-col items-start mt-6">
                    <div class="flex mb-3 space-x-4">
                        <MistralAuthorCardSocialLinks :socials="config.socials" />
                    </div>
                </div>
            </div>
            <div v-if="newsletterEnabled">
                <h3 class="font-bold text-lg mb-4">
                    Subscribe
                </h3>
                <p class="mb-4">
                    Subscribe to get the latest posts by email.
                </p>
                <p v-if="error" class="text-red-500 text-xs italic mb-2">
                    Subscription failed. Please retry later
                </p>
                <p v-if="success" class="text-green-500 text-xs italic mb-2">
                    You have successfully subscribed
                </p>

                <form ref="subscribeForm" :action="formAction" method="post" target="_blank">
                    <input
                        v-model="email"
                        name="email"
                        autocomplete="email"
                        type="email"
                        placeholder="Your email"
                        :class="invalidEmail ? 'border-red-500' : 'border-slate-200'"
                        class="p-2 text-gray-700 w-full"
                        required
                    >
                    <button
                        class="mt-2 w-full bg-black hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
                        @click.prevent="handleSubscribe"
                    >
                        Subscribe
                    </button>
                </form>
            </div>

            <div
                class="flex mb-2 space-x-2 text-sm text-gray-600"
            >
                <div>Copyright © {{ new Date().getFullYear() }}</div>
                <div>•</div>
                &nbsp;{{ config.name }}
                <div>•</div>
                &nbsp; Powered by
                <a href="https://github.com/bloggrify/bloggrify">Bloggrify</a>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">

const config = useAppConfig()
const menu = config.menu
const newsletterEnabled = config.newsletter?.enabled
const formAction = config.newsletter?.form_action
const email = ref('')
const success = ref(false)
const error = ref(false)
const subscribeForm = ref<HTMLFormElement | null>(null)
const invalidEmail = ref(false)

async function handleSubscribe() {
    const result = await subscribe(email.value, subscribeForm.value)
    if (result.success)  {
        success.value = true
        error.value = false
        email.value = ''
    } else {
        success.value = false
        error.value = true
    }
}

</script>
