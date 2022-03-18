<template>
  <div class="bg-white dark:bg-gray-600">
    <div class="h-screen bg-white dark:bg-gray-600">
      <div class="py-6"></div>

      <div class="p-8 rounded-md w-full bg-white dark:bg-gray-600">
        <div>
          <div class="-mx-4 sm:-mx-8 px-4 sm:px-8 overflow-x-auto">
            <div
              class="inline-block min-w-full shadow rounded-lg overflow-hidden"
            >
              <table class="min-w-full leading-normal">
                <thead>
                  <tr>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white text-center text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      #
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Totle
                    </th>
                  </tr>
                </thead>
                <tbody v-for="(item, index) in producttable" :key="index">
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
                              :src="item.img"
                            />
                          </div>
                          <div class="ml-3">
                            <p
                              class="text-gray-900 whitespace-no-wrap dark:text-white"
                            >
                              {{ item.data.title }}
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
                        {{ item.data.price }} $
                      </p>
                    </td>
                    <td
                      class="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:border-gray-900 dark:bg-gray-700"
                    >
                      <p
                        class="text-gray-900 whitespace-no-wrap dark:text-white"
                      >
                        {{ item.count }}
                      </p>
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
                    class="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
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
                    @click="producttable.length / 5 - 1 < x - 1 ? x : x++"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { doc, onSnapshot } from "firebase/firestore";
import { auth, db } from "../plugin/index.js";
import { collection, getDocs } from "firebase/firestore";
export default {
  data() {
    return {
      store: "",
      profiledata: [],
      producttable: [],
      x: 1,
    };
  },
  async mounted() {
    this.readdataincart();
    const querySnapshot = await getDocs(collection(db, "product"));
    querySnapshot.forEach((doc) => {
      this.profiledata.push({ id: doc.id, data: doc.data() });
    });
    this.addProducttoTable();
  },
  methods: {
    readdataincart() {
      const user = auth.currentUser;
      onSnapshot(doc(db, "bag", user.uid), (doc) => {
        this.store = doc.data();
      });
    },
    addProducttoTable() {
      this.profiledata.forEach((data) => {
        for (let index = 0; index < this.store.Product.length; index++) {
          if (this.store.Product[index].idproduct == data.id) {
            this.producttable.push({
              data: data.data.data,
              img: data.data.linkfile,
              count: this.store.Product[index].total,
              index: index,
            });
            break;
          }
        }
      });
    },
  },
};
</script>

<style></style>
