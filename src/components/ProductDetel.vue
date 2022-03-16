<template>
  <div class="h-screen bg-gray-200 dark:bg-gray-700 lg:pt-24 md:pt-16">
    <div
      class="container px-5 py-20 mx-auto bg-gray-200 dark:bg-gray-700 dark:text-white"
      style="cursor: auto"
    >
      <div class="lg:w-4/5 mx-auto flex flex-wrap">
        <img
          alt="ecommerce"
          class="lg:w-1/2 w-full block md:h-auto h-72 object-cover rounded-xl object-center"
          :src="sss.data.linkfile"
          style="cursor: auto; max-height: 30rem"
        />
        <div
          class="lg:w-1/2 w-full lg:pl-10 lg:py-6 md:mt-2 lg:mt-0 bg-white border-2 dark:border-gray-700 border-gray-300 rounded-lg dark:bg-gray-800 px-5"
          style="cursor: auto"
        >
          <h2
            class="text-sm title-font text-gray-500 py-5 dark:text-white tracking-widest"
            style="cursor: auto"
          ></h2>
          <h1
            class="text-gray-900 dark:text-white text-3xl title-font font-medium mb-1"
            style="cursor: auto"
          >
            {{ sss.data.data.title }}
          </h1>
          <div class="flex mb-4 mt-5">
            <span class="flex items-center">
              <svg
                v-for="index in Number(sss.data.data.rating)"
                :key="index"
                fill="currentColor"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-indigo-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path>
              </svg>

              <svg
                v-for="index in 5 - Number(sss.data.data.rating)"
                :key="index"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="w-4 h-4 text-indigo-500"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
                ></path></svg
              ><span class="text-gray-600 ml-3 dark:text-white"
                >20 Reviews</span
              >
            </span>
          </div>
          <p class="leading-relaxed mt-10">
            {{ sss.data.data.description }}
          </p>
          <div
            class="flex mt-6 items-center pb-5 border-b-2 text-black dark:border-gray-100 mb-5"
          ></div>
          <div class="flex pb-6">
            <span
              class="title-font font-medium text-2xl dark:text-white text-gray-900"
              >$ {{ sss.data.data.price }}</span
            >
            <button
              class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded"
              @click="newprofile"
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <TransitionRoot as="template" :show="!logoutvar">
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
                      Login
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
                  class="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-400 text-base font-medium text-white hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="loginzaza"
                >
                  Go to login
                </button>
                <button
                  type="button"
                  class="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  @click="logoutvar = true"
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
  <!-- {{ datacart.Product[0].idproduct }} -->
  {{ datacart }}
  <div @click="newprofile">asdsad</div>
</template>

<script>
import { collection, addDoc } from "firebase/firestore";
import { auth, db } from "../plugin/index.js";
import { onAuthStateChanged } from "firebase/auth";
import { doc, onSnapshot } from "firebase/firestore";
import { getDocs, setDoc } from "firebase/firestore";
import {
  Dialog,
  DialogOverlay,
  DialogTitle,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
export default {
  props: ["sss"],
  components: {
    Dialog,
    DialogOverlay,
    DialogTitle,
    TransitionChild,
    TransitionRoot,
  },
  async mounted() {
    this.chackLogin();
    this.readData();
    const querySnapshot = await getDocs(collection(db, "cart"));
    querySnapshot.forEach((doc) => {
      this.profiledata.push({ id: doc.id, data: doc.data() });
      // console.log(2);
    });
  },
  data() {
    return {
      productid: this.$route.params.id,
      profiledata: [],
      datacart: [],
      dataproduct: "",
      uid: "",
      login: false,
      logoutvar: true,
      cardnew: false,
    };
  },
  methods: {
    chackLogin() {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const uid = user.uid;
          this.uid = uid;
          this.login = true;
        } else {
          this.login = false;
        }
      });
    },
    async adddatatocart() {
      this.chackLogin();
      if (this.login) {
        const user = auth.currentUser;
        // Add a new document with a generated id.
        const docRef = await addDoc(collection(db, "cart"), {
          idpeople: user.uid,
          country: "Japan",
        });
        console.log("Document written with ID: ", docRef.id);
      } else {
        this.logoutvar = false;
      }
    },
    loginzaza() {
      this.$router.replace("/login");
    },
    async readData() {
      const user = auth.currentUser;
      await onSnapshot(doc(db, "cart", user.uid), (doc) => {
        this.datacart = doc.data();
      });
      const querySnapshot = await getDocs(collection(db, "cart"));
      querySnapshot.forEach((doc) => {
        this.profiledata.push({ id: doc.id, data: doc.data() });
      });
    },
    async profile() {
      const user = auth.currentUser;

      const citiesRef = collection(db, "cart");
      await setDoc(doc(citiesRef, user.uid), {
        UID: user.uid,
        Product: this.datacart.Product,
      });

      this.readData();
    },
    async newprofile() {
      const user = auth.currentUser;
      let newcart = true;
      for (let index = 0; index < this.profiledata.length; index++) {
        if (this.profiledata[index].id == user.uid) {
          newcart = false;
          break;
        }
      }
      if (newcart) {
        const citiesRef = collection(db, "cart");
        await setDoc(doc(citiesRef, user.uid), {
          UID: user.uid,
          Product: [{ idproduct: this.productid, total: 1 }],
        });
        this.cardnew = true;
        this.readData();
      } else {
        this.checkproduct();
      }
    },
    checkproduct() {
      // this.newprofile();
      let pro = true;
      for (let index = 0; index < this.datacart.Product.length; index++) {
        if (this.datacart.Product[index].idproduct == this.productid) {
          this.datacart.Product[index].total += 1;
          pro = false;
          break;
        }
      }
      if (pro) {
        this.datacart.Product.push({ idproduct: this.productid, total: 1 });
      }
      this.profile();
    },
  },
};
</script>

<style></style>
