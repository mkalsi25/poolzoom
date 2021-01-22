<template>
  <div class="pt-12 bg-black-80">
    <div class="py-6 mx-6 md:mx-8 lg:mx-24 bg-black-60">
      <div
        class="grid grid-cols-1 lg:flex gap-8 justify-items-stretch items-center justify-center"
      >
        <div>
          <h4
            class="text-white text-center lg:text-left text-product font-semibold"
          >
            Need Help?
          </h4>
        </div>
        <div class="px-3">
          <button
            class="rounded-full px-5 py-4 outline-none focus:outline-none w-full text-white border-2 border-white flex items-center"
          >
            <svg
              class="p-1 mx-1 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M6.176 1.322l2.844-1.322 4.041 7.89-2.724 1.341c-.538 1.259 2.159 6.289 3.297 6.372.09-.058 2.671-1.328 2.671-1.328l4.11 7.932s-2.764 1.354-2.854 1.396c-7.862 3.591-19.103-18.258-11.385-22.281zm1.929 1.274l-1.023.504c-5.294 2.762 4.177 21.185 9.648 18.686l.971-.474-2.271-4.383-1.026.5c-3.163 1.547-8.262-8.219-5.055-9.938l1.007-.497-2.251-4.398z"
              />
            </svg>
            Call Us
          </button>
        </div>
        <div class="px-3">
          <button
            class="rounded-full px-5 py-4 outline-none focus:outline-none w-full text-white border-2 border-white flex items-center"
          >
            <svg
              class="p-1 mx-1 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M0 3v18h24v-18h-24zm6.623 7.929l-4.623 5.712v-9.458l4.623 3.746zm-4.141-5.929h19.035l-9.517 7.713-9.518-7.713zm5.694 7.188l3.824 3.099 3.83-3.104 5.612 6.817h-18.779l5.513-6.812zm9.208-1.264l4.616-3.741v9.348l-4.616-5.607z"
              />
            </svg>
            Email Us
          </button>
        </div>
        <div class="px-3">
          <button
            class="rounded-full px-5 py-4 outline-none focus:outline-none w-full text-white border-2 border-white flex items-center"
          >
            <svg
              class="p-1 mx-1 text-white fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm1.25 17c0 .69-.559 1.25-1.25 1.25-.689 0-1.25-.56-1.25-1.25s.561-1.25 1.25-1.25c.691 0 1.25.56 1.25 1.25zm1.393-9.998c-.608-.616-1.515-.955-2.551-.955-2.18 0-3.59 1.55-3.59 3.95h2.011c0-1.486.829-2.013 1.538-2.013.634 0 1.307.421 1.364 1.226.062.847-.39 1.277-.962 1.821-1.412 1.343-1.438 1.993-1.432 3.468h2.005c-.013-.664.03-1.203.935-2.178.677-.73 1.519-1.638 1.536-3.022.011-.924-.284-1.719-.854-2.297z"
              />
            </svg>
            Quick Help
          </button>
        </div>
        <div>
          <h4
            class="text-white w-56 text-center lg:text-left font-semibold text-submenu mx-auto"
          >
            Customer Service is open Monday-Friday, 9AM-6PM CT
          </h4>
        </div>
      </div>
    </div>
    <div class="py-12 px-4 md:px-48 border-b-2 border-black-60">
      <div class="grid grid-cols-2 gap-8 md:grid-cols-3 justify-items-center">
        <ul class="text-white text-submenu font-semibold">
          <li>Order Tracking</li>
          <li>Shipping Info</li>
          <li>Return Policy</li>
        </ul>
        <ul class="text-white text-submenu font-semibold">
          <li>About Us</li>
          <li>Locations</li>
          <li>News</li>
        </ul>
        <ul class="text-white text-submenu font-semibold">
          <li>Privacy Policy</li>
          <li>PoolZoom Blog</li>
          <li>FAQ</li>
        </ul>
      </div>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3">
      <div class="p-5 border-b-2 md:border-r-2 border-black-60">
        <div class="grid grid-cols-4 gap-4">
          <img src="" alt="" />
        </div>
      </div>
      <div class="p-5 border-b-2 md:border-r-2 border-black-60">
        <label class="text-black-20">Sign up for savings and tips</label>
        <div class="grid items-center py-4">
          <input
            type="email"
            class="w-full col-start-1 row-start-1 bg-white p-4 rounded-full outline-none focus:outline-none"
            placeholder="Your email"
          />
          <div class="ml-auto col-start-1 row-start-1">
            <button
              class="px-6 py-3 mr-1 bg-primary rounded-full outline-none focus:outline-none text-center text-white"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <div class="p-5"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style></style>
