<template>
  <div
    class="col-span-12 lg:col-span-8 md:row-start-2 lg:row-start-1 bg-gray-50 lg:bg-transparent px-p-2 lg:px-0 group"
    :class="[
      isSticky
        ? 'fixed top-0 lg:relative w-full z-30 transition duration translate-y-0 transform ease-in-out'
        : 'transition duration translate-y-5 -mt-5 lg:-mt-0 lg:translate-y-0 transform ease-in-out',
    ]"
  >
    <input
      type="text"
      v-model="search"
      class="w-full relative top-3 rounded-full py-3 px-12 bg-white lg:bg-gray-50 outline-none focus:outline-none border focus:ring-2 focus:ring-blue-600"
      placeholder="Search for a product"
    />
    <span class="relative -top-6 left-4">
      <svg
        class="p-1 text-black-80 group-hover:text-blue-600 fill-current inline-block"
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
      >
        <path
          d="M23.809 21.646l-6.205-6.205c1.167-1.605 1.857-3.579 1.857-5.711 0-5.365-4.365-9.73-9.731-9.73-5.365 0-9.73 4.365-9.73 9.73 0 5.366 4.365 9.73 9.73 9.73 2.034 0 3.923-.627 5.487-1.698l6.238 6.238 2.354-2.354zm-20.955-11.916c0-3.792 3.085-6.877 6.877-6.877s6.877 3.085 6.877 6.877-3.085 6.877-6.877 6.877c-3.793 0-6.877-3.085-6.877-6.877z"
        />
      </svg>
    </span>
    <div v-if="search" class="w-11/12 lg:w-full h-96 absolute">
      <div class="grid grid-cols-12 bg-white rounded-drop shadow-xl ">
        <div class="col-span-12 lg:col-span-4 px-p-1 py-p-1.5">
          <span
            class="uppercase text-gray-400 text-small font-medium  tracking-widest"
            >Search Result</span
          >
          <ul class="text-menu py-p-0.2">
            <li class="py-p-0.2" v-for="(l, index) in line" :key="index">
              <a
                href="#"
                class="hover:text-blue-600 focus:text-blue-600 outline-none focus:outline-none"
              >
                <strong>{{ search }}</strong
                >{{ l }}
              </a>
            </li>
          </ul>
          <div class="py-p-1">
            <span
              class="uppercase text-gray-400 text-small font-medium  tracking-widest"
              >Categories</span
            >
            <ul class="text-menu py-p-0.2">
              <li>Chemical</li>
            </ul>
          </div>
          <span
            class="uppercase text-gray-400 text-small font-medium  tracking-widest pt-3"
            >Pages</span
          >
          <ul class="text-menu py-p-0.2">
            <li class="py-p-0.2">Privacy Policy</li>
            <li class="py-p-0.2">Customer Service</li>
          </ul>
        </div>
        <div
          class="col-span-8 border-l-2 border-gray-200 px-p-1 py-p-1.5 hidden lg:block"
        >
          <div class="flex items-center">
            <span
              class="uppercase text-gray-400 text-small tracking-widest mr-auto"
              >Products</span
            >
            <span class=" text-blue-600 text-small font-medium ml-auto"
              >View all {{ this.carts.length }},000 Products</span
            >
          </div>
          <div class=" grid grid-cols-2 gap-4 py-p-1">
            <div
              class="border w-full rounded-drop"
              role="menuitem"
              v-for="(cart, index) in carts.slice(0, 4)"
              :key="index"
            >
              <div class="flex items-start p-2">
                <img :src="cart.img" />
                <div class="px-2">
                  <h3 class="font-semibold">
                    {{ cart.title }}
                  </h3>
                  <span class=" font-normal">${{ cart.price }}.00</span>
                  <p class="text-sm font-normal">In Net Department</p>
                </div>
              </div>
            </div>
          </div>
          <div class="py-p-1">
            <span
              class="uppercase text-gray-400 text-small font-medium  tracking-widest mr-auto"
              >Diagrams</span
            >
            <ul class="text-menu py-p-0.2">
              <li>No results</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    carts: {
      type: Array,
      required: true,
    },
  },
  created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      this.scrollPosition = window.scrollY;
      if (this.scrollPosition >= 100) {
        this.isSticky = true;
      } else {
        this.isSticky = false;
      }
    },
  },
  data() {
    return {
      isSticky: false,
      search: "",
      line: [
        " in all departments",
        " pole",
        "s",
        " for polaris",
        " bag",
        " poles",
        "er",
        " for polaris",
        " bag",
      ],
    };
  },
};
</script>

<style></style>
