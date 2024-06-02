<script setup lang="ts">
import { onMounted, ref } from "vue";
import { getEmployee } from "@/service/employeeService";
import type { IEmployeeState } from "@/models/IEmployeeState";
import Employee from "./Employee.vue";

const state = ref<IEmployeeState>({
  employees: [],
  pageNumber: 1,
  buttonText: "Nästa",
});

onMounted(async () => {
  state.value.employees = await getEmployee(state.value.pageNumber);
});

const handleClick = async () => {
  state.value.pageNumber = state.value.pageNumber === 1 ? 2 : 1;
  state.value.buttonText =
    state.value.buttonText === "Nästa" ? "Förra" : "Nästa";
  state.value.employees = await getEmployee(state.value.pageNumber);
};
</script>
<template>
  <section class="main-container">
    <div class="main-container__header">
      <span class="main-container__header--text">Vi jobbar på Vendre</span>
    </div>
    <div class="main-container__employee">
      <Employee
        v-for="employee in state.employees"
        :key="employee.id"
        :employee="employee"
      ></Employee>
    </div>
    <button @click="handleClick">{{ state.buttonText }} sidan</button>
  </section>
</template>
<style scoped lang="scss">
@use "./../assets/mixins" as m;
@import "./../assets/_variables.scss";
@import "./../assets/mixins";
.main-container {
  text-align: center;
  margin-bottom: 60px;
  margin-top: 60px;
  &__header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 40px;
    &--text {
      font-size: 35px;
      font-family: "open sans", sans-serif;
      font-weight: bold;
      letter-spacing: -0.1px;
    }
  }
  &__employee {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    row-gap: 36px;
    @include m.for-size(tablet) {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      margin-left: auto;
      margin-right: auto;
      width: calc(260px * 2);
    }
    @include m.for-size(desktop) {
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      margin-left: auto;
      margin-right: auto;
      width: calc(260px * 3);
    }
  }

  & > button {
    color: $block-bg-color;
    background-color: $button-bg-color;
    border-radius: 12px;
    cursor: pointer;
    display: inline-block;
    font-size: 16px;
    font-weight: 600;
    line-height: 1.3;
    padding: 16px 20px;
    text-align: center;
    margin-top: 48px;
    min-width: 220px;
    border: 0;
  }
}
</style>
