<template>
  <div
    class="origin-top-right absolute right-0 mt-2 w-56 mr-16 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5"
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
</template>

<script>
export default {
  name: "MyAccount",
};
</script>

<style></style>
