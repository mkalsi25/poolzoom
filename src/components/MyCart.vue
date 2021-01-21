<template>
  <div>
    <div
      v-if="isOpen"
      class="fixed inset-0 transition-opacity block lg:hidden"
      aria-hidden="true"
    >
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
    </div>
    <div
      class="min-h-screen fixed top-0 left-0 w-80 bg-white block lg:hidden"
      v-if="isOpen"
    >
      <button
        @click="isOpen = !isOpen"
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
      <div
        class="py-1 px-4"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div
          v-if="carts.length == 0"
          class="h-mob flex items-center justify-center"
        >
          <div class="m-1 p-2 border">
            <svg
              class="h-24 w-auto mx-auto text-black-80 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M11.476 8.853c-.469-.288-.616-.903-.328-1.372l3.004-5.004c.191-.312.517-.477.849-.477.776 0 1.259.855.851 1.519l-3.005 5.005c-.294.479-.91.611-1.371.329zm8.786 2.147l-.016.041-3.598 8.959h-9.296l-3.598-8.961-.015-.039h4.266c.92 1.247 2.372 2 3.994 2 1.596 0 3.06-.741 3.998-2h4.265zm3.738-2h-9.098l-.351.569c-.548.896-1.503 1.431-2.553 1.431-1.202 0-2.359-.72-2.812-2h-9.186v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.234-.481.722-.786 1.256-.786h.642v-2zm-14 9c0 .552-.447 1-1 1s-1-.448-1-1v-3c0-.552.447-1 1-1s1 .448 1 1v3zm6 0c0 .552-.447 1-1 1s-1-.448-1-1v-3c0-.552.447-1 1-1s1 .448 1 1v3zm-3 0c0 .552-.447 1-1 1s-1-.448-1-1v-3c0-.552.447-1 1-1s1 .448 1 1v3z"
              />
            </svg>
            <h4 class="text-center">Empty</h4>
          </div>
        </div>
        <div v-else class="max-h-mob h-full overflow-y-auto mb-2">
          <div
            class="border w-full rounded my-3"
            role="menuitem"
            v-for="(cart, index) in carts"
            :key="index"
          >
            <div class="flex items-start p-2">
              <img :src="cart.img" />
              <div class="px-2">
                <h3 class="text-base font-semibold">
                  {{ cart.title }}
                </h3>
                <span class="font-normal">${{ cart.price }}.00</span>

                <p class="text-sm font-normal">In Net Department</p>
              </div>
              <div>
                <button
                  class="outline-none focus:outline-none"
                  @click="del(index)"
                >
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7 0H13C14.1046 0 15 0.89543 15 2V3H18C19.1046 3 20 3.89543 20 5V7C20 8.10457 19.1046 9 18 9H17.9199L17 20C17 21.1046 16.1046 22 15 22H5C3.89543 22 3 21.1046 3.00345 20.083L2.07987 9H2C0.89543 9 0 8.10457 0 7V5C0 3.89543 0.89543 3 2 3H5V2C5 0.89543 5.89543 0 7 0ZM2 5H5H15H18V7H2V5ZM4.08649 9H15.9132L15.0035 19.917L15 20H5L4.08649 9ZM13 2V3H7V2H13Z"
                      fill="#40434C"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="flex w-full text-black-80">
          <span class="mr-auto block w-full"
            >Subtotal ( {{ carts.length }} items)</span
          >
          <span class="ml-auto font-semibold">${{ total }}.00</span>
        </div>
        <div class="block w-full py-5">
          <button
            class="w-full rounded-full block border-black-80 border px-2 py-3 text-center my-2"
          >
            View Cart
          </button>
          <button
            class="w-full rounded-full block bg-primary text-white px-2 py-3 text-center my-2"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
    <div
      class="origin-top-right absolute right-0 mt-8 mr-6 w-80 rounded-md shadow-md bg-white hidden lg:block"
    >
      <div
        class="py-1 px-4"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <div
          v-if="carts.length == 0"
          class="h-96 flex items-center justify-center"
        >
          <div class="m-1 p-2 border">
            <svg
              class="h-24 w-auto mx-auto text-black-80 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M11.476 8.853c-.469-.288-.616-.903-.328-1.372l3.004-5.004c.191-.312.517-.477.849-.477.776 0 1.259.855.851 1.519l-3.005 5.005c-.294.479-.91.611-1.371.329zm8.786 2.147l-.016.041-3.598 8.959h-9.296l-3.598-8.961-.015-.039h4.266c.92 1.247 2.372 2 3.994 2 1.596 0 3.06-.741 3.998-2h4.265zm3.738-2h-9.098l-.351.569c-.548.896-1.503 1.431-2.553 1.431-1.202 0-2.359-.72-2.812-2h-9.186v2h.643c.535 0 1.021.304 1.256.784l4.101 10.216h12l4.102-10.214c.234-.481.722-.786 1.256-.786h.642v-2zm-14 9c0 .552-.447 1-1 1s-1-.448-1-1v-3c0-.552.447-1 1-1s1 .448 1 1v3zm6 0c0 .552-.447 1-1 1s-1-.448-1-1v-3c0-.552.447-1 1-1s1 .448 1 1v3zm-3 0c0 .552-.447 1-1 1s-1-.448-1-1v-3c0-.552.447-1 1-1s1 .448 1 1v3z"
              />
            </svg>
            <h4 class="text-center">Empty</h4>
          </div>
        </div>
        <div v-else class=" h-full">
          <div
            class="border w-full rounded my-3"
            role="menuitem"
            v-for="(cart, index) in carts.slice(0, 3)"
            :key="index"
          >
            <div class="flex items-start p-2">
              <img :src="cart.img" />
              <div class="px-2">
                <h3 class="text-base font-semibold">
                  {{ cart.title }}
                </h3>
                <span class="text-sm font-normal">${{ cart.price }}.00</span>
              </div>
              <div>
                <button
                  class="outline-none focus:outline-none"
                  @click="del(index)"
                >
                  <svg
                    width="20"
                    height="22"
                    viewBox="0 0 20 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M7 0H13C14.1046 0 15 0.89543 15 2V3H18C19.1046 3 20 3.89543 20 5V7C20 8.10457 19.1046 9 18 9H17.9199L17 20C17 21.1046 16.1046 22 15 22H5C3.89543 22 3 21.1046 3.00345 20.083L2.07987 9H2C0.89543 9 0 8.10457 0 7V5C0 3.89543 0.89543 3 2 3H5V2C5 0.89543 5.89543 0 7 0ZM2 5H5H15H18V7H2V5ZM4.08649 9H15.9132L15.0035 19.917L15 20H5L4.08649 9ZM13 2V3H7V2H13Z"
                      fill="#40434C"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div class="pb-3">
          <span v-if="carts.length > 3" class="text-black-80 font-medium "
            >+{{ carts.length - 3 }} more
          </span>
        </div>
        <div class="flex w-full text-black-80">
          <span class="mr-auto block w-full"
            >Subtotal ( {{ carts.length }} items)</span
          >
          <span class="ml-auto font-semibold">${{ total }}.00</span>
        </div>
        <div class="block w-full py-5">
          <button
            class="w-full rounded-full block border-black-80 border px-2 py-3 text-center my-2"
          >
            View Cart
          </button>
          <button
            class="w-full rounded-full block bg-primary text-white px-2 py-3 text-center my-2"
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyCart",
  props: {
    carts: {
      type: Array,
      required: true,
    },
  },
  computed: {
    total: function() {
      var sum = this.carts.reduce((index, item) => index + item.price, 0);
      return sum;
    },
  },
  methods: {
    del($id) {
      this.carts.splice($id, 1);
    },
  },
  data() {
    return {
      isOpen: true,
    };
  },
};
</script>

<style></style>
