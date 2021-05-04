<template>
  <div
    class="h-fit-10--5 bg-gray-50 rounded-lg p-6 overflow-y-auto overflow-x-hidden scrollbar-thumb-rounded scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100"
  >
    <div class="bg-white rounded-lg shadow-md p-4 grid grid-cols-12 gap-6">
      <div class="col col-span-2">
        <svg
          id="bold"
          enable-background="new 0 0 32 32"
          height="100%"
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
      <div class="col-span-10">
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
          </tbody>
        </table>
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
          baseURL: "",
          displayName: "",
          userID: "",
          tipeLogin: "",
      }
  },

  methods: {
    viewHidePassword() {
      this.passwordVisible = !this.passwordVisible;
    }
  }
};
</script>

<style>
</style>