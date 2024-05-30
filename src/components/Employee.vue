<script setup lang="ts">
import "bootstrap-icons/font/bootstrap-icons.css";
import type { IEmployee } from "@/models/IEmployee";

interface EmployeeProps {
  employee: IEmployee;
}
defineProps<EmployeeProps>();
</script>
<template>
  <article class="container">
    <img :src="employee.avatar" :alt="employee.first_name" />
    <div>{{ employee.first_name }} {{ employee.last_name }}</div>
    <a :href="'mailto:' + employee.email" class="bi bi-envelope-fill"></a>
  </article>
</template>
<style scoped lang="scss">
@font-face {
  font-family: "BasicSans";
  src: url("@/assets/fonts/Basic_Sans_Regular.otf") format("opentype");
  font-weight: normal;
  font-style: normal;
}
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & > img {
    width: 14rem;
  }
  & > div {
    margin: 0.5rem 0 0 0;
    font-family: "BasicSans" bas;
  }
}
</style>
