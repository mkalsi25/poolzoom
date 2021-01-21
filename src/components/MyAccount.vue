<template>
  <div>
    <div
      class="fixed min-h-screen z-40 left-0 top-0 bg-white w-80 block lg:hidden"
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
        <li class="w-full px-1 py-2 text-xl">
          <a href="#" class="flex items-center">
            <span class="mr-auto p-1">
              My Account
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
        <li class="w-full px-1 py-2 text-xl">
          <a href="#" class="flex items-center">
            <span class="mr-auto p-1">
              My orders
            </span>
          </a>
        </li>
      </ul>
    </div>
    <div
      class="origin-top-right absolute right-0 mt-2 w-56 mr-16 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 hidden lg:block"
    >
      <div
        class="py-1"
        role="menu"
        aria-orientation="vertical"
        aria-labelledby="options-menu"
      >
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600"
          role="menuitem"
          >My Account</a
        >
        <a
          href="#"
          class="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600"
          role="menuitem"
          >My Orders</a
        >
        <form method="POST" action="#">
          <button
            type="submit"
            class="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-100 hover:text-blue-600 focus:outline-none focus:bg-gray-100 focus:text-gray-900"
            role="menuitem"
          >
            Sign out
          </button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MyAccount",
  data() {
    return {
      isMenu: true,
    };
  },
};
</script>

<style></style>
