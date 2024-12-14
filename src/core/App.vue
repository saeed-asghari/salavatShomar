<template>
  <div class="touchable-area" @mouseup="handleTouchEnd" @mouseleave="handleTouchEnd" @touchstart="handleTouchStart"
  @touchend="handleTouchEnd">
  <div>تعداد دور :{{ period }}</div>
    <p class="counter">صلوات : {{ counter }}</p>
    <button class="reset-button" @click="resetCounter">پاک کردن</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";


const counter = ref(0);
const isPressed = ref(false);
const period = ref(0);
const handleTouchStart = () => {
  isPressed.value = true;
  counter.value++;
  if (counter.value % 100 === 0) {
    period.value++;
  }
};

const handleTouchEnd = () => {
  isPressed.value = false;
};
const resetCounter = () => {
  counter.value = 0;
  period.value =0;
};

onMounted(() => {
  if (window.Telegram?.WebApp) {
    const tg = window.Telegram.WebApp;

    tg.expand();

    const isDarkTheme = tg.themeParams?.theme === "dark";
    document.body.style.backgroundColor = isDarkTheme ? "#1c1c1c" : "#ffffff";
    document.body.style.color = isDarkTheme ? "#ffffff" : "#000000";
  }
});
</script>

<style scoped>
.touchable-area {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100dvh;
  background-color: #f0f0f0;
  transition: background-color 0.2s ease, transform 0.1s ease;
  user-select: none;
  touch-action: manipulation;
  position: fixed;
  top: 0;
  left: 0;
}

.touchable-area:active {
  background-color: #f0f0f0;
  transform: scale(0.98);
}

.counter {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;
}

.reset-button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #0088cc;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.reset-button:hover {
  background-color: #005f99;
}

.reset-button:active {
  background-color: #004070;
  transform: scale(0.95);
}
</style>