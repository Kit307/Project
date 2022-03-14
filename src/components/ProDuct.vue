<template>
  <div class="py-6"></div>
  <div class="bg-gray-50 dark:bg-gray-700">
    <h1>This is an about admin</h1>
    <button @click="aaaa()">sdasasdasdasdas</button>
    <!-- {{ readimg(profiledata[0].data.data.filename) }}
    {{ xxxx }} -->
    <!-- <div v-show="show">
      <div
        class="max-w-sm bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700"
      >
        <a href="#">
          <img
            class="rounded-t-lg"
            :src="profiledata[0].data.linkfile"
            alt=""
          />
        </a>
        <div class="p-5">
          <a href="#">
            <h5
              class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"
            >
              Noteworthy technology acquisitions 2021
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <a
            href="#"
            class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              class="ml-2 -mr-1 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </div> -->

    <div class="container my-12 mx-auto px-4 md:px-12">
      <div class="flex flex-wrap -mx-1 lg:-mx-4">
        <!-- Column -->

        <div
          v-for="(item, index) in profiledata"
          :key="index"
          class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"
        >
          <!-- Article -->
          <article
            class="overflow-hidden rounded-lg shadow-lg bg-white dark:text-white dark:bg-gray-800"
          >
            <a href="#">
              <img
                alt="Placeholder"
                class="block h-auto w-full object-cover max-h-64 min-w-fit"
                :src="item.data.linkfile"
              />
            </a>

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
              <p class="text-grey-darker text-sm">11/1/19</p>
            </header>

            <footer
              class="flex items-center justify-between leading-none p-2 md:p-4"
            >
              <a
                class="flex items-center no-underline hover:underline text-black"
                href="#"
              >
                <img
                  alt="Placeholder"
                  class="block rounded-full"
                  src="https://picsum.photos/32/32/?random"
                />
                <p class="ml-2 text-sm dark:text-white">Author Name</p>
              </a>
              <a
                class="no-underline text-grey-darker hover:text-red-dark"
                href="#"
              >
                <span class="hidden">Like</span>
                <i class="fa fa-heart"></i>
              </a>
            </footer>
          </article>
          <!-- END Article -->
        </div>
      </div>
    </div>
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

    const querySnapshot = await getDocs(collection(db, "product"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      this.profiledata.push({ id: doc.id, data: doc.data() });
    });
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
      });
    },
  },
};
</script>

<style></style>
