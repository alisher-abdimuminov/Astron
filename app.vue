<script setup lang="ts">
import astron from "~/assets/images/astron.png";
import bgImage from "~/assets/images/image2.png";

useHead({
    title: "Astron"
});
useSeoMeta({
    title: "\"ASTRON\" - onlayn repetitor ",
    description: "Onlayn testlar va savol javoblar joylangan Telegram ilovasi. Foydalanish qulay, oson va bepul.",
    ogTitle: "\"ASTRON\" - onlayn repetitor ",
    ogDescription: "Onlayn repetitor telegram ilovasi",
    ogImage: astron,
    keywords: "Test, onlayn test, repetitor, onlayn repetitor, savol, savol-javob, milliy sertifikat test, reyting test, mavzulashgan test, attestatsiya test, tarix, huquq, huquqshunoslik, sinf, sinflar."
});

const users = ref(0);


onMounted(async () => {
    let response = await $fetch<{ users: number; }>("/api/users", {
        method: "POST",
    });
    users.value = response.users;
});
</script>

<template>
    <div class="w-full px-5 md:px-20 text-black bg-white">
        <header class="flex items-center justify-between h-[3rem] border-b border-gray-500/30 py-5 bg-teal-500">
            <div>
                <img class="w-40" src="~/assets/images/astron.png" alt="Astron logo">
                <!-- <p>Astron</p> -->
            </div>
        </header>
        <main class="flex items-center justify-center">
            <div class="w-full md:w-1/3 flex flex-col gap-5 my-5">
                <!-- 1 -->
                <div class="flex flex-col items-center text-center gap-3">
                    <p class="text-black font-bold md:text-3xl">
                        Tarix fanidan mavzulashgan testlar, savol-javoblar, qo'llanmalar joylangan botga ulanish
                    </p>
                    <svg class="animate-bounce w-20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <rect width="24" height="24" fill="none"></rect>
                            <path d="M12 6L12 18M12 18L17 13M12 18L7 13" stroke="#000000" stroke-linecap="round"
                                stroke-linejoin="round"></path>
                        </g>
                    </svg>
                    <a class="flex items-center gap-1 border border-blue-500 p-2 rounded-md"
                        href="https://t.me/astrontest_bot">
                        <img class="w-6" src="/Logo.png" alt="">
                        <p class="text-blue-500">@astrontest_bot</p>
                    </a>
                </div>
                <!-- 2 -->
                <div class="grid gap-2 w-full px-10">
                    <div class="border rounded-[50px] bg-white h-fit p-10">
                        <p class="bg-gray-600/10 rounded-full px-2 text-sm w-fit">
                            Ilovamiz mo'ljallangan
                        </p>
                        <ul class="mt-2">
                            <li>
                                • Kirish imtixonlariga tayyorlanish uchun;
                            </li>
                            <li>
                                • Olimpiadaga tayyorlanish uchun;
                            </li>
                            <li>
                                • Milliy sertifikatga tayyorlanish uchun;
                            </li>
                            <li>
                                • Attestatsiyaga tayyorlanish uchun.
                            </li>
                        </ul>
                    </div>

                    <div class="border rounded-[50px] bg-white h-fit p-10">
                        <p class="bg-gray-600/10 rounded-full px-2 text-sm w-fit">Ilovamiz afzalliklari</p>
                        <ul class="mt-2">
                            <li>
                                • Testlar va savollar har doim qo'lingizda, vaqt va joy cheklovlari yo'q;
                            </li>
                            <li>
                                • Yo'l xarajatlari va vaqtni tejash mumkin;
                            </li>
                            <li>
                                • Ob-havo sharoitlari ta'lim olishga xalaqit qilmaydi;
                            </li>
                            <li>
                                • Internet trafikidan tejamkor foydalanadi.
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- 3 -->
                <div class="flex items-center justify-center">
                    <img :src="bgImage" alt="">
                </div>
            </div>
        </main>

        <header class="flex items-center justify-between h-[3rem] border-b border-gray-500/30 py-5 bg-teal-500 px-5">
            <div>
                <p class="text-white">Kirishlar soni: {{ users }}</p>
            </div>
            <div>
            </div>
        </header>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');

body {
    font-family: "Ubuntu" sans-serif;
}
</style>
