<template>
  <div>
    <TopBar msg="Free Shipping over $75.00" />
    <NavBar />
    <div class="grid">
      <div
        class="min-h-screen bg-blue-600 bg-opacity-50 row-start-1 col-start-1 relative z-10 flex items-center"
      >
        <h3 class=" text-4xl lg:text-6xl w-56 text-white lg:px-24 px-4">
          Spring Promotion
        </h3>
      </div>
      <div class="min-h-screen row-start-1 col-start-1 relative z-0">
        <img src="@/assets/bg.jpg" class="h-full w-full object-cover" />
      </div>
    </div>
    <div
      class="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 lg:px-24 min-h-screen items-center py-8"
    >
      <div>
        <img
          src="@/assets/sd.png"
          class="w-full h-64 object-contain bg-gray-100"
        />
        <h3 class="text-xl font-semibold px-4">
          WF-6 WhisperFlo Pool Pump 1.5HP FR 115/230V
        </h3>
      </div>
      <div>
        <img
          src="@/assets/sd.png"
          class="w-full h-64 object-contain  bg-gray-100"
        />
        <h3 class="text-xl font-semibold px-4">
          WF-6 WhisperFlo Pool Pump 1.5HP FR 115/230V
        </h3>
      </div>
      <div>
        <img
          src="@/assets/sd.png"
          class="w-full h-64 object-contain  bg-gray-100"
        />
        <h3 class="text-xl font-semibold px-4">
          WF-6 WhisperFlo Pool Pump 1.5HP FR 115/230V
        </h3>
      </div>
      <div>
        <img
          src="@/assets/sd.png"
          class="w-full h-64 object-contain  bg-gray-100"
        />
        <h3 class="text-xl font-semibold px-4">
          WF-6 WhisperFlo Pool Pump 1.5HP FR 115/230V
        </h3>
      </div>
    </div>
  </div>
</template>

<script>
import TopBar from "@/components/TopBar";
import NavBar from "@/components/NavBar";
export default {
  name: "App",
  components: {
    TopBar,
    NavBar,
  },
};
</script>
