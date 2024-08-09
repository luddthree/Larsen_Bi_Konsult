<template>
  <div>
    <!-- Navigation -->
    <nav class="bg-white py-2.5 sticky top-0 z-50 shadow-md">
      <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
        <NuxtLink to="/" class="text-gray-900 hover:text-gray-700 font-bold text-lg" @click="closeMenu">Larsen BI
          Konsult</NuxtLink>
        <button @click="toggleMenu" class="md:hidden block hamburger-button">
          {{ isMenuOpen ? '✕' : '☰' }}
        </button>
        <div
          :class="{ 'hidden': !isMenuOpen, 'flex': isMenuOpen, 'flex-col': isMenuOpen, 'items-center': true, 'absolute': isMenuOpen, 'w-full': isMenuOpen, 'custom-bg': isMenuOpen, 'top-full': isMenuOpen, 'left-0': isMenuOpen, 'shadow-md': isMenuOpen, 'z-50': isMenuOpen }"
          class="md:flex md:space-x-5 rounded-b-lg">
          <NuxtLink to="/about" class="hover:text-gray-900 hover:underline font-semibold mt-4 md:mt-0"
            @click="closeMenu">Om Oss</NuxtLink>
          <NuxtLink to="/#kontakt"
            class="md:bg-black md:text-white font-semibold text-md mb-2 px-5 py-3 rounded md:hover:text-black md:border md:border-black md:hover:bg-white mt-4 md:mt-0"
            @click="closeMenu">Kontakt Oss</NuxtLink>
        </div>
      </div>
    </nav>


    <NuxtPage />
    <!-- Footer -->
    <footer class="bg-gray-800 text-white py-6">
      <div class="container mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center md:text-left">
          <div>
            <p>Org. nr. 933 220 265</p>
            <p>Rostockgata 82, 0194 Oslo, Norge</p>
          </div>

          <div class="md:col-span-1 lg:col-span-1">
            <a href="mailto:hei@larsenbikonsult.no" class="hover:underline">hei@larsenbikonsult.no</a>
          </div>
          <div class="md:col-span-1 lg:col-span-1">
            <a href="https://linkedin.com/in/mathiaslarseen" target="_blank" class="hover:underline">LinkedIn</a>
          </div>
          <div class="md:col-span-1 lg:col-span-1">
            <a href="/tos" class="hover:underline">Personvernspolicy</a>
          </div>
          <div class="md:col-span-1 lg:col-span-1">
            <p>Webutvikler:
              <a href="https://linkedin.com/in/ludvikvangli" target="_blank" class="hover:underline">Ludvik T.
                Vangli</a>
            </p>
          </div>
        </div>
        <div class="border-t text-center border-gray-700 mt-6 pt-4">
          <p>© 2024 Larsen BI Konsult AS</p>

        </div>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}
</script>


<style>
.hamburger-button {
  font-size: 25px;
  /* Icon size */
  background: none;
  border: none;
  cursor: pointer;
}

.custom-bg {
  background: rgba(255, 255, 255, 0.80);
  /* White with lower opacity */
}

@media (max-width: 768px) {
  .hamburger-button {
    display: block;
  }

  .flex-col {
    flex-direction: column;
  }
}
</style>
