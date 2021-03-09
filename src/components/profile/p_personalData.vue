<template>
  <div class="h-full">
    <div class="grid grid-cols-12 gap-4">
      <div class="col-span-8 h-fit-10--5">
        <div
          class="h-full pl-1 pr-6 overflow-x-hidden overflow-y-scroll scrollbar-thumb-rounded scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100"
        >
        <div ref="tab1" v-show="tabIndicator[0].isActive">
          <div class="relative my-5 border-b-2 border-indigo-200">
            <span
              class="text-sm absolute -top-2.5 left-5 bg-white px-2 font-medium tracking-wider uppercase text-indigo-400"
              >General Information</span
            >
          </div>
          <div class="grid grid-cols-12 gap-4">
            <div class="col-span-12">
              <label
                for="namavendor"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Company Name<span class="text-red-400">&nbsp;*</span></label
              >
              <input
                id="namavendor"
                v-model.trim="validateTab1.namavendor.$model"
                type="text"
                autocomplete="nope"
                name="namavendor"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  validateTab1.namavendor.$error
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="validateTab1.namavendor.$error">
                <div
                  v-for="(error, index) in validateTab1.namavendor.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-6">
              <label
                for="brand"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Brand(s) Sold / Handle</label
              >
              <input
                id="brand"
                v-model.trim="validateTab1.brand.$model"
                type="text"
                autocomplete="nope"
                name="brand"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
              />
            </div>
            <div class="col-span-6">
              <label
                for="website"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Website URL</label
              >
              <input
                id="website"
                v-model.trim="validateTab1.website.$model"
                type="text"
                autocomplete="nope"
                name="website"
                placeholder="http://mycompany.com"
                class="border placeholder- border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  validateTab1.website.$error
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="validateTab1.website.$error">
                <div
                  v-for="(error, index) in validateTab1.website.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div
              class="col-span-12 relative mt-2 mb-0 border-b-2 border-indigo-200"
            ></div>
            <div class="col-span-12">
              <label
                for="address"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Address<span class="text-red-400">&nbsp;*</span></label
              >
              <textarea
                id="address"
                rows="2"
                v-model.trim="validateTab1.address.$model"
                autocomplete="nope"
                name="address"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  validateTab1.address.$error
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              ></textarea>
              <template v-if="validateTab1.address.$error">
                <div
                  v-for="(error, index) in validateTab1.address.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-0"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-4">
              <label
                for="city_code"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >City / Postal Code<span class="text-red-400"
                  >&nbsp;*</span
                ></label
              >
              <input
                id="city_code"
                v-model.trim="validateTab1.city_code.$model"
                type="text"
                autocomplete="nope"
                name="city_code"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  validateTab1.city_code.$error
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="validateTab1.city_code.$error">
                <div
                  v-for="(error, index) in validateTab1.city_code.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-4">
              <label
                for="province"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >State / Province<span class="text-red-400">&nbsp;*</span></label
              >
              <input
                id="province"
                v-model.trim="validateTab1.province.$model"
                type="text"
                autocomplete="nope"
                name="province"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  validateTab1.province.$error
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="validateTab1.province.$error">
                <div
                  v-for="(error, index) in validateTab1.province.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-4">
              <label
                for="country"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Country<span class="text-red-400">&nbsp;*</span></label
              >
              <input
                id="country"
                v-model.trim="validateTab1.country.$model"
                type="text"
                autocomplete="nope"
                name="country"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  validateTab1.country.$error
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="validateTab1.country.$error">
                <div
                  v-for="(error, index) in validateTab1.country.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-6">
              <label
                for="phone"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Phone<span class="text-red-400">&nbsp;*</span></label
              >
              <input
                id="phone"
                v-model.trim="validateTab1.phone.$model"
                type="text"
                autocomplete="nope"
                name="phone"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  validateTab1.phone.$error
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="validateTab1.phone.$error">
                <div
                  v-for="(error, index) in validateTab1.phone.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-6">
              <label
                for="mail"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >E-Mail<span class="text-red-400">&nbsp;*</span></label
              >
              <input
                id="mail"
                v-model.trim="validateTab1.mail.$model"
                type="text"
                autocomplete="nope"
                name="mail"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  validateTab1.mail.$error
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="validateTab1.mail.$error">
                <div
                  v-for="(error, index) in validateTab1.mail.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
          </div>
          <div class="mt-8">
            <div class="relative my-5 border-b-2 border-indigo-200">
              <span
                class="text-sm absolute -top-2.5 left-5 bg-white px-2 font-medium tracking-wider uppercase text-indigo-400"
                >head office</span
              >
            </div>
            <div class="grid grid-cols-12 gap-4 mb-4">
              <div class="col-span-12">
                <label class="flex items-center space-x-3 cursor-pointer">
                  <input
                    @change="toggleCheckbox"
                    type="checkbox"
                    name="same-as-above"
                    v-model="formData.sameAsAbove"
                    class="h-5 w-5 cursor-pointer form-tick appearance-none text-indigo-500 border border-gray-300 rounded-md checked:bg-indigo-700 checked:border-transparent"
                  />
                  <span class="text-gray-600 text-sm font-medium"
                    >Same as Above?</span
                  >
                </label>
              </div>
              <div class="col-span-12">
                <label
                  for="ho_address"
                  class="w-full flex text-sm mb-2 font-normal text-gray-600"
                  >Address<span class="text-red-400">&nbsp;*</span></label
                >
                <textarea
                  id="ho_address"
                  rows="2"
                  v-model.trim="validateTab1.ho_address.$model"
                  name="ho_address"
                  class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                  :class="
                    validateTab1.ho_address.$error
                      ? 'border-red-400 focus:ring-red-300'
                      : 'focus:ring-indigo-300'
                  "
                ></textarea>
                <template v-if="validateTab1.ho_address.$error">
                  <div
                    v-for="(error, index) in validateTab1.ho_address.$errors"
                    :key="index"
                    class="text-red-600 text-xs mt-0"
                  >
                    {{ error.$message }}
                  </div>
                </template>
              </div>
              <div class="col-span-4">
                <label
                  for="ho_city_code"
                  class="w-full flex text-sm mb-2 font-normal text-gray-600"
                  >City / Postal Code<span class="text-red-400"
                    >&nbsp;*</span
                  ></label
                >
                <input
                  id="ho_city_code"
                  v-model.trim="validateTab1.ho_city_code.$model"
                  type="text"
                  autocomplete="asd"
                  name="ho_city_code"
                  class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                  :class="
                    validateTab1.ho_city_code.$error
                      ? 'border-red-400 focus:ring-red-300'
                      : 'focus:ring-indigo-300'
                  "
                />
                <template v-if="validateTab1.ho_city_code.$error">
                  <div
                    v-for="(error, index) in validateTab1.ho_city_code.$errors"
                    :key="index"
                    class="text-red-600 text-xs mt-1"
                  >
                    {{ error.$message }}
                  </div>
                </template>
              </div>
              <div class="col-span-4">
                <label
                  for="ho_province"
                  class="w-full flex text-sm mb-2 font-normal text-gray-600"
                  >State / Province<span class="text-red-400"
                    >&nbsp;*</span
                  ></label
                >
                <input
                  id="ho_province"
                  v-model.trim="validateTab1.ho_province.$model"
                  type="text"
                  autocomplete="asd"
                  name="ho_province"
                  class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                  :class="
                    validateTab1.ho_province.$error
                      ? 'border-red-400 focus:ring-red-300'
                      : 'focus:ring-indigo-300'
                  "
                />
                <template v-if="validateTab1.ho_province.$error">
                  <div
                    v-for="(error, index) in validateTab1.ho_province.$errors"
                    :key="index"
                    class="text-red-600 text-xs mt-1"
                  >
                    {{ error.$message }}
                  </div>
                </template>
              </div>
              <div class="col-span-4">
                <label
                  for="ho_country"
                  class="w-full flex text-sm mb-2 font-normal text-gray-600"
                  >Country<span class="text-red-400">&nbsp;*</span></label
                >
                <input
                  id="ho_country"
                  v-model.trim="validateTab1.ho_country.$model"
                  type="text"
                  autocomplete="asd"
                  name="ho_country"
                  class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                  :class="
                    validateTab1.ho_country.$error
                      ? 'border-red-400 focus:ring-red-300'
                      : 'focus:ring-indigo-300'
                  "
                />
                <template v-if="validateTab1.ho_country.$error">
                  <div
                    v-for="(error, index) in validateTab1.ho_country.$errors"
                    :key="index"
                    class="text-red-600 text-xs mt-1"
                  >
                    {{ error.$message }}
                  </div>
                </template>
              </div>
              <div class="col-span-6">
                <label
                  for="ho_phone"
                  class="w-full flex text-sm mb-2 font-normal text-gray-600"
                  >Phone<span class="text-red-400">&nbsp;*</span></label
                >
                <input
                  id="ho_phone"
                  v-model.trim="validateTab1.ho_phone.$model"
                  type="text"
                  autocomplete="asd"
                  name="ho_phone"
                  class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                  :class="
                    validateTab1.ho_phone.$error
                      ? 'border-red-400 focus:ring-red-300'
                      : 'focus:ring-indigo-300'
                  "
                />
                <template v-if="validateTab1.ho_phone.$error">
                  <div
                    v-for="(error, index) in validateTab1.ho_phone.$errors"
                    :key="index"
                    class="text-red-600 text-xs mt-1"
                  >
                    {{ error.$message }}
                  </div>
                </template>
              </div>
              <div class="col-span-6">
                <label
                  for="ho_mail"
                  class="w-full flex text-sm mb-2 font-normal text-gray-600"
                  >E-Mail<span class="text-red-400">&nbsp;*</span></label
                >
                <input
                  id="ho_mail"
                  v-model.trim="validateTab1.ho_mail.$model"
                  type="text"
                  autocomplete="asd"
                  name="ho_mail"
                  class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                  :class="
                    validateTab1.ho_mail.$error
                      ? 'border-red-400 focus:ring-red-300'
                      : 'focus:ring-indigo-300'
                  "
                />
                <template v-if="validateTab1.ho_mail.$error">
                  <div
                    v-for="(error, index) in validateTab1.ho_mail.$errors"
                    :key="index"
                    class="text-red-600 text-xs mt-1"
                  >
                    {{ error.$message }}
                  </div>
                </template>
              </div>
            </div>
          </div>
        </div>
        <div ref="tab2" v-show="tabIndicator[1].isActive">
          <div class="relative my-5 border-b-2 border-indigo-200">
            <span
              class="text-sm absolute -top-2.5 left-5 bg-white px-2 font-medium tracking-wider uppercase text-indigo-400"
              >Sales / Marketing Person</span
            >
          </div>
          <div class="grid grid-cols-12 gap-4 mb-4">
            <div class="col-span-6">
              <label
                for="salesman"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Name<span class="text-red-400">&nbsp;*</span></label
              >
              <input
                id="salesman"
                v-model.trim="validateTab2.salesman.$model"
                type="text"
                autocomplete="nope"
                name="salesman"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  validateTab2.salesman.$error
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="validateTab2.salesman.$error">
                <div
                  v-for="(error, index) in validateTab2.salesman.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-6">
              <label
                for="position"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Position Title<span class="text-red-400">&nbsp;*</span></label
              >
              <input
                id="position"
                v-model.trim="validateTab2.position.$model"
                type="text"
                autocomplete="nope"
                name="position"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  validateTab2.position.$error
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="validateTab2.position.$error">
                <div
                  v-for="(error, index) in validateTab2.position.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-4">
              <label
                for="salesman_mail"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >E-Mail<span class="text-red-400"
                  >&nbsp;*</span
                ></label
              >
              <input
                id="salesman_mail"
                v-model.trim="validateTab2.salesman_mail.$model"
                type="text"
                autocomplete="nope"
                name="salesman_mail"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  validateTab2.salesman_mail.$error
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="validateTab2.salesman_mail.$error">
                <div
                  v-for="(error, index) in validateTab2.salesman_mail.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-4">
              <label
                for="salesman_telp"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Telephone (Direct)<span class="text-red-400">&nbsp;*</span></label
              >
              <input
                id="salesman_telp"
                v-model.trim="validateTab2.salesman_telp.$model"
                type="text"
                autocomplete="nope"
                name="salesman_telp"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  validateTab2.salesman_telp.$error
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="validateTab2.salesman_telp.$error">
                <div
                  v-for="(error, index) in validateTab2.salesman_telp.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-4">
              <label
                for="salesman_hp"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Handphone<span class="text-red-400">&nbsp;*</span></label
              >
              <input
                id="salesman_hp"
                v-model.trim="validateTab2.salesman_hp.$model"
                type="text"
                autocomplete="nope"
                name="salesman_hp"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  validateTab2.salesman_hp.$error
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="validateTab2.salesman_hp.$error">
                <div
                  v-for="(error, index) in validateTab2.salesman_hp.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-12 relative mt-8 mb-4 border-b-2 border-indigo-200">
              <span
                class="text-sm absolute -top-2.5 left-5 bg-white px-2 font-medium tracking-wider uppercase text-indigo-400"
                >Owner or Head of Sales / Marketing Person</span
              >
            </div>
            <div class="col-span-6">
              <label
                for="ho_salesman"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Name<span class="text-red-400">&nbsp;*</span></label
              >
              <input
                id="ho_salesman"
                v-model.trim="validateTab2.ho_salesman.$model"
                type="text"
                autocomplete="nope"
                name="ho_salesman"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  validateTab2.ho_salesman.$error
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="validateTab2.ho_salesman.$error">
                <div
                  v-for="(error, index) in validateTab2.ho_salesman.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-6">
              <label
                for="ho_position"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Position Title<span class="text-red-400">&nbsp;*</span></label
              >
              <input
                id="ho_position"
                v-model.trim="validateTab2.ho_position.$model"
                type="text"
                autocomplete="nope"
                name="ho_position"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  validateTab2.ho_position.$error
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="validateTab2.ho_position.$error">
                <div
                  v-for="(error, index) in validateTab2.ho_position.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-4">
              <label
                for="ho_salesman_mail"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >E-Mail<span class="text-red-400"
                  >&nbsp;*</span
                ></label
              >
              <input
                id="ho_salesman_mail"
                v-model.trim="validateTab2.ho_salesman_mail.$model"
                type="text"
                autocomplete="nope"
                name="ho_salesman_mail"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  validateTab2.ho_salesman_mail.$error
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="validateTab2.ho_salesman_mail.$error">
                <div
                  v-for="(error, index) in validateTab2.ho_salesman_mail.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-4">
              <label
                for="ho_salesman_telp"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Telephone (Direct)<span class="text-red-400">&nbsp;*</span></label
              >
              <input
                id="ho_salesman_telp"
                v-model.trim="validateTab2.ho_salesman_telp.$model"
                type="text"
                autocomplete="nope"
                name="ho_salesman_telp"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  validateTab2.ho_salesman_telp.$error
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="validateTab2.ho_salesman_telp.$error">
                <div
                  v-for="(error, index) in validateTab2.ho_salesman_telp.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-4">
              <label
                for="ho_salesman_hp"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Handphone<span class="text-red-400">&nbsp;*</span></label
              >
              <input
                id="ho_salesman_hp"
                v-model.trim="validateTab2.ho_salesman_hp.$model"
                type="text"
                autocomplete="nope"
                name="ho_salesman_hp"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  validateTab2.ho_salesman_hp.$error
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="validateTab2.ho_salesman_hp.$error">
                <div
                  v-for="(error, index) in validateTab2.ho_salesman_hp.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
          </div>
        </div>
        <div ref="tab3" v-show="tabIndicator[2].isActive">
          <div class="relative my-5 border-b-2 border-indigo-200">
            <span
              class="text-sm absolute -top-2.5 left-5 bg-white px-2 font-medium tracking-wider uppercase text-indigo-400"
              >Indonesian Rupiah</span
            >
          </div>
          <div class="grid grid-cols-12 gap-4 mb-4">
            <div class="col-span-6">
              <label
                for="id_bank"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Bank<span class="text-red-400">&nbsp;*</span></label
              >
              <input
                id="id_bank"
                v-model.trim="validateTab3a.id_bank.$model"
                type="text"
                autocomplete="nope"
                name="id_bank"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  ((validateTab3a.id_bank.$error) && (validateTab3b.ot_bank.$model === ''))
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="((validateTab3a.id_bank.$error) && (validateTab3b.ot_bank.$model === ''))">
                <div
                  v-for="(error, index) in validateTab3a.id_bank.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-6">
              <label
                for="id_branch"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Branch<span class="text-red-400">&nbsp;*</span></label
              >
              <input
                id="id_branch"
                v-model.trim="validateTab3a.id_branch.$model"
                type="text"
                autocomplete="nope"
                name="id_branch"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  ((validateTab3a.id_branch.$error) && (validateTab3b.ot_branch.$model === ''))
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="((validateTab3a.id_branch.$error) && (validateTab3b.ot_branch.$model === ''))">
                <div
                  v-for="(error, index) in validateTab3a.id_branch.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-6">
              <label
                for="id_accnumber"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Account Number<span class="text-red-400"
                  >&nbsp;*</span
                ></label
              >
              <input
                id="id_accnumber"
                v-model.trim="validateTab3a.id_accnumber.$model"
                type="text"
                autocomplete="nope"
                name="id_accnumber"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  ((validateTab3a.id_accnumber.$error) && (validateTab3b.ot_accnumber.$model === ''))
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="((validateTab3a.id_accnumber.$error) && (validateTab3b.ot_accnumber.$model === ''))">
                <div
                  v-for="(error, index) in validateTab3a.id_accnumber.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-6">
              <label
                for="id_accholder"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Account Holder<span class="text-red-400">&nbsp;*</span></label
              >
              <input
                id="id_accholder"
                v-model.trim="validateTab3a.id_accholder.$model"
                type="text"
                autocomplete="nope"
                name="id_accholder"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  ((validateTab3a.id_accholder.$error) && (validateTab3b.ot_accholder.$model === ''))
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="((validateTab3a.id_accholder.$error) && (validateTab3b.ot_accholder.$model === ''))">
                <div
                  v-for="(error, index) in validateTab3a.id_accholder.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-12 relative mt-8 mb-4 border-b-2 border-indigo-200">
              <span
                class="text-sm absolute -top-2.5 left-5 bg-white px-2 font-medium tracking-wider uppercase text-indigo-400"
                >other currency</span
              >
            </div>
            <div class="col-span-6">
              <label
                for="ot_bank"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Bank<span class="text-red-400">&nbsp;*</span></label
              >
              <input
                id="ot_bank"
                v-model.trim="validateTab3b.ot_bank.$model"
                type="text"
                autocomplete="nope"
                name="ot_bank"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  ((validateTab3b.ot_bank.$error) && (validateTab3a.id_bank.$model === ''))
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="((validateTab3b.ot_bank.$error) && (validateTab3a.id_bank.$model === ''))">
                <div
                  v-for="(error, index) in validateTab3b.ot_bank.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-6">
              <label
                for="ot_branch"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Branch<span class="text-red-400">&nbsp;*</span></label
              >
              <input
                id="ot_branch"
                v-model.trim="validateTab3b.ot_branch.$model"
                type="text"
                autocomplete="nope"
                name="ot_branch"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="((validateTab3b.ot_branch.$error) && (validateTab3a.id_branch.$model === '')) ? 
                  'border-red-400 focus:ring-red-300' : 
                  'focus:ring-indigo-300'
                "
              />
              <template v-if="((validateTab3b.ot_branch.$error) && (validateTab3a.id_branch.$model === ''))">
                <div
                  v-for="(error, index) in validateTab3b.ot_branch.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-6">
              <label
                for="ot_accnumber"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Account Number<span class="text-red-400"
                  >&nbsp;*</span
                ></label
              >
              <input
                id="ot_accnumber"
                v-model.trim="validateTab3b.ot_accnumber.$model"
                type="text"
                autocomplete="nope"
                name="ot_accnumber"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  ((validateTab3b.ot_accnumber.$error) && (validateTab3a.id_accnumber.$model === ''))
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="((validateTab3b.ot_accnumber.$error) && (validateTab3a.id_accnumber.$model === ''))">
                <div
                  v-for="(error, index) in validateTab3b.ot_accnumber.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
            <div class="col-span-6">
              <label
                for="ot_accholder"
                class="w-full flex text-sm mb-2 font-normal text-gray-600"
                >Account Holder<span class="text-red-400">&nbsp;*</span></label
              >
              <input
                id="ot_accholder"
                v-model.trim="validateTab3b.ot_accholder.$model"
                type="text"
                autocomplete="nope"
                name="ot_accholder"
                class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                :class="
                  ((validateTab3b.ot_accholder.$error) && (validateTab3a.id_accholder.$model === ''))
                    ? 'border-red-400 focus:ring-red-300'
                    : 'focus:ring-indigo-300'
                "
              />
              <template v-if="((validateTab3b.ot_accholder.$error) && (validateTab3a.id_accholder.$model === ''))">
                <div
                  v-for="(error, index) in validateTab3b.ot_accholder.$errors"
                  :key="index"
                  class="text-red-600 text-xs mt-1"
                >
                  {{ error.$message }}
                </div>
              </template>
            </div>
          </div>
        </div>
        <div ref="tab4" v-show="tabIndicator[3].isActive">
          <div class="grid grid-cols-12 gap-6">
            <div class="col-span-4 mb-4">
              <div class="flex flex-col h-full bg-indigo-50 rounded-lg p-4">
                <label class="text-base font-medium text-gray-700 tracking-wide">Akta Pendirian Perusahaan & Akta Perubahan</label>
                <div class="mt-3 h-full flex items-end">
                  <label v-if="!formData.file1.data" class="w-64 flex flex-col items-center px-2 py-1 bg-white text-indigo-500 rounded-lg shadow-lg tracking-wide uppercase border-2 border-dashed border-indigo-500 cursor-pointer">
                      <svg class="w-12 h-12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span class="mt-1 text-xs text-center leading-normal">Scanned Copy - Halaman depan, nama pemegang saham & halaman terakhir (pengesahan)</span>
                      <input type='file' ref="file1" id="file1" accept="application/pdf" @change="onFileChange" class="hidden" />
                  </label>
                  <div v-else class="grid grid-cols-12 shadow-lg rounded-lg bg-white">
                    <div class="col-span-2 bg-red-400 rounded-l-lg px-1 py-2 flex justify-center items-center">
                      <img class="w-100 h-auto" src="../../assets/pdf32.png" alt="">
                    </div>
                    <div class="col-span-8 p-1 flex items-center">
                      <h4 class="text-xs text-gray-500 font-medium overflow-hidden overflow-ellipsis whitespace-nowrap">
                        {{formData.file1.filename}}
                      </h4>
                    </div>
                    <div class="col-span-2 pr-2 flex items-center">
                      <span class="cursor-pointer" @click="removeFile('file1')">
                        <svg class="icon line stroke-current text-red-500" width="24" height="24" id="cross-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></circle><line x1="15" y1="15" x2="9" y2="9" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><line x1="15" y1="9" x2="9" y2="15" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-4 mb-4">
              <div class="flex flex-col h-full bg-indigo-50 rounded-lg p-4">
                <label class="text-base font-medium text-gray-700 tracking-wide">Nomor Induk Berusaha (NIB)</label>
                <div class="mt-3 h-full flex items-end">
                  <label v-if="!formData.file2.data" class="w-64 flex flex-col items-center px-2 py-1 bg-white text-indigo-500 rounded-lg shadow-lg tracking-wide uppercase border-2 border-dashed border-indigo-500 cursor-pointer">
                      <svg class="w-12 h-12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span class="mt-1 text-xs text-center leading-normal">Scanned Copy - NIB</span>
                      <input type='file' ref="file2" id="file2" accept="application/pdf" @change="onFileChange" class="hidden" />
                  </label>
                  <div v-else class="grid grid-cols-12 shadow-lg rounded-lg bg-white">
                    <div class="col-span-2 bg-red-400 rounded-l-lg px-1 py-2 flex justify-center items-center">
                      <img class="w-100 h-auto" src="../../assets/pdf32.png" alt="">
                    </div>
                    <div class="col-span-8 p-1 flex items-center">
                      <h4 class="text-xs text-gray-500 font-medium overflow-hidden overflow-ellipsis whitespace-nowrap">
                        {{formData.file2.filename}}
                      </h4>
                    </div>
                    <div class="col-span-2 pr-2 flex items-center">
                      <span class="cursor-pointer" @click="removeFile('file2')">
                        <svg class="icon line stroke-current text-red-500" width="24" height="24" id="cross-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></circle><line x1="15" y1="15" x2="9" y2="9" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><line x1="15" y1="9" x2="9" y2="15" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-4 mb-4">
              <div class="flex flex-col h-full bg-indigo-50 rounded-lg p-4">
                <label class="text-base font-medium text-gray-700 tracking-wide">Surat Ijin Usaha Perdagangan (SIUP)</label>
                <div class="mt-3 h-full flex items-end">
                  <label v-if="!formData.file3.data" class="w-64 flex flex-col items-center px-2 py-1 bg-white text-indigo-500 rounded-lg shadow-lg tracking-wide uppercase border-2 border-dashed border-indigo-500 cursor-pointer">
                      <svg class="w-12 h-12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span class="mt-1 text-xs text-center leading-normal">Scanned Copy - SIUP</span>
                      <input type='file' ref="file3" id="file3" accept="application/pdf" @change="onFileChange" class="hidden" />
                  </label>
                  <div v-else class="grid grid-cols-12 shadow-lg rounded-lg bg-white">
                    <div class="col-span-2 bg-red-400 rounded-l-lg px-1 py-2 flex justify-center items-center">
                      <img class="w-100 h-auto" src="../../assets/pdf32.png" alt="">
                    </div>
                    <div class="col-span-8 p-1 flex items-center">
                      <h4 class="text-xs text-gray-500 font-medium overflow-hidden overflow-ellipsis whitespace-nowrap">
                        {{formData.file3.filename}}
                      </h4>
                    </div>
                    <div class="col-span-2 pr-2 flex items-center">
                      <span class="cursor-pointer" @click="removeFile('file3')">
                        <svg class="icon line stroke-current text-red-500" width="24" height="24" id="cross-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></circle><line x1="15" y1="15" x2="9" y2="9" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><line x1="15" y1="9" x2="9" y2="15" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-4 mb-4">
              <div class="flex flex-col h-full bg-indigo-50 rounded-lg p-4">
                <label class="text-base font-medium text-gray-700 tracking-wide">Nomor Pokok Wajib Pajak (NPWP)</label>
                <div class="mt-3 h-full flex items-end">
                  <label v-if="!formData.file4.data" class="w-64 flex flex-col items-center px-2 py-1 bg-white text-indigo-500 rounded-lg shadow-lg tracking-wide uppercase border-2 border-dashed border-indigo-500 cursor-pointer">
                      <svg class="w-12 h-12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span class="mt-1 text-xs text-center leading-normal">Scanned Copy - NPWP</span>
                      <input type='file' ref="file4" id="file4" accept="application/pdf" @change="onFileChange" class="hidden" />
                  </label>
                  <div v-else class="grid grid-cols-12 shadow-lg rounded-lg bg-white">
                    <div class="col-span-2 bg-red-400 rounded-l-lg px-1 py-2 flex justify-center items-center">
                      <img class="w-100 h-auto" src="../../assets/pdf32.png" alt="">
                    </div>
                    <div class="col-span-8 p-1 flex items-center">
                      <h4 class="text-xs text-gray-500 font-medium overflow-hidden overflow-ellipsis whitespace-nowrap">
                        {{formData.file4.filename}}
                      </h4>
                    </div>
                    <div class="col-span-2 pr-2 flex items-center">
                      <span class="cursor-pointer" @click="removeFile('file4')">
                        <svg class="icon line stroke-current text-red-500" width="24" height="24" id="cross-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></circle><line x1="15" y1="15" x2="9" y2="9" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><line x1="15" y1="9" x2="9" y2="15" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-span-4 mb-4">
              <div class="flex flex-col h-full bg-indigo-50 rounded-lg p-4">
                <label class="text-base font-medium text-gray-700 tracking-wide">Surat Pengukuhan Pengusaha Kena Pajak (SPPKP)</label>
                <div class="mt-3 h-full flex items-end">
                  <label v-if="!formData.file5.data" class="w-64 flex flex-col items-center px-2 py-1 bg-white text-indigo-500 rounded-lg shadow-lg tracking-wide uppercase border-2 border-dashed border-indigo-500 cursor-pointer">
                      <svg class="w-12 h-12" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                          <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
                      </svg>
                      <span class="mt-1 text-xs text-center leading-normal">Scanned Copy - SPPKP</span>
                      <input type='file' ref="file5" id="file5" accept="application/pdf" @change="onFileChange" class="hidden" />
                  </label>
                  <div v-else class="grid grid-cols-12 shadow-lg rounded-lg bg-white">
                    <div class="col-span-2 bg-red-400 rounded-l-lg px-1 py-2 flex justify-center items-center">
                      <img class="w-100 h-auto" src="../../assets/pdf32.png" alt="">
                    </div>
                    <div class="col-span-8 p-1 flex items-center">
                      <h4 class="text-xs text-gray-500 font-medium overflow-hidden overflow-ellipsis whitespace-nowrap">
                        {{formData.file5.filename}}
                      </h4>
                    </div>
                    <div class="col-span-2 pr-2 flex items-center">
                      <span class="cursor-pointer" @click="removeFile('file5')">
                        <svg class="icon line stroke-current text-red-500" width="24" height="24" id="cross-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></circle><line x1="15" y1="15" x2="9" y2="9" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line><line x1="15" y1="9" x2="9" y2="15" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></line></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
      <div class="col-span-4 border-l border-gray-200 relative">
        <!-- <div class="h-full flex flex-col items-center justify-center"> -->
          <div class="py-2 h-fit-12--5 flex flex-col items-center justify-center overflow-x-hidden overflow-y-scroll scrollbar-thumb-rounded scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-gray-100">
            <div v-for="(tab, idx) in tabIndicator" :key="idx" class="w-10/12">
              <div :class="tab.isActive || tab.isPassed ? 'border-l-4 border-green-500' : ''" class="mb-4 shadow-md rounded-md flex justify-between gap-4 px-6 py-3">
                <div>
                  <label class="block font-semibold text-base text-gray-700">Step {{idx+1}}</label>
                  <span class="capitalize font-normal text-sm text-gray-400">{{tab.title}}</span>
                </div>
                <div v-show="tab.isPassed" class="flex justify-center items-center">
                  <span>
                    <svg class="icon line stroke-current text-green-500" width="32" height="32" id="check-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></circle><polyline points="8 12 11 15 16 10" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 2;"></polyline></svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="flex items-center justify-center gap-3 absolute bottom-0 left-0 w-full pt-3 bg-white">
            <button :disabled="currentTab === 0 || iconLoading" @click="nextPrevTab(-1)" class="disabled:cursor-not-allowed disabled:text-indigo-200 disabled:border-transparent disabled:bg-indigo-50 flex justify-center items-center group w-32 bg-indigo-50 border-2 border-indigo-50 hover:border-indigo-200 rounded-md px-4 py-1 text-base font-normal text-indigo-400 capitalize tracking-wider hover:bg-indigo-100">
              <span class="mr-2">
                <svg :class="currentTab === 0 || iconLoading ? 'text-indigo-200' : 'text-indigo-400'" class="icon line stroke-current" width="24" height="24" id="left-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></circle><polyline points="13 9 10 12 13 15" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></polyline></svg>
              </span>back
            </button>
            <button v-if="currentTab < (tabIndicator.length - 1)" @click="nextPrevTab(1)" class="flex justify-center items-center group w-32 bg-indigo-500 px-4 py-1 border-2 border-transparent rounded-md text-base my-text-white font-normal capitalize tracking-wider hover:bg-indigo-600">
              next
              <span class="ml-2">
                <svg class="icon line stroke-current my-text-white" width="24" height="24" id="right-circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><circle cx="12" cy="12" r="9" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></circle><polyline points="11 15 14 12 11 9" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></polyline></svg>
              </span>
              </button>
            <button v-if="currentTab === (tabIndicator.length - 1)" :disabled="iconLoading" @click="submit" class="disabled:cursor-not-allowed disabled:bg-green-300 flex justify-center items-center group w-32 bg-green-500 border-2 border-transparent rounded-md hover:bg-green-600 text-base my-text-white px-4 py-1 tracking-wider capitalize font-normal">
              submit
              <span v-if="!iconLoading" class="ml-2">
                <svg  class="icon line stroke-current my-text-white" width="24" height="24" id="file-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M10,20H4a1,1,0,0,1-1-1V4A1,1,0,0,1,4,3h8.59a1,1,0,0,1,.7.29l3.42,3.42a1,1,0,0,1,.29.7V12" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></path><polyline points="13 18 16 21 21 16" style="fill: none; stroke-linecap: round; stroke-linejoin: round; stroke-width: 1.5;"></polyline></svg>
              </span>
              <span v-else class="ml-2 w-6 h-6"><svg width="25" viewBox="-2 -2 42 42" xmlns="http://www.w3.org/2000/svg" stroke="#FFFFFF" class="w-full h-full"><g fill="none" fill-rule="evenodd"><g transform="translate(1 1)" stroke-width="4"><circle stroke-opacity=".5" cx="18" cy="18" r="18"></circle><path d="M36 18c0-9.94-8.06-18-18-18"><animateTransform attributeName="transform" type="rotate" from="0 18 18" to="360 18 18" dur="1s" repeatCount="indefinite"></animateTransform></path></g></g></svg></span>
            </button>
          </div>
        <!-- </div> -->
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
} from "@vuelidate/validators";
import { useVuelidate } from "@vuelidate/core";
import Toastify from "toastify-js";

