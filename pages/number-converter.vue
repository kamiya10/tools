<script setup lang="ts">
const options = [
  {
    label: "Binary",
    value: 2,
  },
  {
    label: "Octal",
    value: 8,
  },
  {
    label: "Decimal",
    value: 10,
  },
  {
    label: "Hexadecimal",
    value: 16,
  },
  {
    label: "Quadravigesimal",
    value: 24,
  },
  {
    label: "Duotrigesimal",
    value: 32,
  },
  {
    label: "Hexatrigesimal",
    value: 36,
  },
];

const from = ref(10);
const to = ref(2);
const fromValue = ref("13");
const toValue = ref("1101");
const isFromValueInvalid = ref(false);
const isToValueInvalid = ref(false);

const parseInt = (value: string, radix: number): number => {
  let pattern = "";

  if (radix < 2 || radix > 36) {
    throw new Error("Radix must be between 2 and 36.");
  }

  if (radix < 10) {
    pattern += `0-${radix - 1}`;
  } else {
    pattern += `0-9`;
  }

  if (radix > 10) {
    pattern += `a-${String.fromCharCode(96 + radix - 10)}`;
  }

  if (!RegExp(`^[${pattern}]*$`, "i").test(value)) {
    throw new Error("Error parsing number.");
  }

  return Number.parseInt(value, radix);
};

const updateFrom = () => {
  try {
    let newFromValue = parseInt(toValue.value, to.value)
      .toString(from.value)
      .toUpperCase();

    if (newFromValue == "NAN") {
      newFromValue = "";
    }

    fromValue.value = newFromValue;
    isToValueInvalid.value = false;
  } catch (error) {
    isToValueInvalid.value = true;
  }
};

const updateTo = () => {
  try {
    let newToValue = parseInt(fromValue.value, from.value)
      .toString(to.value)
      .toUpperCase();

    if (newToValue == "NAN") {
      newToValue = "";
    }

    toValue.value = newToValue;
    isFromValueInvalid.value = false;
  } catch (error) {
    isFromValueInvalid.value = true;
  }
};
</script>

<template>
  <div class="flex flex-col gap-4 p-8">
    <h1 class="text-2xl font-bold text-primary text-center py-2">
      Number Converter
    </h1>
    <div class="flex flex-col sm:flex-row justify-center gap-4">
      <div class="flex flex-col gap-2">
        <div class="grid grid-cols-[3fr_auto_1fr] gap-2 items-center">
          <Dropdown
            v-model="from"
            :options="options"
            option-label="label"
            option-value="value"
            placeholder="Custom"
            @change="updateTo"
          />
          <div class="text-surface-700 dark:text-white/60">Base</div>
          <InputNumber
            v-model="from"
            input-class="w-8 text-right"
            :min="2"
            :max="36"
            @update:modelValue="updateTo"
          />
        </div>
        <Textarea
          v-model="fromValue"
          class="text-lg tabular-nums"
          autoResize
          :rows="5"
          :cols="28"
          :invalid="isFromValueInvalid"
          :inputmode="from < 11 ? 'numeric' : undefined"
          @input="updateTo"
        />
      </div>
      <div class="flex flex-col items-center justify-center">
        <MaterialSymbol
          class="sm:-rotate-90 text-primary"
          icon="arrow_downward_alt"
        />
      </div>
      <div class="flex flex-col gap-2">
        <div class="grid grid-cols-[3fr_auto_1fr] gap-2 items-center">
          <Dropdown
            v-model="to"
            :options="options"
            option-label="label"
            option-value="value"
            placeholder="Custom"
            @change="updateTo"
          />
          <div class="text-surface-700 dark:text-white/60">Base</div>
          <InputNumber
            v-model="to"
            input-class="w-8 text-right"
            :min="2"
            :max="36"
            @update:modelValue="updateTo"
          />
        </div>
        <Textarea
          v-model="toValue"
          class="text-lg tabular-nums"
          autoResize
          :rows="5"
          :cols="28"
          :invalid="isToValueInvalid"
          :inputmode="to < 11 ? 'numeric' : undefined"
          @input="updateFrom"
        />
      </div>
    </div>
  </div>
</template>
