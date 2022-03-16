<template>
  <div class="py-6"></div>
  <div class="h-screen bg-orange-600" v-show="!show"></div>
  <div class="bg-gray-50 dark:bg-gray-700 dark:text-white text-black">
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
          <router-link to="/productdetel/1">
            <button
              :to="'/productdetel/' + 1"
              class="no-underline hover:underline text-black"
            >
              <p class="ml-2 text-sm dark:text-white">Author Name</p>
            </button>
          </router-link>
        </div>
      </div>
    </div>
    <router-view :key="$route.path"></router-view>
  </div>
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
      xxxx: "",
      show: false,
    };
  },
  methods: {
    async readData(i) {
      await onSnapshot(doc(db, "product", i + ""), (doc) => {
        console.log(doc.data());
      });
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

<style></style>