export default {
  components: { },
  data: function () {
    return{
      iconLoading: false,
      currentTab: 0,
      tabIndicator: [{
        id: "tab1",
        title: "general information",
        isActive: true,
        isPassed: false
      }, {
        id: "tab2",
        title: "Ownership & Key Contact Person Information",
        isActive: false,
        isPassed: false
      }, {
        id: "tab3",
        title: "Bank Account Details",
        isActive: false,
        isPassed: false
      }, {
        id: "tab4",
        title: "upload Documents",
        isActive: false,
        isPassed: false
      }]
    }
  },

  setup() {
    const formData = reactive({
      namavendor: "",
      brand: "",
      website: "",
      address: "",
      city_code: "",
      province: "",
      country: "",
      phone: "",
      mail: "",
      sameAsAbove: false,
      ho_address: "",
      ho_city_code: "",
      ho_province: "",
      ho_country: "",
      ho_phone: "",
      ho_mail: "",

      salesman: "",
      position: "",
      salesman_mail: "",
      salesman_telp: "",
      salesman_hp: "",
      ho_salesman: "",
      ho_position: "",
      ho_salesman_mail: "",
      ho_salesman_telp: "",
      ho_salesman_hp: "",

      id_bank: "",
      id_branch: "",
      id_accnumber: "",
      id_accholder: "",

      ot_bank: "",
      ot_branch: "",
      ot_accnumber: "",
      ot_accholder: "",

      file1: {data: null, filename: ""},
      file2: {data: null, filename: ""},
      file3: {data: null, filename: ""},
      file4: {data: null, filename: ""},
      file5: {data: null, filename: ""},
    });
    const rulesTab1 = {
      namavendor: {
        required,
      },
      brand: {},
      website: {
        url,
      },
      address: {
        required,
      },
      city_code: {
        required,
      },
      province: {
        required,
      },
      country: {
        required,
      },
      phone: {
        required,
        integer,
      },
      mail: {
        required,
        email,
      },
      ho_address: {
        required,
      },
      ho_city_code: {
        required,
      },
      ho_province: {
        required,
      },
      ho_country: {
        required,
      },
      ho_phone: {
        required,
        integer,
      },
      ho_mail: {
        required,
        email,
      },
    };

    const rulesTab2 = {
      salesman: {
        required,
      },
      position: {
        required,
      },
      salesman_mail: {
        required,
        email
      },
      salesman_telp: {
        required,
        integer
      },
      salesman_hp: {
        required,
        integer
      },
      ho_salesman: {
        required,
      },
      ho_position: {
        required
      },
      ho_salesman_mail: {
        required,
        email
      },
      ho_salesman_telp: {
        required,
        integer
      },
      ho_salesman_hp: {
        required,
        integer
      },
    };

    const rulesTab3a = {
      id_bank: {
        required
      },
      id_branch: {
        required
      },
      id_accnumber: {
        required,
        integer
      },
      id_accholder: {
        required
      }
    };

    const rulesTab3b = {
      ot_bank: {
        required
      },
      ot_branch: {
        required
      },
      ot_accnumber: {
        required,
        integer
      },
      ot_accholder: {
        required
      }
    };

    const validateTab1 = useVuelidate(rulesTab1, toRefs(formData));
    const validateTab2 = useVuelidate(rulesTab2, toRefs(formData));
    const validateTab3a = useVuelidate(rulesTab3a, toRefs(formData));
    const validateTab3b = useVuelidate(rulesTab3b, toRefs(formData));

    return {
      validateTab1,
      validateTab2,
      validateTab3a,
      validateTab3b,
      formData,
    };
  },

  methods: {
    removeFile(id) {
      this.formData[id].data = null;
      this.formData[id].filename = "";
    },

    onFileChange(e) {
      let id = e.target.id;
      const files = this.$refs[id].files;

      console.log(files);
      if (!files.length) {
        return
      } else {
        let fileSize = ((files[0].size/1024)/1024).toFixed(4); // MB
        if(fileSize > 2){
          alert("File is too big!");
          this.formData[id].data = null;
          this.formData[id].filename = "";
        } else {
          this.formData[id].data = files[0];
          this.formData[id].filename = files[0].name;
        }
      }
    },

    nextPrevTab(n){
      if (this.currentTab === 0 && n === 1) {
        this.validateTab1.$touch();
        if (this.validateTab1.$invalid) {
          Toastify({
            text: "Some fields are required",
            duration: 3000,
            newWindow: true,
            close: false,
            className: "danger-notif",
            stopOnFocus: true
          }).showToast();
        } else {
          this.showTab(n);
        }
      } else if (this.currentTab === 1 && n === 1) {
        this.validateTab2.$touch();
        if (this.validateTab2.$invalid) {
          Toastify({
            text: "Some fields are required",
            duration: 3000,
            newWindow: true,
            close: false,
            className: "danger-notif",
            stopOnFocus: true
          }).showToast();
        } else {
          this.showTab(n);
        }
      } else if (this.currentTab === 2 && n === 1) {
        this.validateTab3a.$touch();
        this.validateTab3b.$touch();
        if (this.validateTab3a.$invalid && this.validateTab3b.$invalid) {
          Toastify({
            text: "At least fill in one of the bank account groups",
            duration: 3000,
            newWindow: true,
            close: false,
            className: "danger-notif",
            stopOnFocus: true
          }).showToast();
        } else {
          this.showTab(n);
        }
      } else {
        this.showTab(n);
      }
    },

    showTab(n){
      let oldTab = this.currentTab;
      this.currentTab = n === 1 ? (this.currentTab+1) : (this.currentTab-1) ;
      this.tabIndicator[oldTab].isActive = false;
      this.tabIndicator[this.currentTab].isActive = true;
      if (n === 1) {
        this.tabIndicator[oldTab].isPassed = true;
      } else {
        this.tabIndicator[this.currentTab].isPassed = false;
      }
    },

    submit() {
      if (!this.formData.file1.data || !this.formData.file2.data || !this.formData.file3.data || !this.formData.file4.data || !this.formData.file5.data) {
        Toastify({
          text: "Documents is not complete",
          duration: 3000,
          newWindow: true,
          close: false,
          className: "danger-notif",
          stopOnFocus: true
        }).showToast();
      } else {
        this.tabIndicator[3].isPassed = true;
        this.iconLoading = true;
        setTimeout(() => {
          Toastify({
            text: "Data is submitted successfully",
            duration: 3000,
            newWindow: true,
            close: false,
            className: "success-notif",
            stopOnFocus: true
          }).showToast();
          this.iconLoading = false;
        }, 5000);
      }
    },

    toggleCheckbox() {
      if (this.formData.sameAsAbove) {
        this.formData.ho_address = this.formData.address;
        this.formData.ho_city_code = this.formData.city_code;
        this.formData.ho_province = this.formData.province;
        this.formData.ho_country = this.formData.country;
        this.formData.ho_phone = this.formData.phone;
        this.formData.ho_mail = this.formData.mail;
      } else {
        this.formData.ho_address = "";
        this.formData.ho_city_code = "";
        this.formData.ho_province = "";
        this.formData.ho_country = "";
        this.formData.ho_phone = "";
        this.formData.ho_mail = "";
      }
    },
  },
};
</script>