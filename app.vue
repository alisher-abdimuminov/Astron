<script setup lang="ts">


useHead({
    title: "Astron"
});
</script>

<template>
    <div class="w-full px-5 md:px-40 text-gray-600 bg-gray-200">
        <header class="sticky top-0 flex items-center justify-between h-[3rem] border-b border-gray-500/30 py-5 bg-gray-200">
            <div>
                <img class="w-40" src="~/assets/images/astron.png" alt="Astron logo">
                <!-- <p>Astron</p> -->
            </div>
            <div>
                <button @click="navigateTo('https://play.google.com/store/apps/details?id=uz.astrontest&pcampaignid=web_share', { external: true, open: { target: '_blank'} })" class="bg-white py-1 px-2 rounded-full shadow-md text-sm font-semibold">Yuklab olish</button>
            </div>
        </header>
        <main class="overflow-auto">
            <div class="mt-32 mb-20 p-2 flex flex-col items-center justify-center gap-10">
                <div class="text-center">
                    <p class="text-black font-bold text-5xl md:text-7xl">Yuklab oling. Bilimlaringizni mustahkamlang.</p>
                    <p>Lorem ipsum dolor sit amet consectetur.</p>
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
            </div>
        </main>
        <div class="flex justify-between pb-10">
            <div>
                <p>Astron</p>
                <p>+998889107905</p>
            </div>
            <div>
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
