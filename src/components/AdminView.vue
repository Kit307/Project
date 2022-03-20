<template>
  <div>
    <!-- component -->
    <div>
      <div
        wire:loading
        v-show="!show"
        class="fixed top-0 left-0 right-0 bottom-0 w-full h-screen z-50 overflow-hidden bg-gray-700 opacity-75 flex flex-col items-center justify-center"
      >
        <svg
          role="status"
          class="mr-2 w-36 h-36 text-gray-200 animate-spin fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <h2 class="text-center text-white text-xl font-semibold">Loading...</h2>
        <p class="w-1/3 text-center text-white">
          This may take a few seconds, please don't close this page.
        </p>
      </div>
    </div>
    <div class="bg-gray-100 dark:bg-gray-600">
      <div class="h-screen bg-gray-100 dark:bg-gray-600">
        <div class="py-6"></div>

        <div class="p-8 rounded-md w-full mt-10 bg-gray-100 dark:bg-gray-600">
          <div>
            <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
              <div
                class="inline-block min-w-full shadow rounded-lg overflow-hidden"
              >
                <table class="min-w-full leading-normal">
                  <thead>
                    <tr>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-900 bg-gray-300 dark:bg-gray-800 dark:text-white text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        #
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-900 bg-gray-300 dark:bg-gray-800 dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        Name
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-900 bg-gray-300 dark:bg-gray-800 dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        Price
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-900 bg-gray-300 dark:bg-gray-800 dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        Total
                      </th>
                      <th
                        class="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-900 bg-gray-300 dark:bg-gray-800 dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                      >
                        Edit
                      </th>
                    </tr>
                  </thead>
                  <tbody v-for="(item, index) in profiledata" :key="index">
                    <tr v-if="index >= (x - 1) * 5 && index < x * 5">
                      <td
                        class="md:px-5 sm:px-2 border-b border-gray-200 text-center bg-white text-sm dark:border-gray-900 dark:bg-gray-700"
                      >
                        <p
                          class="text-gray-900 whitespace-no-wrap dark:text-white"
                        >
                          {{ index + 1 }}
                        </p>
                      </td>
                      <td
                        class="py-5 border-b border-gray-200 bg-white dark:border-gray-900 dark:bg-gray-700 text-sm"
                      >
                        <div class="ml-3">
                          <div class="flex items-center">
                            <div class="flex-shrink-0 w-10 h-10">
                              <img
                                class="w-full h-full rounded-full"
                                alt=""
                                :src="item.data.linkfile"
                              />
                            </div>
                            <div class="ml-3">
                              <p
                                class="text-gray-900 whitespace-no-wrap dark:text-white"
                              >
                                {{ item.data.data.title }}
                              </p>
                            </div>
                          </div>
                        </div>
                      </td>

                      <td
                        class="md:px-5 sm:px-2 border-b border-gray-200 bg-white text-sm dark:border-gray-900 dark:bg-gray-700"
                      >
                        <p
                          class="text-gray-900 whitespace-no-wrap dark:text-white"
                        >
                          {{ item.data.data.price }} $
                        </p>
                      </td>
                      <td
                        class="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:border-gray-900 dark:bg-gray-700"
                      >
                        <p class="text-gray-900 dark:text-white">
                          {{ item.data.data.description }}
                        </p>
                      </td>
                      <td
                        class="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:border-gray-900 dark:bg-gray-700"
                      >
                        <button
                          class="text-gray-900 dark:text-white hover:text-red-600 hover:underline"
                          @click="
                            (logoutvar = true),
                              (productindex = index),
                              setendit()
                          "
                        >
                          Edit
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div
                  class="px-5 py-4 bg-white dark:border-gray-900 dark:bg-gray-700 border-t flex flex-col xs:flex-row items-center xs:justify-between"
                >
                  <div class="inline-flex mt-2 xs:mt-0">
                    <button
                      @click="x == 1 ? (x = 1) : x--"
                      class="text-white bg-gradient-to-b from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Prev
                    </button>
                    <div
                      class="text-white bg-gradient-to-r from-pink-500 to-pink-700 hover:bg-gradient-to-br focus:ring-4 focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      {{ x }}
                    </div>
                    <button
                      class="text-white bg-gradient-to-r from-pink-500 to-purple-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                      @click="profiledata.length / 5 - 1 < x - 1 ? x : x++"
                    >
                      Next
                    </button>
                    <router-link to="/addadmin">
                      <button
                        class="text-green-700 hover:text-white border border-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 dark:border-green-500 dark:text-green-500 dark:hover:text-white dark:hover:bg-green-600 dark:focus:ring-green-800"
                      >
                        Add Admin
                      </button></router-link
                    >
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <TransitionRoot as="template" :show="logoutvar">
      <Dialog
        as="div"
        class="fixed z-10 inset-0 overflow-y-auto"
        @close="logoutvar = false"
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
              <form @submit.prevent="editdata">
                <div
                  class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-700"
                >
                  <div class="sm:flex sm:items-start">
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <DialogTitle
                        as="h3"
                        class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                      >
                      </DialogTitle>
                      <div class="mt-2">
                        <div>
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium md:mt-0 mt-16 text-gray-900 dark:text-white text-left"
                            >Title</label
                          >
                          <div class="flex mb-5">
                            <input
                              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              disabled
                              :value="profiledata[productindex].data.data.title"
                            />
                            <p
                              class="text-sm px-3 py-2 text-gray-500 dark:text-white"
                            >
                              To
                            </p>
                            <input
                              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              required
                              v-model="title"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white text-left"
                            >Price</label
                          >
                          <div class="flex mb-5">
                            <input
                              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              disabled
                              :value="profiledata[productindex].data.data.price"
                            />
                            <p
                              class="text-sm px-3 py-2 text-gray-500 dark:text-white"
                            >
                              To
                            </p>
                            <input
                              class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              oninput="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                              required
                              v-model="price"
                            />
                          </div>
                        </div>
                        <div>
                          <label
                            for="password"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >Description</label
                          >
                          <div class="md:flex mb-5">
                            <textarea
                              class="h-36 w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              disabled
                              :value="
                                profiledata[productindex].data.data.description
                              "
                            />
                            <p
                              class="text-sm px-3 py-2 my-auto text-gray-500 dark:text-white"
                            >
                              To
                            </p>
                            <textarea
                              class="h-36 w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                              required
                              v-model="description"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse dark:bg-gray-700"
                >
                  <button
                    type="submit"
                    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Submit
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
              </form>
            </div>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>
  </div>
