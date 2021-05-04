<template>
  <div
    class="h-fit-10--5 bg-gray-50 rounded-lg px-6 py-4 overflow-y-auto overflow-x-hidden scrollbar-thumb-rounded scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
  >
    <div class=" flex items-center justify-center h-full">
      <div class="bg-white rounded-lg shadow-md p-4 w-full md:w-1/2 lg:w-2/5">
        <div class="relative mb-4">
          <label
            for="password"
            class="block mb-1 text-gray-600 font-semibold text-md"
            >New Password</label
          >
          <input
            v-model.trim="validate.password.$model"
            id="password"
            type="text"
            placeholder=""
            class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
            :class="
              validate.password.$error
                ? 'border-red-400 focus:ring-red-300'
                : 'focus:ring-indigo-300'
            "
          />
          <template v-if="validate.password.$error">
            <div
              v-for="(error, index) in validate.password.$errors"
              :key="index"
              class="text-red-600 text-xs mt-1"
            >
              {{ error.$message }}
            </div>
          </template>
        </div>
        <div class="relative mb-4">
          <label
            for="confirmpass"
            class="block mb-1 text-gray-600 font-semibold text-md"
            >Confirm New Password</label
          >
          <input
            v-model.trim="validate.confirmPassword.$model"
            @keyup.enter="submit"
            id="confirmpass"
            type="password"
            placeholder=""
            class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
            :class="
              validate.confirmPassword.$error
                ? 'border-red-400 focus:ring-red-300'
                : 'focus:ring-indigo-300'
            "
          />
          <template v-if="validate.confirmPassword.$error">
            <div
              v-for="(error, index) in validate.confirmPassword.$errors"
              :key="index"
              class="text-red-600 text-xs mt-1"
            >
              {{ error.$message }}
            </div>
          </template>
        </div>
        <div>
          <button
            @click="submit"
            :disabled="iconLoading"
            class="disabled:bg-indigo-400 disabled:cursor-not-allowed w-full flex justify-center items-center bg-indigo-800 rounded-lg font-light text-white px-4 py-2 tracking-wider hover:bg-indigo-700 focus:outline-none"
          >
            Submit
            <span v-if="iconLoading" class="ml-2 w-6 h-6"
              ><svg
                width="25"
                viewBox="-2 -2 42 42"
                xmlns="http://www.w3.org/2000/svg"
                stroke="#FFFFFF"
                class="w-full h-full"
              >
                <g fill="none" fill-rule="evenodd">
                  <g transform="translate(1 1)" stroke-width="4">
                    <circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle>
                    <path d="M36 18c0-9.94-8.06-18-18-18">
                      <animateTransform
                        attributeName="transform"
                        type="rotate"
                        from="0 18 18"
                        to="360 18 18"
                        dur="1s"
                        repeatCount="indefinite"
                      ></animateTransform>
                    </path>
                  </g>
                </g></svg
            ></span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, toRefs } from "vue";
import {
  required,
  minLength,
  maxLength,
  email,
  url,
  integer,
  sameAs
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import Toastify from "toastify-js";

export default {
  setup() {
    const formData = reactive({
      password: "",
      confirmPassword: "",
    });
    const rules = {
      password: {
        required,
      },
      confirmPassword: {
        required,
      },
    };

    const validate = useVuelidate(rules, toRefs(formData));

    return {
      validate,
      formData,
    };
  },

  data: function () {
    return{
      iconLoading: false,
    }
  },

  methods: {
    submit() {
      this.iconLoading = true;

      if (this.formData.password !== this.formData.confirmPassword) {
        this.iconLoading = false;
        Toastify({
            text: "Confirm Password tidak sama",
            duration: 3000,
            newWindow: true,
            close: false,
            className: "danger-notif",
            stopOnFocus: true
        }).showToast();
      }
    }
  }
};
</script>

<style>
</style>