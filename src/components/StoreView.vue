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
                    <th
                      class="px-5 py-3 border-b-2 border-gray-200 dark:border-gray-900 bg-gray-100 dark:bg-gray-800 dark:text-white text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      Totle Price
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, index) in producttable" :key="index">
                    <td
                      class="py-5 border-b border-gray-200 bg-white dark:border-gray-900 dark:bg-gray-700 text-sm"
                    >
                      <div class="ml-3">
                        <div class="flex items-center">
                          <div class="flex-shrink-0 w-10 h-10">
                            <img class="w-full h-full rounded-full" alt="" />
                          </div>
                          <div class="ml-3">
                            <p
                              class="text-gray-900 whitespace-no-wrap dark:text-white"
                            ></p>
                          </div>
                        </div>
                      </div>
                    </td>

                    <td
                      class="md:px-5 sm:px-2 border-b border-gray-200 bg-white text-sm dark:border-gray-900 dark:bg-gray-700"
                    >
                      <p
                        class="text-gray-900 whitespace-no-wrap dark:text-white"
                      ></p>
                    </td>
                    <td
                      class="px-5 py-5 border-b border-gray-200 bg-white text-sm dark:border-gray-900 dark:bg-gray-700"
                    >
                      <p
                        class="text-gray-900 whitespace-no-wrap dark:text-white"
                      ></p>
                    </td>
                    <td
                      class="md:px-5 sm:px-2 py-5 border-b border-gray-200 bg-white text-sm dark:border-gray-900 dark:bg-gray-700"
                    >
                      <p
                        class="text-gray-900 whitespace-no-wrap dark:text-white"
                      ></p>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div
                class="px-5 py-4 bg-white dark:border-gray-900 dark:bg-gray-700 border-t flex flex-col xs:flex-row items-center xs:justify-between"
              >
                <div class="inline-flex mt-2 xs:mt-0"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
