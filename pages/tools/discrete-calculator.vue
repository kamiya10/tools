<script setup>
const base = ref(0);
const exponent = ref(0);
const mod = ref(1);
const mode = ref(0);
const buttontext = ref("未取模(non-mod)");
const result = computed(() => {
  if (mode.value == 0) {
    return Math.pow(base.value, exponent.value);
  } else if (mode.value == 1) {

    return modExp(base.value,exponent.value,mod.value);
  } else {
    return slove(Math.pow(base.value, exponent.value), mod.value);
  }
});

const toggleDiv = () => {
  mode.value++;
  if (mode.value == 3) {
    mode.value = 0;
  }
  if (mode.value == 0) {
    buttontext.value = "未取模"; 
  } else if (mode.value == 1) {
    buttontext.value = "取模";
  } else {
    buttontext.value = "取逆模";
  }
};

const extendedGCD = (a, b) => {
  if (b === 0) {
    return [a, 1, 0];
  }
  const [gcd, x1, y1] = extendedGCD(b, a % b);
  const x = y1;
  const y = x1 - Math.floor(a / b) * y1;
  return [gcd, x, y];
};

const modInverse = (a, m) => {
  const [gcd, x] = extendedGCD(a, m);
  if (gcd !== 1) {
    return "模逆元素不存在";
  }
  return ((x % m) + m) % m;
};

const modExp = (base, exponent, modulus)=> {
  let result = 1;
  base = base % modulus;
  while (exponent > 0) {
    if (exponent % 2 === 1) { // If exponent is odd, multiply base with result
      result = (result * base) % modulus;
    }
    exponent = Math.floor(exponent / 2); // Divide the exponent by 2
    base = (base * base) % modulus; // Square the base
  }
  return result;
}

const slove = (a, m) => {
  if (m == "" || a == "") return "wait for enter    (mod value)";

  const inverse = modInverse(a, m);
  return inverse;
};
</script>
<template>
  <div class="flex flex-col flex-[1] gap-5 p-8">
    <h1 class="text-2xl font-bold text-primary text-center py-2">離散計算器</h1>
    <div class="flex items-center gap-3 justify-center flex-col">
      <label for="base" class="text-black dark:text-white">基數</label>
      <InputNumber v-model="base" input-id="base" />
    </div>
    <div class="flex flex-col items-center gap-3 justify-center"> 
      <label for="exponent" class="text-black dark:text-white">指數</label>
      <InputNumber v-model="exponent" input-id="exponent" />
    </div>
    <div class="flex flex-col items-center gap-3 justify-center">
      <label for="ch" class="text-black dark:text-white">現在模式</label>
      <Button :label="buttontext" @click="toggleDiv"/>
    </div>
    <div v-if="mode" class="flex flex-col items-center justify-center gap-2">
      <label for="mod" class="block text-black dark:text-white">取模</label>
      <InputNumber v-model="mod" input-id="mod" class="block" />
    </div>
    <div class="flex flex-col items-center justify-center gap-1">
      <h2 class="text-black dark:text-white">Result :  {{ result }}</h2>
    </div>
  </div>
</template>

<style scoped></style>
