<template>
  <!-- component -->
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
            <h3 class="pt-4 text-2xl text-center">Create an Account!</h3>
            <form
              @submit.prevent="reg"
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
                    id="firstName"
                    required
                    v-model="fname"
                    type="text"
                    placeholder="First Name"
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
                    id="lastName"
                    v-model="lname"
                    type="text"
                    placeholder="Last Name"
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
                    id="lastName"
                    required
                    maxlength="10"
                    minlength="10"
                    v-model="phone"
                    type="text"
                    placeholder="0812345678"
                  />
                </div>
              </div>

              <div class="mb-4 md:flex md:justify-between">
                <div class="mb-4 md:mr-2 md:mb-0">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="email"
                  >
                    Email
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    id="email"
                    required
                    type="email"
                    v-model="email"
                    placeholder="Email"
                  />
                </div>
                <div class="md:ml-2">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="c_password"
                  >
                    Password
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    id="c_password"
                    type="password"
                    required
                    v-model="password"
                    placeholder="••••••••"
                  />
                </div>
                <div class="md:ml-2">
                  <label
                    class="block mb-2 text-sm font-bold text-gray-700 dark:text-white"
                    for="password"
                  >
                    Confirm Password
                  </label>
                  <input
                    class="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    id="password"
                    required
                    type="password"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              <div class="mb-24"></div>
              <div class="mb-6 text-center">
                <button
                  class="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="submit"
                >
                  Register Account
                </button>
              </div>

              <hr class="mb-6 border-t" />
              <div class="text-center">
                <router-link to="/login">
                  <a
                    class="inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
                  >
                    Already have an account? Login!
                  </a>
                </router-link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { createUserWithEmailAndPassword, signOut } from "firebase/auth";
import { collection, doc, setDoc } from "firebase/firestore";
import { auth, db } from "../plugin/index";
export default {
  data() {
    return {
      email: "",
      password: "",
      fname: "",
      lname: "",
      phone: "",
    };
  },
  methods: {
    reg() {
      //   const auth = getAuth();
      createUserWithEmailAndPassword(auth, this.email, this.password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          this.profile();
          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ..
        });
    },

    async profile() {
      this.readUid;
      const user = auth.currentUser;
      const citiesRef = collection(db, "cities");
      await setDoc(doc(citiesRef, user.uid), {
        name: this.fname + "  " + this.lname,
        fname: this.fname,
        lname: this.lname,
        Admin: false,
        Phone: this.phone,
        UID: user.uid,
        Email: user.email,
        totalMoney: 0,
      });
      this.logout();
    },
    logout() {
      //   const auth = getAuth();
      signOut(auth)
        .then(() => {
          // Sign-outsuccessful.
          //   this.$router.push("/");
          this.$router.replace("/login");
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
