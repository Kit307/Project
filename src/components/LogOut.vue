<template>
  <div
    class="relative min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-700 py-12 px-4 sm:px-6 lg:px-8 z-50"
  >
    <!-- bg-yellow-100 -->
    <!-- <div class="absolute bg-black opacity-60 inset-0 z-0"></div> -->
    <div class="mt-2 items-center z-10">
      <div
        class="p-14 bg-white max-w-sm px-20 mx-auto rounded-xl shadow-xl dark:bg-gray-800 dark:rounded-xl dark:shadow-xl overflow-hidden space-y-10"
      >
        <h5 class="text-xl font-medium text-gray-900 dark:text-white">
          Logout
        </h5>

        <button
          @click="logout"
          class="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Logout
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { signOut } from "firebase/auth";
import { auth } from "../plugin/index";
export default {
  methods: {
    logout() {
      //   const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-outsuccessful.
          //   this.$router.push("/");
          this.$router.replace("/login");
          console.log("dsaasd");
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },
  },
};
</script>

<style></style>
