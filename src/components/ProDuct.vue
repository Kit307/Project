<template>
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

  <div
    class="bg-gray-50 dark:bg-gray-700 dark:text-white text-black"
    v-if="showproduct"
  >
    <div class="py-6"></div>

    <h1 class="text-center pt-16 text-5xl">Product</h1>
    <div
      class="md:px-16 px-5 grid grid-cols-1 py-14 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5"
    >
      <div
        v-for="(item, index) in profiledata"
        :key="index"
        class="rounded overflow-hidden shadow-lg flex flex-col my-2 bg-gray-50 dark:bg-gray-800 dark:text-white text-black"
      >
        <img
          :src="item.data.linkfile"
          class="block h-auto w-full object-cover max-h-64 min-w-fit"
        />
        <div class="pb-4 pt-2">
          <header
            class="flex items-center justify-between leading-tight p-2 md:p-4"
          >
            <h1 class="text-lg">
              <a
                class="no-underline hover:underline dark:text-white text-black"
                href="#"
              >
                {{ item.data.data.title }}
              </a>
            </h1>
            <p class="text-grey-darker text-sm">{{ item.data.data.price }} $</p>
          </header>
          <p class="p-2 md:p-4 text-base dark:text-white text-black">
            {{ item.data.data.description }}
          </p>
        </div>
        <div class="px-6 pt-4 pb-2 text-center mt-auto">
          <router-link :to="'/productdetel/' + item.id">
            <button
              class="no-underline hover:underline text-black"
              @click="(showproduct = false), adddata(index)"
            >
              <p class="ml-2 text-sm dark:text-white">{{ item.id }}</p>
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <router-view
    :key="$route.path"
    @rtb="getButton"
    :sss="dataprom"
    v-else
  ></router-view>
</template>

<script>
import { ref, getDownloadURL } from "firebase/storage";
import { storage } from "../plugin/index.js";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../plugin/index";
import { onSnapshot, getDocs } from "firebase/firestore";
export default {
  async beforeCreate() {
    // this.readimg();
    console.log(1);
    const querySnapshot = await getDocs(collection(db, "product"));
    querySnapshot.forEach((doc) => {
      this.profiledata.push({ id: doc.id, data: doc.data() });
      // console.log(2);
    });
    console.log(3);
    this.show = true;
  },
  data() {
    return {
      profiledata: [],
      profiledata2: [],
      dataprom: "",
      show: false,
      showproduct: true,
    };
  },
  methods: {
    async readData(i) {
      await onSnapshot(doc(db, "product", i + ""), (doc) => {
        console.log(doc.data());
      });
    },
    getButton(i) {
      this.showproduct = i;
    },
    async readData2() {
      console.log("start");
      const querySnapshot = await getDocs(collection(db, "product"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        this.profiledata.push({ id: doc.id, data: doc.data() });
        console.log(1);
      });
      console.log("Done");
    },
    aaaa() {
      for (let index = 0; index < this.profiledata.length; index++) {
        console.log("loop" + index);
        // this.profiledata[index].data.data.push({ stock: 10 });
        this.readimg(
          this.profiledata[index].data.data.filename,
          index,
          this.profiledata[index].data.data
        );
      }
    },
    adddata(index) {
      this.dataprom = this.profiledata[index];
    },
    readimg(i, index, data) {
      const starsRef = ref(storage, "/image product/" + i);
      // Get the download URL
      getDownloadURL(starsRef)
        .then((url) => {
          // this.xxxx.push(url);
          this.xxxx = url;
          this.profile(index, url, data);
          // Insert url into an <img> tag to "download"
        })
        .catch((error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/object-not-found":
              // File doesn't exist
              break;
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;
            // ...
            case "storage/unknown":
              // Unknown error occurred, inspect the server response
              break;
          }
        });
    },
    async profile(i, linkfile, data) {
      console.log(i);
      const citiesRef = collection(db, "product");
      await setDoc(doc(citiesRef, i + ""), {
        data: data,
        linkfile: linkfile,
        stock: 10,
      });
    },
  },
};
</script>

<style>
.loader {
  border-top-color: #3498db;
  -webkit-animation: spinner 1.5s linear infinite;
  animation: spinner 1.5s linear infinite;
}
</style>
