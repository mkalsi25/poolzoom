<template>
  <div class="bg-white fixed top-0 w-full z-50">
    <div class="grid grid-cols-12 items-center ">
      <div
        class="col-span-6 lg:col-span-2 col-start-1 row-start-1 px-4 py-2 lg:py-6 flex"
      >
        <button
          @click="isMenu = !isMenu"
          class="inline-block lg:hidden outline-none focus:outline-none mr-2"
        >
          <svg
            class="p-1"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z" />
          </svg>
        </button>
        <img src="@/assets/Frame.png" class="hidden lg:block" />
        <img src="@/assets/logo-mobile.png" class="block lg:hidden" />
      </div>
      <Search :carts="carts" />
      <div
        class="col-span-6 lg:col-span-2 col-start-7 row-start-1 flex items-center ml-auto px-4 py-2 lg:py-6"
      >
        <div class="px-1">
          <button
            @click="account = !account"
            @mouseenter="account = !account"
            class="p-2 rounded-full hover:bg-gray-100 outline-none focus:outline-none"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              fill-rule="evenodd"
              clip-rule="evenodd"
            >
              <path
                d="M12 0c6.623 0 12 5.377 12 12s-5.377 12-12 12-12-5.377-12-12 5.377-12 12-12zm8.127 19.41c-.282-.401-.772-.654-1.624-.85-3.848-.906-4.097-1.501-4.352-2.059-.259-.565-.19-1.23.205-1.977 1.726-3.257 2.09-6.024 1.027-7.79-.674-1.119-1.875-1.734-3.383-1.734-1.521 0-2.732.626-3.409 1.763-1.066 1.789-.693 4.544 1.049 7.757.402.742.476 1.406.22 1.974-.265.586-.611 1.19-4.365 2.066-.852.196-1.342.449-1.623.848 2.012 2.207 4.91 3.592 8.128 3.592s6.115-1.385 8.127-3.59zm.65-.782c1.395-1.844 2.223-4.14 2.223-6.628 0-6.071-4.929-11-11-11s-11 4.929-11 11c0 2.487.827 4.783 2.222 6.626.409-.452 1.049-.81 2.049-1.041 2.025-.462 3.376-.836 3.678-1.502.122-.272.061-.628-.188-1.087-1.917-3.535-2.282-6.641-1.03-8.745.853-1.431 2.408-2.251 4.269-2.251 1.845 0 3.391.808 4.24 2.218 1.251 2.079.896 5.195-1 8.774-.245.463-.304.821-.179 1.094.305.668 1.644 1.038 3.667 1.499 1 .23 1.64.59 2.049 1.043z"
              />
            </svg>
          </button>
          <MyAccount v-if="account" />
        </div>
        <div class="px-1">
          <span
            class="inline-block h-4 w-4 text-xs bg-blue-500 text-white text-center rounded-full relative -top-4 left-10
      "
            >{{ this.carts.length }}</span
          >
          <button
            @click="isOpen = !isOpen"
            @mouseenter="isOpen = !isOpen"
            class="p-2 rounded-full outline-none focus:outline-none hover:bg-gray-100 focus:bg-gray-100"
          >
            <svg
              width="21"
              height="20"
              viewBox="0 0 21 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.07125 2.00254C3.89365 2.00216 3.72244 2.02226 3.55976 2.06048C3.33674 1.56893 3.04216 1.12794 2.70711 0.792893C2.13843 0.224221 1.24155 0 0 0V2C0.758448 2 1.1949 2.10911 1.29289 2.20711C1.67086 2.58508 2 3.35306 2 4L2.01005 4.14142L2.98992 11.0005C1.35036 11.0856 0.0801976 12.3588 0.00122858 13.9504L0 15C0.0968212 16.6439 1.36275 17.9085 2.94324 17.9984L3.17026 17.9987C3.58174 19.1646 4.69331 20 6 20C7.30622 20 8.41746 19.1652 8.82929 18H11.1707C11.5825 19.1652 12.6938 20 14 20C15.6569 20 17 18.6569 17 17C17 15.3431 15.6569 14 14 14C12.6938 14 11.5825 14.8348 11.1707 16H8.82929C8.41746 14.8348 7.30622 14 6 14C4.69378 14 3.58254 14.8348 3.17071 16H3C2.49001 15.9694 2.03254 15.5124 1.99821 14.9401L2 14C2.02697 13.4813 2.48131 13.027 3.04955 12.9988L5.02369 12.9993L5.038 13H15.1169L15.2645 12.9532C16.0227 12.7126 16.6296 12.1416 16.917 11.4025L17.0224 11.194L17.3647 10.5159C17.7188 9.81392 18.0729 9.11076 18.418 8.4238C19.2632 6.74107 19.7948 5.67166 19.9125 5.40906C20.5171 4.06045 19.2924 3.02246 18.0407 3.00036L4.07125 2.00254ZM14.7694 11H5.11287C5.04866 10.9822 4.99973 10.9278 4.99015 10.86L4.01026 4.00073L17.8934 4.99493C17.6505 5.49032 17.2089 6.37516 16.6308 7.52609L16.6163 7.55493C16.2863 8.21186 15.9326 8.91405 15.579 9.61507L15.2371 10.2923L15.1076 10.5488L15.0588 10.6622C15.0065 10.8078 14.9028 10.9274 14.7694 11ZM14 18C14.5523 18 15 17.5523 15 17C15 16.4477 14.5523 16 14 16C13.4477 16 13 16.4477 13 17C13 17.5523 13.4477 18 14 18ZM7 17C7 17.5523 6.55228 18 6 18C5.44772 18 5 17.5523 5 17C5 16.4477 5.44772 16 6 16C6.55228 16 7 16.4477 7 17Z"
                fill="#40434C"
              />
            </svg>
          </button>
        </div>
        <MyCart v-if="isOpen" :carts="carts" />
      </div>
      <div
        class="col-span-12 bg-gray-50 py-0 lg:py-4 lg:flex justify-between px-16"
      >
        <div class="absolute top-0 left-0">
          <div
            v-if="isMenu"
            class="fixed inset-0 transition-opacity"
            aria-hidden="true"
          >
            <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
          </div>
          <div
            class="fixed min-h-screen z-40 left-0 top-0 bg-white w-80 flex lg:hidden"
            v-if="isMenu"
          >
            <ul class="w-full">
              <button
                @click="isMenu = !isMenu"
                class="outline-none focus:outline-none p-2"
              >
                <svg
                  class="p-1"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"
                  />
                </svg>
              </button>
              <li
                class="w-full p-1 text-xl font-semiboldw"
                v-for="(item, index) in menuItems"
                :key="index"
              >
                <a href="#" class="flex items-center">
                  <span class="mr-auto p-1">
                    {{ item.title }}
                  </span>
                  <span class="ml-auto">
                    <svg
                      class="p-1"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                    >
                      <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
                    </svg>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div
          v-for="(item, index) in menuItems"
          :key="index"
          class="hidden lg:flex"
        >
          <button
            @click="isClose = !isClose"
            @mouseenter="isClose = !isClose"
            class="flex justify-between hover:text-blue-600 bg-transparent focus:text-blue-600 outline-none focus:outline-none"
          >
            {{ item.title }}
          </button>
          <div v-if="isClose">
            <div
              v-if="item.accessories"
              class="origin-top-right absolute mt-10 -ml-16 max-w-xl w-full rounded-md shadow-lg bg-white"
            >
              <div
                class=" px-4"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="options-menu"
              >
                <div class="h-full grid grid-cols-2">
                  <ul class="px-3 font-semibold py-1">
                    <li
                      class="py-1"
                      v-for="(i, index) in item.accessories"
                      :key="index"
                    >
                      {{ i.title }}
                    </li>
                  </ul>
                  <ul class="border-l-2 border-gray-200 font-light px-4 py-1">
                    <li
                      class="py-1"
                      v-for="(i, index) in item.accessories"
                      :key="index"
                    >
                      {{ i.title }}
                    </li>
                  </ul>
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
import MyCart from "@/components/MyCart";
import MyAccount from "@/components/MyAccount";
import Search from "@/components/Search";
export default {
  name: "NavBar",
  components: {
    MyCart,
    MyAccount,
    Search,
  },
  data() {
    return {
      isOpen: false,
      isClose: false,
      isMenu: false,
      account: false,
      activeBtn: "",
      carts: [
        {
          title: "20” Animal Leaf Rake Net with...",
          img: "/img/product.png",
          price: 24,
        },
        {
          title: "20” Animal Leaf Rake Net with...",
          img: "/img/product.png",
          price: 24,
        },
        {
          title: "20” Animal Leaf Rake Net with...",
          img: "/img/product.png",
          price: 24,
        },
        {
          title: "20” Animal Leaf Rake Net with...",
          img: "/img/product.png",
          price: 24,
        },
        {
          title: "20” Animal Leaf Rake Net with...",
          img: "/img/product.png",
          price: 24,
        },
        {
          title: "20” Animal Leaf Rake Net with...",
          img: "/img/product.png",
          price: 24,
        },
        {
          title: "20” Animal Leaf Rake Net with...",
          img: "/img/product.png",
          price: 24,
        },
      ],
      menuItems: [
        {
          title: "Chemical",
          accessories: [
            {
              title: "Exploded Equipment Diagrams",
              category: [
                "Skimmers, Drains, & Jets",
                "Skimmer Baskets",
                "Complete Skimmers",
                "Pool Wall Jets",
                "Pool Wall Jets",
                "Skimmer Accessories",
                "Complete Drains",
              ],
            },
            { title: "DE Filter Grids" },
            { title: "Filter Cartridges" },
            { title: "Filter Media & Filter Accessories" },
            { title: "Pool Repair Supplies" },
            { title: "Replacement Salt Cells" },
            { title: "PVC Pool Plumbing" },
          ],
        },
        { title: "Equipment" },
        { title: "Parts & Hardware" },
        {
          title: "Accessories",
        },
        { title: "Above Ground Pools" },
        {
          title: "Pool Covers",
        },
        { title: "Spa Supplies" },
        { title: "Brands" },
      ],
    };
  },
};
</script>

<style>
.actives {
  @apply block;
  @apply bg-yellow-500;
}
</style>
