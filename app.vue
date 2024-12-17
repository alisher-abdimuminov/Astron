<script setup lang="ts">
import bugFixingImg from "assets/images/bug_fixing.jpg";
import { LucideTrafficCone } from "lucide-vue-next";

console.log(bugFixingImg);

</script>

<template>
  <div class="h-screen w-full flex flex-col items-center justify-center gap-5 bg-teal-500 p-5">
    <p class="text-center text-black font-bold text-3xl">Saytda texnik ishlar olib borilmoqda...</p>
    <LucideTrafficCone class="text-orange-500" :size="60" />
  </div>
</template>
