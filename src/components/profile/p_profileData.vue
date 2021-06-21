<template>
  <div
    class="h-fit-10--5 bg-gray-50 rounded-lg p-6 overflow-y-auto overflow-x-hidden scrollbar-thumb-rounded scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
  >
    <div class="min-h-28 bg-white rounded-lg shadow-md p-4">
      <div v-if="!onEdit" class="grid grid-cols-10 gap-6">
        <div class="col-span-10 md:col-span-2">
          <svg
            id="bold"
            enable-background="new 0 0 32 32"
            viewBox="0 0 32 32"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="m26 32h-20c-3.314 0-6-2.686-6-6v-20c0-3.314 2.686-6 6-6h20c3.314 0 6 2.686 6 6v20c0 3.314-2.686 6-6 6z"
              fill="#f5e6fe"
            />
            <circle cx="16" cy="12" fill="#be63f9" r="2.667" />
            <path
              d="m18.167 16h-4.334c-1.746 0-3.167 1.421-3.167 3.167v1.667c0 .276.224.5.5.5h9.667c.276 0 .5-.224.5-.5v-1.667c.001-1.746-1.42-3.167-3.166-3.167z"
              fill="#be63f9"
            />
            <g fill="#d9a4fc">
              <path
                d="m11.333 8h-1.333c-1.103 0-2 .897-2 2v1.333c0 .369.298.667.666.667s.667-.298.667-.667v-1.333c0-.368.299-.667.667-.667h1.333c.368 0 .667-.298.667-.666s-.299-.667-.667-.667z"
              />
              <path
                d="m11.333 22.667h-1.333c-.368 0-.667-.299-.667-.667v-1.333c0-.369-.299-.667-.667-.667s-.666.298-.666.667v1.333c0 1.103.897 2 2 2h1.333c.368 0 .667-.298.667-.667s-.299-.666-.667-.666z"
              />
              <path
                d="m22 8h-1.333c-.368 0-.667.298-.667.667s.299.667.667.667h1.333c.368 0 .667.299.667.667v1.333c0 .368.299.667.667.667s.666-.299.666-.668v-1.333c0-1.103-.897-2-2-2z"
              />
              <path
                d="m23.334 20c-.368 0-.667.298-.667.667v1.333c0 .368-.299.667-.667.667h-1.333c-.368 0-.667.298-.667.667s.299.666.667.666h1.333c1.103 0 2-.897 2-2v-1.333c0-.369-.298-.667-.666-.667z"
              />
            </g>
          </svg>
        </div>
        <div class="col-span-10 md:col-span-8">
          <div class="overflow-y-hidden overflow-x-auto scrollbar-thumb-rounded scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
            <table class="no table-noborder">
              <tbody>
                <tr>
                  <td class="capitalize">ID</td>
                  <td>:</td>
                  <td colspan="2" class="capitalize font-semibold">1231</td>
                </tr>
                <tr>
                  <td class="capitalize">nama vendor</td>
                  <td>:</td>
                  <td colspan="2" class="capitalize font-semibold">VIARDI BINTANG TERANG PT, MAKASAR</td>
                </tr>
                <tr>
                  <td class="capitalize">password</td>
                  <td>:</td>
                  <td class="font-semibold">
                    <div v-if="passwordVisible">
                      <span>{{password}}</span>
                    </div>
                    <div v-else>
                      <span v-for="(p,idx) in password.length" :key="idx">*</span>
                    </div>
                  </td>
                  <td>
                    <div @click="viewHidePassword" class="w-6 bg-purple-500 rounded-md p-1 cursor-pointer">
                      <img v-if="passwordVisible" class="w-full h-auto" src="../../assets/hide.png" alt="">
                      <img v-else class="w-full h-auto" src="../../assets/eye.png" alt="">
                    </div>
                  </td>
                </tr>
                <tr>
                  <td class="capitalize">alamat</td>
                  <td>:</td>
                  <td colspan="2" class="font-normal">jalan jalan ke pasar minggu</td>
                </tr>
                <tr>
                  <td class="capitalize">e-mail</td>
                  <td>:</td>
                  <td colspan="2" class="font-normal">viardi@makassar.com</td>
                </tr>
                <tr>
                  <td class="capitalize">HP (WA)</td>
                  <td>:</td>
                  <td colspan="2" class="capitalize font-normal">0811112222333</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="pt-5 pl-3 w-40">
            <button
              @click="edit"
              :disabled="iconLoading"
              class="disabled:bg-indigo-400 disabled:cursor-not-allowed w-full flex justify-center items-center bg-indigo-800 rounded-lg font-light text-white px-4 py-2 tracking-wider hover:bg-indigo-700 focus:outline-none"
            >
              Edit Profile
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
      <div v-else>
        <form>
          <div class="grid grid-cols-12 gap-3">
            <div class="col-span-12 md:col-span-6">
              <div class="grid grid-cols-12 gap-3">
                <div class="col-span-12">
                  <div class="relative mb-4">
                    <label
                      for="alamat"
                      class="block mb-1 text-gray-600 font-semibold text-md"
                      >Alamat</label
                    >
                    <input
                      id="alamat"
                      type="text"
                      placeholder=""
                      class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                    />
                  </div>
                  <div class="relative mb-4">
                    <label
                      for="email"
                      class="block mb-1 text-gray-600 font-semibold text-md"
                      >Email</label
                    >
                    <input
                      id="email"
                      type="email"
                      placeholder=""
                      class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                    />
                  </div>
                  <div class="relative mb-4">
                    <label
                      for="phone"
                      class="block mb-1 text-gray-600 font-semibold text-md"
                      >Phone Number (WA)</label
                    >
                    <input
                      id="phone"
                      type="number"
                      placeholder=""
                      class="border border-gray-300 w-full shadow-sm rounded-md focus:ring-2 px-3 py-2 text-gray-500 font-normal text-sm"
                    />
                  </div>
                </div>
                <div class="col-span-6">
                  <button
                    type="submit"
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
                <div class="col-span-6">
                    <button
                      @click="edit"
                      class="disabled:bg-purple-200 disabled:cursor-not-allowed w-full flex justify-center items-center bg-purple-400 rounded-lg font-light text-white px-4 py-2 tracking-wider hover:bg-purple-300 focus:outline-none"
                    >
                      Cancel
                    </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: function () {
      return{
          password: "ujmi",
          passwordVisible: false,
          judul: "",
          baseURL: "/uis",
          displayName: "",
          userID: "",
          tipeLogin: "",
          iconLoading: false,
          onEdit: false
      }
  },

  methods: {
    viewHidePassword() {
      this.passwordVisible = !this.passwordVisible;
    },

    edit() {
      this.onEdit = !this.onEdit;
    },

    submit(e){
      e.preventDefault();
    }
  }
};
</script>

<style>
</style>