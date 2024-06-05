<script setup lang="ts">
import type { editor as monaco } from "monaco-editor";

const code = ref("");
const isEditorReady = ref(false);
let editor: monaco.IStandaloneCodeEditor;

const format = () => {
  if (!editor) {
    return;
  }

  editor.getAction("editor.action.formatDocument")?.run();
};

const clear = () => {
  code.value = "";
};

const onEditorLoad = (e: monaco.IStandaloneCodeEditor) => {
  editor = e;
  isEditorReady.value = true;
};
</script>

<template>
  <div class="flex flex-col flex-[1] gap-4 p-8">
    <h1 class="text-2xl font-bold text-primary text-center py-2">
      JSON Formatter
    </h1>
    <div class="flex gap-4">
      <Button
        label="Format"
        class="gap-2"
        :disabled="!isEditorReady"
        @click="format"
      >
        <template #icon>
          <MaterialSymbol icon="format_paint" />
        </template>
      </Button>
      <Button
        label="Clear"
        severity="danger"
        class="gap-2"
        :disabled="!isEditorReady"
        @click="clear"
      >
        <template #icon>
          <MaterialSymbol icon="delete" />
        </template>
      </Button>
    </div>
    <MonacoEditor
      v-model="code"
      lang="json"
      class="flex-[1] rounded-lg overflow-hidden"
      :options="{
        theme: 'vs-dark',
        smoothScrolling: true,
        minimap: { enabled: false },
      }"
      @load="onEditorLoad"
    />
  </div>
</template>
