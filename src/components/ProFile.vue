<template>
  <div class="bg-gray-50 dark:bg-gray-700">
    <div class="h-screen bg-gray-50 dark:bg-gray-700 py-24">
      <!-- Container -->
      <div class="container mx-auto">
        <div class="flex justify-center px-6">
          <!-- Row -->
          <div
            class="w-full xl:w-3/4 lg:w-11/12 flex shadow-xl rounded-lg border border-gray-300 dark:border-none"
          >
            <!-- Col -->
            <div
              class="w-full h-auto bg-gray-400 hidden lg:block lg:w-5/12 bg-cover rounded-l-lg"
              style="
                background-image: url('https://source.unsplash.com/Mv9hjnEUHR4/600x800');
              "
            ></div>
            <!-- Col -->
            <div
              class="w-full lg:w-7/12 bg-white dark:text-white dark:bg-gray-800 p-5 rounded-lg lg:rounded-l-none"
            >
              <h3 class="pt-4 text-2xl text-center">Your Profile account</h3>
              <div
                class="px-8 pt-6 pb-8 mb-4 bg-white rounded dark:bg-gray-800 dark:rounded-xl dark:shadow-xl"
              >
                <div class="mb-2">
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="firstName"
                    >
                      First Name
                    </label>
                    <div class="flex">
                      <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        disabled
                        :value="profiledata.fname"
                      />
                      <button
                        type="button"
                        @click="popupsetting('fname')"
                        class="text-red-700 hover:text-white border text-sm leading-tight border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2 text-center mx-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="email"
                    >
                      Last Name
                    </label>
                    <div class="flex">
                      <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        disabled
                        :value="profiledata.lname"
                      />
                      <button
                        type="button"
                        @click="popupsetting('lname')"
                        class="text-red-700 hover:text-white border text-sm leading-tight border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2 text-center mx-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="email"
                    >
                      Phone
                    </label>
                    <div class="flex">
                      <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        disabled
                        :value="profiledata.Phone"
                      />
                      <button
                        type="button"
                        @click="popupsetting('phone')"
                        class="text-red-700 hover:text-white border text-sm leading-tight border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2 text-center mx-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                </div>

                <div class="mb-4">
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="email"
                    >
                      Email
                    </label>
                    <div class="flex mb-2">
                      <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        disabled
                        :value="profiledata.Email"
                      />
                      <button
                        type="button"
                        class="text-red-700 hover:text-white border text-sm leading-tight border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2 text-center mx-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                  <div class="mb-4 md:mr-2 md:mb-0">
                    <label
                      class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                      for="email"
                    >
                      Money
                    </label>
                    <div class="flex">
                      <input
                        class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        disabled
                        :value="formatnumber(profiledata.totalMoney)"
                      />
                      <button
                        type="button"
                        class="text-red-700 hover:text-white border text-sm leading-tight border-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg px-5 py-2 text-center mx-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900"
                      >
                        โอน
                      </button>
                    </div>
                  </div>
                </div>

                <hr class="border-t my-10" />
                <div class="flex justify-center">
                  <button
                    type="submit"
                    @click="profile"
                    class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:ml-3 sm:w-auto sm:text-sm"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <div class="text-white">{{ profiledata }}</div> -->
  </div>
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
              <form @submit.prevent="editdata(popuptext[1])">
                <div
                  class="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 dark:bg-gray-700"
                >
                  <div class="sm:flex sm:items-start">
                    <div class="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                      <DialogTitle
                        as="h3"
                        class="text-lg leading-6 font-medium text-gray-900 dark:text-white"
                      >
                        {{ popuptext[0] }}
                      </DialogTitle>
                      <div class="mt-2">
                        <div class="flex">
                          <input
                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            disabled
                            :value="popuptext[1]"
                          />
                          <p
                            class="text-sm px-3 py-2 text-gray-500 dark:text-white"
                          >
                            To
                          </p>
                          <input
                            v-if="phonenum"
                            v-model="input"
                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                            maxlength="10"
                            minlength="10"
                          />
                          <input
                            v-model="input"
                            v-else
                            class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                            required
                          />
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
import { collection, doc, setDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../plugin/index.js";
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
    this.readData();
  },
  data() {
    return {
      profiledata: "",
      logoutvar: false,
      popuptext: [],
      phonenum: false,
      input: "",
    };
  },
  methods: {
    async profile() {
      const user = auth.currentUser;
      const citiesRef = collection(db, "cities");
      await setDoc(doc(citiesRef, user.uid), {
        name: this.profiledata.fname + "  " + this.profiledata.lname,
        fname: this.profiledata.fname,
        lname: this.profiledata.lname,
        Admin: this.profiledata.Admin,
        Phone: this.profiledata.Phone,
        UID: user.uid,
        Email: user.email,
        totalMoney: this.profiledata.totalMoney,
      });
    },
    async readData() {
      const user = auth.currentUser;
      await onSnapshot(doc(db, "cities", user.uid), (doc) => {
        console.log(doc.data());
        this.profiledata = doc.data();
      });
    },
    formatnumber(number) {
      return new Intl.NumberFormat().format(number);
    },
    popupsetting(i) {
      this.logoutvar = true;
      switch (i) {
        case "fname":
          this.popuptext = ["Edit First Name ?", this.profiledata.fname];
          this.phonenum = false;
          break;
        case "lname":
          this.popuptext = ["Edit Last Name ?", this.profiledata.lname];
          this.phonenum = false;
          break;
        case "phone":
          this.popuptext = ["Edit Phone Number ?", this.profiledata.Phone];
          this.phonenum = true;
          break;
        default:
          break;
      }
    },
    editdata(i) {
      console.log(i, this.input);
      if (this.profiledata.fname == i) {
        this.profiledata.fname = this.input;
        this.input = "";
      }
      if (this.profiledata.lname == i) {
        this.profiledata.lname = this.input;
        this.input = "";
      }
      if (this.profiledata.Phone == i) {
        this.profiledata.Phone = this.input;
        this.input = "";
      }
      this.logoutvar = false;
    },
  },
};
</script>

<style></style>
