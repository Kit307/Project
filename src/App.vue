<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <div></div>
    <div class="z-50 fixed w-full top-0">
      <nav
        class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 shadow-xl dark:bg-gray-800 sticky top-0"
      >
        <div
          class="container flex flex-wrap justify-between items-center mx-auto"
        >
          <a href="#" class="flex items-center">
            <span
              class="self-center text-xl font-semibold whitespace-nowrap dark:text-white"
              >Flowbite
            </span>
          </a>
          <button
            data-collapse-toggle="mobile-menu"
            type="button"
            class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="mobile-menu-2"
            aria-expanded="true"
          >
            <span class="sr-only">Open asd main menu</span>
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <svg
              class="hidden w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
            <ul
              class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
              data-collapse-toggle="mobile-menu"
            >
              <li>
                <RouterLink to="/"
                  ><a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >Home</a
                  ></RouterLink
                >
              </li>
              <li>
                <RouterLink to="/about">
                  <a
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >About</a
                  ></RouterLink
                >
              </li>

              <li>
                <RouterLink to="/product"
                  ><a
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >Product</a
                  ></RouterLink
                >
              </li>
              <li v-if="!login">
                <RouterLink to="/profile"
                  ><a
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >Profile</a
                  ></RouterLink
                >
              </li>
              <li v-if="!login">
                <RouterLink to="/carttable"
                  ><a
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >Cart</a
                  ></RouterLink
                >
              </li>
              <li v-if="!login">
                <RouterLink to="/store"
                  ><a
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >Store</a
                  ></RouterLink
                >
              </li>
              <li v-if="profiledata.Admin">
                <RouterLink to="/admin"
                  ><a
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >Admin</a
                  ></RouterLink
                >
              </li>
              <li v-if="login">
                <RouterLink to="/login"
                  ><a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >Login</a
                  ></RouterLink
                >
              </li>
              <li v-else>
                <div @click="logoutvar = true">
                  <a
                    href="#"
                    class="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                    >Logout</a
                  >
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>

  <router-view />
  <div>
    <TransitionRoot as="template" :show="logoutvar">
      <Dialog
        as="div"
        class="fixed z-10 inset-0 overflow-y-auto"
        @close="open = false"
      >
        <div
          class="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0"
        >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="ease-in duration-200"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <DialogOverlay
              class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"
            />
          </TransitionChild>

          <!-- This element is to trick the browser into centering the modal contents. -->
          <span
            class="hidden sm:inline-block sm:align-middle sm:h-screen"
            aria-hidden="true"
            >&#8203;</span
          >
          <TransitionChild
            as="template"
            enter="ease-out duration-300"
            enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enter-to="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leave-from="opacity-100 translate-y-0 sm:scale-100"
            leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div
              class="relative inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
            >
              <div
                class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-700"
              >
                <div class="sm:flex sm:items-start">
                  <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                    <DialogTitle
                      as="h3"
                      class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                    >
                      Logout ?
                    </DialogTitle>
                    <div class="mt-2">
                      <p class="text-sm text-gray-500 dark:text-white">
                        Are you sure you want to deactivate your account? All of
                        your data will be permanently removed. This action
                        cannot be undone.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse dark:bg-gray-700"
              >
                <button
                  type="button"
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="logout"
                >
                  Logout
                </button>
                <button
                  type="button"
                  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="logoutvar = false"
                  ref="cancelButtonRef"
                >
                  Cancel
                </button>
              </div>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>
<script>
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { db, auth } from "../src/plugin/index";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
export default {
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  mounted() {
    this.chackLogin();
  },
  data() {
    return {
      login: true,
      logoutvar: false,
      profiledata: false,
      uid: "",
    };
  },
  methods: {
    chackLogin() {
      // const auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // console.log(uid);
          this.uid = uid;
          this.login = false;
          this.readData();
          // ...แสดงผล user, email, id ในจอ
        } else {
          // User is signed out
          // ...กรณีที่ยังไม่ได้ login ให้เปลียนไปหน้า login ก่อน !!!
          this.login = true;
        }
      });
    },
    logout() {
      //   const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-outsuccessful.
          //   this.$router.push("/");
          this.$router.replace("/login");
          // console.log("dsaasd");
          this.logoutvar = false;
        })
        .catch((error) => {
          // An error happened.
          console.log(error);
        });
    },
    async readData() {
      const user = auth.currentUser;
      await onSnapshot(doc(db, "cities", user.uid), (doc) => {
        // console.log(doc.data());
        this.profiledata = doc.data();
      });
    },
  },
};
</script>
<style></style>
