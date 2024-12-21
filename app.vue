<script setup lang="ts">
import astron from "~/assets/images/astron.png";
import bgImage from "~/assets/images/image.png";
import bgImage2 from "~/assets/images/image2.png";

useHead({
    title: "Astron"
});
useSeoMeta({
    title: "Astron",
    ogTitle: "Astron",
    ogDescription: "Onlayn repetitor mobil ilovasi",
    ogImage: astron,
    
})

const users = ref(0);


onMounted(async () => {
    let response = await $fetch("/api/users", {
        method: "POST",
    });
    console.log(response);
});
</script>

<template>
    <div class="w-full px-5 md:px-20 text-black bg-teal-500">
        <header class="sticky top-0 flex items-center justify-between h-[3rem] border-b border-gray-500/30 py-5 bg-teal-500">
            <div>
                <img class="w-40" src="~/assets/images/astron.png" alt="Astron logo">
                <!-- <p>Astron</p> -->
            </div>
        </header>
        <main class="overflow-auto">
            <div class="my-40 p-2 flex flex-col items-center justify-center gap-10">
                <div class="text-center">
                    <p class="text-black font-bold text-5xl md:text-7xl"> "ASTRON" - onlayn repetitor mobil ilovasinining rasmiy sayti </p>
                </div>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 gap-5 w-full px-10">
                <div class="border rounded-[50px] bg-white h-fit p-10">
                    <p class="bg-gray-600/10 rounded-full px-2 text-sm w-fit">Ro'yxatdan o'tish</p>
                    <p>Buning uchun foydalanuvchidan hech qanday ma’lumot talab qilinmaydi. Shunchaki “Start” tugmasini bosing va sizga ID generatsiya qilib beriladi. Bu juda qulay va vaqtingizni tejaydi.</p>
                </div>
                <div class="border rounded-[50px] bg-white p-10">
                    <p class="bg-gray-600/10 rounded-full px-2 text-sm w-fit">Testlar</p>
                    <p>- Qog’oz testlardan afzalligi: Repetitor uchun tayyorlash, chiqarish, tarqatish, tekshirish uchun vaqt sarflash shart emas. Abiturient uchun testlardan doimiy foydalanish imkoniyati.
                        - Reyting testlar: Muayyan bir darslik bo’yicha 30 testdan iborat variant chiqarib beriladi, yani o’zingiz variant qilib test duzishingiz shart amas. Mingdan ortiq variant yaratish mumkin.</p>
                </div>
                <div class="border rounded-[50px] bg-white h-fit p-10">
                    <p class="bg-gray-600/10 rounded-full px-2 text-sm w-fit">Baholash</p>
                    <p>Test ishlangan mavzudan nechta dona belgilangani, nechtasi do’g’ri belgilanganligini foiz ko’rsatkichi va bahosi bilan (qoniqarsiz, qoniqarli, yaxshi, a’lo) ko’rish imkoniyati.
                        - Xato ishlangan variantlarning do’g’ri javoblarini ko’rish imkoniyati.</p>
                </div>
            </div>
            <div class="w-full">
                <div class="flex flex-col md:flex-row items-center justify-end">
                    <ul>
                        <p>🔸Ilovamiz mo'ljallangan:</p>
                        <li>• Kirish imtixonlariga tayyorlanish uchun.</li>
                        <li>• Olimpiadaga tayyorlanish uchun.</li>
                        <li>• Milliy sertifikatga tayyorlanish uchun.</li>
                        <li>• Attestatsiyaga tayyorlanish uchun.</li>
                    </ul>
                    <img :src="bgImage" alt="">
                </div>
                <div class="flex flex-col md:flex-row items-center">
                    <img :src="bgImage2" alt="">
                    <ul>
                        <p>🔸Ilovamiz mo'ljallangan:</p>
                        <li>• Testlar har doim qo'lingizda, vaqt va joy cheklovlari yo'q.</li>
                        <li>• Yo'l xarajatlari va vaqtni tejash mumkin.</li>
                        <li>• Ob-havo sharoitlari professional ta'lim olishga xalaqit qilmaydi.</li>
                        <li>• Internetdan foydalanish minimal miqdorda megabayt sarflaydi.</li>
                    </ul>
                </div>
            </div>
        </main>
        <div class="flex items-center justify-center pb-10 mt-20">
            <div class="flex flex-col items-center text-center gap-10">
                <p class="text-center">"Astron" - onlayn repetitor mobil ilovasini yuklab olish</p>
                <a href="https://play.google.com/store/apps/details?id=uz.astrontest&pcampaignid=web_share">
                    <picture>
                        <source srcset="https://lh3.googleusercontent.com/zWYJUppfU-TunHSxKMA6i1LRpv2POWaGCOOcvwR2h1E_R8LZ3RCiMUgbyxJDGFQqePR3G5BA3MdpUw4_BtQ_mefV36WH3tnBrV3ZkuSj=e365-pa-nu-w440 2x, https://lh3.googleusercontent.com/zWYJUppfU-TunHSxKMA6i1LRpv2POWaGCOOcvwR2h1E_R8LZ3RCiMUgbyxJDGFQqePR3G5BA3MdpUw4_BtQ_mefV36WH3tnBrV3ZkuSj=e365-pa-nu-w220">
                        <img src="https://lh3.googleusercontent.com/zWYJUppfU-TunHSxKMA6i1LRpv2POWaGCOOcvwR2h1E_R8LZ3RCiMUgbyxJDGFQqePR3G5BA3MdpUw4_BtQ_mefV36WH3tnBrV3ZkuSj=e365-pa-nu-s0" width="200" height="200" alt="Get it on Google Play" loading="lazy" fetchpriority="auto">
                    </picture>
                </a>
            </div>
        </div>
    </div>
</template>
