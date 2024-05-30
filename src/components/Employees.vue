<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getEmployee } from "@/service/employeeService";
import type { IEmployeeState } from "@/models/IEmployeeState";
import Employee from "./Employee.vue";

const state = ref<IEmployeeState>({
  employees: [],
  pageNumber: 1,
  pageText: "andra",
});

onMounted(async () => {
  state.value.employees = await getEmployee(state.value.pageNumber);
});

const handleClick = async () => {
  state.value.pageNumber = state.value.pageNumber === 1 ? 2 : 1;
  state.value.pageText = state.value.pageText === "andra" ? "första" : "andra";
  state.value.employees = await getEmployee(state.value.pageNumber);
};
</script>
<template>
  <span>Vi jobbar på Vendre</span>
  <section class="employeeContainer">
    <Employee
      v-for="employee in state.employees"
      :key="employee.id"
      :employee="employee"
    ></Employee>
  </section>
  <button @click="handleClick">visa {{ state.pageText }} sidan</button>
</template>
<style scoped lang="scss">
.employeeContainer {
  display: grid;
  flex-direction: row;
  grid-template-columns: 1fr 1fr 1fr;
}
</style>
