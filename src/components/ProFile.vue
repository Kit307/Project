<template>
  <div class="h-screen bg-gray-50 dark:bg-gray-700 py-40">
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
              <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="firstName"
                  >
                    First Name
                  </label>
                  <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    disabled
                    :value="profiledata.fname"
                  />
                </div>
                <div class="md:ml-2">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="lastName"
                  >
                    Last Name
                  </label>
                  <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    disabled
                    :value="profiledata.lname"
                  />
                </div>
                <div class="md:ml-2">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="lastName"
                  >
                    Phone
                  </label>
                  <input
                    class="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    disabled
                    :value="profiledata.Phone"
                  />
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
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    disabled
                    :value="profiledata.Email"
                  />
                </div>
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="email"
                  >
                    Money
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    disabled
                    :value="formatnumber(profiledata.totalMoney)"
                  />
                </div>
              </div>
              <div class="mb-24"></div>
              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  aaaaaaaa
                </button>
              </div>

              <hr class="mb-6 border-t" />
            </div>
          </div>
        </div>
      </div>
    </div>
    {{ aaaa }}
  </div>
</template>

<script>
import { collection, doc, setDoc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../plugin/index.js";

export default {
  mounted() {
    this.readData();
  },
  data() {
    return {
      profiledata: "",
    };
  },
  methods: {
    async profile() {
      const user = auth.currentUser;
      const citiesRef = collection(db, "cities");
      await setDoc(doc(citiesRef, user.uid), {
        name: "Krit seaeaw",
        Admin: true,
        Phone: "0954475609",
        UID: user.uid,
        Email: user.email,
        totalMoney: 9999999,
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
  },
};
</script>

<style></style>
