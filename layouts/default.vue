<template>
<div>
        <!-- Navigation -->
        <nav class="bg-white py-2.5 sticky top-0 z-50 shadow-md">
        <div class="max-w-7xl mx-auto px-4 flex justify-between items-center">
            <a href="/" class="text-gray-900 hover:text-gray-700">Larsen Bi Konsult</a>
            <div class="md:space-x-5 flex items-center">
                <a href="/about" class="hover:text-gray-900 hover:underline font-bold">Om oss</a>
                <a href="/#kontakt"
                    class="md:bg-black md:text-white font-bold text-md px-5 py-3 rounded md:hover:text-black md:border md:border-black md:hover:bg-white">Kontakt
                    Oss</a>
            </div>
        </div>
    </nav>
    <NuxtPage/>
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
                    <a href="https://linkedin.com/in/mathiaslarseen" target="_blank"
                        class="hover:underline">LinkedIn</a>
                </div>
                <div class="md:col-span-1 lg:col-span-1">
                    <a href="/tos"
                        class="hover:underline">Personvernspolicy</a>
                </div>
            </div>
            <div class="border-t text-center border-gray-700 mt-6 pt-4">
                <p>© 2024 Larsen BI Konsult AS</p>
            </div>
        </div>
    </footer>
</div>
</template>