</template>

<script>
import { collection, getDocs } from "firebase/firestore";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../plugin/index.js";
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
  async mounted() {
    
    const querySnapshot = await getDocs(collection(db, "product"));
    querySnapshot.forEach((doc) => {
      this.profiledata.push({ id: doc.id, data: doc.data() });
    });
    this.show = true;
  },
  data() {
    return {
      profiledata: [],
      admin: [],
      show: false,
      x: 1,
      logoutvar: false,
      productindex: "",
      description: "",
      price: "",
      title: "",
    };
  },
  methods: {
    setendit() {
      this.description =
        this.profiledata[this.productindex].data.data.description;
      this.title = this.profiledata[this.productindex].data.data.title;
      this.price = this.profiledata[this.productindex].data.data.price;
    },
    async editdata() {
      this.show = false;
      this.profiledata[this.productindex].data.data.description =
        this.description;
      this.profiledata[this.productindex].data.data.title = this.title;
      this.profiledata[this.productindex].data.data.price = Number(this.price);
      const citiesRef = collection(db, "product");
      await setDoc(doc(citiesRef, this.profiledata[this.productindex].id), {
        data: this.profiledata[this.productindex].data.data,
        linkfile: this.profiledata[this.productindex].data.linkfile,
        stock: this.profiledata[this.productindex].data.stock,
      });
      this.show = true;
      this.show = true;
      this.$router.replace("/");
      this.logoutvar = false;
    },
  },
};
</script>

<style></style>
