<script setup lang="ts">
import "bootstrap-icons/font/bootstrap-icons.css";
import type { IEmployee } from "@/models/IEmployee";
import { ref } from "vue";

interface EmployeeProps {
  employee: IEmployee;
}
defineProps<EmployeeProps>();

const state = ref({
  hover: false,
});
</script>
<template>
  <a
    class="employeeContainer"
    @mouseover="state.hover = true"
    @mouseleave="state.hover = false"
  >
    <figure :class="{ hover: state.hover }">
      <img :src="employee.avatar" :alt="employee.first_name" />
    </figure>
    <div :class="{ changeNameColor: state.hover }">
      {{ employee.first_name }} {{ employee.last_name }}
    </div>
    <a :href="'mailto:' + employee.email">
      <svg
        class="svg-inline--fa fa-envelope text-lg"
        aria-hidden="true"
        focusable="false"
        data-prefix="fas"
        data-icon="envelope"
        role="img"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
        data-fa-i2svg=""
      >
        <path
          fill="currentColor"
          d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"
        ></path>
      </svg>
    </a>
  </a>
</template>
<style scoped lang="scss">
@import "./../assets/_variables.scss";

.employeeContainer {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  width: 243px;
  height: 282px;
  padding: 0 16px;
  & > figure {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 226px;
    height: 226px;
    border: 2px solid $block-bg-color;
    border-radius: 50%;
    margin: 0;
    & > img {
      width: 98%;
      height: 98%;
      object-fit: cover;
      border-radius: 50%;
    }
  }
  & > div {
    margin: 0.5rem 0 0.5rem 0;
    font-family: sans-serif;
    color: $block-link-color;
  }
  & > a {
    width: 21px;
    height: 21px;
    color: black;
    &:hover {
      color: $button-bg-color;
    }
  }

  .hover {
    border: 2px solid $button-bg-color;
  }

  .changeNameColor {
    color: #5233ed96;
  }
}
</style>
