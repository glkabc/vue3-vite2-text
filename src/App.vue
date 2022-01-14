<template>
  <n-config-provider
    :locale="zhCN"
    :date-locale="dateZhCN"
    :theme="isDarkTheme ? darkTheme : null"
    :theme-overrides="themeOverrides"
  >
    <n-message-provider>
      <n-dialog-provider>
        <n-loading-bar-provider>
          <n-theme-editor>
            <router-view></router-view>
          </n-theme-editor>
        </n-loading-bar-provider>
      </n-dialog-provider>
    </n-message-provider>
    <!-- <n-global-style /> -->
  </n-config-provider>
</template>

<script lang="ts">
  import { defineComponent, computed, ComputedRef } from "vue";
  import {
    NConfigProvider,
    NLoadingBarProvider,
    NDialogProvider,
    NMessageProvider,
    NThemeEditor,
    zhCN,
    dateZhCN,
    darkTheme,
    useOsTheme,
  } from "naive-ui";
  import { themeOverrides } from "@/config/naiveUI";
  export default defineComponent({
    components: {
      NConfigProvider,
      NLoadingBarProvider,
      NDialogProvider,
      NMessageProvider,
      NThemeEditor,
    },
    setup() {
      const osThemeRef = useOsTheme();
      const name = "测试";
      const isDarkTheme: ComputedRef<boolean> = computed(() =>
        osThemeRef.value === "dark" ? true : false
      );
      return {
        NConfigProvider,
        zhCN,
        dateZhCN,
        darkTheme,
        isDarkTheme,
        themeOverrides,
      };
    },
  });
</script>

<style lang="scss">
  * {
    margin: 0;
    padding: 0;
  }
</style>
