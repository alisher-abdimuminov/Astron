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
    let response = await $fetch<{ users: number }>("/api/users", {
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
        <main class="overflow-auto">
            <div class="my-20 p-2 flex flex-col items-center justify-center gap-10">
                <div class="flex flex-col items-center text-center gap-10">
                    <img :src="bgImage" alt="">
                    <p class="text-black font-bold text-5xl md:text-7xl"> "ASTRON" - onlayn repetitor mobil ilovasining rasmiy sayti </p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-2 w-full px-10">
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
                    <p class="bg-gray-600/10 rounded-full px-2 text-sm w-fit">Bizda mavjud</p>
                    <ul class="mt-2">
                        <p>Testlar</p>
                        <li>
                            •  Mavzulshtirilgan testlar: har bir mavzu bo'yicha maksimal darajada ma'lumotlar qamrab olingan testlar;
                        </li>
                        <li>
                            • Reyting testlar: har bir darslik bo'yicha aralash tartibda beriladigan 30 talik testlar.
                        </li>
                    </ul>
                    <ul class="mt-2">
                        <p>Savol-javob</p>
                        <li>
                            • Mavzulashtirilgan savollar: har bir mavzu bo'yicha maksimal darajada ma'lumotlar qamrab olingan savollar javoblari bilan;
                        </li>
                        <li>
                            • Reyting savollar: har bir darslik bo'yicha aralash tartibda beriladigan 30 talik savollar-javoblari bilan.
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
                            • Ob-havo sharoitlari professional ta'lim olishga xalaqit qilmaydi;
                        </li>
                        <li>
                            • Internetdan foydalanish minimal miqdorda megabayt sarflaydi.
                        </li>
                    </ul>
                </div>
            </div>
        </main>
        <div class="flex items-center justify-center pb-10 mt-20">
            <div class="flex flex-col items-center text-center gap-10">
                <p class="text-center text-3xl flex flex-col">
                    <span>"ASTRON-onlayn repetitor" ilovasiga ulanish uchun</span>
                    <span>quyidagi tugmaga bosing!!!</span>
                </p>
                <a class="flex items-center gap-1" href="https://t.me/astrontest_bot">
                    <img class="w-6" src="/Logo.png" alt="">
                    <p class="hover:text-blue-500">@astrontest_bot</p>
                </a>
            </div>
        </div>
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
