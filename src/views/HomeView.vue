<template>
  <!-- component -->
  <div class="h-screen dark:bg-gray-700">
    <div
      class="lg:flex items-center justify-between xl:py-36 lg:py-28 md:pt-16 my-auto py-16 px-5 md:pl-10 dark:bg-gray-700"
    >
      <div class="lg:w-1/2 w-full">
        <p class="text-base leading-4 text-gray-600 dark:text-white">
          Choose your product in
        </p>
        <h1
          role="heading"
          class="md:text-5xl text-3xl font-bold leading-10 mt-3 dark:text-white text-gray-800"
        >
          Only Shop
        </h1>
        <p
          role="contentinfo"
          class="text-base leading-5 mt-5 dark:text-white text-gray-600"
        >
          We’re working on a suit of tools to make managing complex systems
          easier, for everyone for free. we can’t wait to hear what you think
        </p>
        <div class="w-56">
          <button
            onclick="toggleIt()"
            class="bg-white shadow flex items-center mt-10 rounded-full"
          >
            <div
              class="bg-white focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-gray-600 rounded-full py-4 px-6 mr-1"
              id="monthly"
            >
              Monthly
            </div>
            <div
              class="bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 focus:outline-none text-base leading-none text-white rounded-full py-4 px-6"
              id="annually"
            >
              Annually
            </div>
          </button>
        </div>
      </div>
      <div
        class="xl:w-1/2 lg:w-7/12 relative w-full lg:mt-0 mt-12 md:px-8"
        role="list"
      >
        <img
          src="https://i.ibb.co/0n6DSS3/bgimg.png"
          class="absolute w-full -ml-12 mt-24"
          alt="background circle images"
        />
        <div
          role="listitem"
          class="bg-white dark:bg-gray-800 cursor-pointer shadow rounded-lg p-8 relative z-30"
        >
          <div class="md:flex items-center justify-between">
            <h2
              class="text-2xl font-semibold leading-6 dark:text-white text-gray-800"
            >
              Starter
            </h2>
            <p
              class="text-2xl dark:text-white font-semibold md:mt-0 mt-4 leading-6 text-gray-800"
            >
              FREE
            </p>
          </div>
          <p
            class="md:w-80 text-base leading-6 mt-4 dark:text-white text-gray-600"
          >
            Full access to all features and no credit card required
          </p>
        </div>
        <div
          role="listitem"
          class="bg-white dark:bg-gray-800 cursor-pointer shadow rounded-lg mt-3 flex relative z-30"
        >
          <div
            class="w-2.5 h-auto bg-indigo-700 rounded-tl-md rounded-bl-md"
          ></div>
          <div class="w-full p-8">
            <div class="md:flex items-center justify-between">
              <h2
                class="text-2xl font-semibold leading-6 dark:text-white text-gray-800"
              >
                Personal
              </h2>
              <p
                class="text-2xl md:mt-0 mt-4 font-semibold leading-6 dark:text-white text-gray-800"
              >
                <span class="text-base text-red-600 dark:text-white font-bold"
                  >/☆*: .｡. o(≧▽≦)o .｡.:*☆</span
                >
              </p>
            </div>
            <p
              class="md:w-80 text-base leading-6 mt-4 dark:text-white text-gray-600"
            >
              Unlimited products features and dedicated support channels
            </p>
          </div>
        </div>
        <div
          role="listitem"
          class="bg-white dark:bg-gray-800 cursor-pointer shadow rounded-lg p-8 relative z-30 mt-7"
        >
          <div class="md:flex items-center justify-between">
            <h2
              class="text-2xl font-semibold leading-6 dark:text-white text-gray-800"
            >
              Make by
            </h2>
            <p
              class="text-2xl md:mt-0 mt-4 font-semibold leading-6 text-gray-800"
            >
              <span class="font-normal text-base dark:text-white">/307</span>
            </p>
          </div>
          <p
            class="md:w-80 text-base leading-6 mt-4 dark:text-white text-gray-600"
          >
            Krit Sae eaw 6304101307
          </p>
        </div>
      </div>
      <!--- more free and premium Tailwind CSS components at https://tailwinduikit.com/ --->
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
