<script setup lang="ts">
import type { IEmployee } from "@/models/IEmployee";

interface EmployeeProps {
  employee: IEmployee;
}
defineProps<EmployeeProps>();
</script>
<template>
  <article>
    <img :src="employee.avatar" :alt="employee.first_name" />
    <div>{{ employee.first_name }} {{ employee.last_name }}</div>
    <a :href="'mailto:' + employee.email">Email</a>
  </article>
</template>
<style scoped lang="scss"></style>
