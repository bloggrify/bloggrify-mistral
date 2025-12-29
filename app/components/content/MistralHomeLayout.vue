<template>
    <main class="mt-14">
        <div class="mx-auto max-w-[1330px] md:p-4">
            <div class="grid grid-cols-3 md:gap-4">
                <div class="col-span-3 lg:col-span-2 md:p-4">
                    <div>
                        <h1 class="text-2xl font-bold text-gray-700 mb-8 ml-4">
                            Latest Posts
                        </h1>
                        <slot />
                    </div>

                    <slot name="posts" />
                </div>
                <div
                    class="col-span-1 p-4 hidden lg:block border-l border-gray-200 sticky top-28 h-screen overflow-y-auto"
                >
                    <slot name="sidebar" />
                </div>
            </div>
        </div>
    </main>
</template>
