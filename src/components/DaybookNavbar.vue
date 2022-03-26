<template>
  <nav
    class="relative flex flex-wrap items-center justify-between h-16 p-2 bg-secondary-700"
  >
    <router-link class="text-white" :to="{ name: 'home' }">
      <img
        src="@/assets/logo.png"
        alt="Journal logo"
        class="inline-block w-12 mx-2"
      />
      Daybook
    </router-link>
    <div class="flex">
      <button
        class="px-4 py-2 font-semibold transition-all bg-transparent border rounded text-primary-700 border-primary-700 hover:bg-primary-700 hover:text-white hover:border-transparent"
      >
        <i-fa-solid-sign-out-alt />
      </button>
    </div>
  </nav>
</template>
