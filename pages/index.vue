<template>





    <!-- First section, intro -->
    <div id="top" class="relative w-full h-screen">
        <img src="https://www.opendatasoft.com/wp-content/uploads/2023/04/Blog-thumbnail-1.png" alt="Full Screen Image"
            class="absolute inset-0 object-cover w-full h-full">
        <div class="absolute inset-0 bg-black opacity-70"></div>
        <div class="relative flex items-center justify-center h-full">
            <section class="text-center py-20 px-4">
                <div class="flex items-center justify-center min-h-screen p-4">
                    <div class="text-center max-w-4xl mx-auto p-10">
                        <h1 class="text-3xl md:text-4xl font-bold mb-2 text-white">
                            Trenger du bistand innenfor.. </h1>
                            <h1 class="text-xl md:text-2xl font-bold mb-5 text-white">
                            Business Intelligence, datavarehus, implementering av
                            rapporteringsverktøy eller utarbeidelse av rapporter? </h1>
                        <p class="text-md md:text-lg text-gray-300 mb-3">
                            Larsen BI Konsult AS er klar til å bistå i prosjektene som hjelper din bedrift i å knytte
                            forretningsprosessene deres med data, slik at dere kan maksimere beslutningsgrunnlag,
                            effektivisere prosesser og skaffe den nødvendige oversikten.</p>
                            <p class="text-md md:text-lg text-gray-300 mb-8">

                            Ta kontakt i dag for en uforpliktende prat om hvordan deres bedrift kan dra full nytte av
                            dataene deres! </p>
                        <a href="#kontakt"
                            class=" border border-white text-white font-bold text-md md:text-md px-4 md:px-5 py-2 md:py-3 rounded hover:bg-white hover:text-black">Kontakt
                            Oss</a>
                    </div>

                </div>

            </section>
        </div>
    </div>



    <!-- secound section, services -->
    <div class=" bg-gray-100 py-20 px-4 md:p-20 flex flex-col md:flex-row items-center justify-center">
        <div class="flex-1 py-20 md:py-40 text-center md:text-left">
            <h1 class="text-3xl sm:text-5xl font-bold text-gray-800 mb-4">Hva kan vi hjelpe din bedrift med?</h1>
            <p class="text-md text-gray-600 mb-8">Vi tilbyr hjelp med Business Intelligence, datavarehus, og
                rapporteringsverktøy som PowerBI for å forbedre beslutningsgrunnlag og effektivisere prosesser
                gjennom bedre datautnyttelse og oversikt.</p>
            <div class="space-y-4 sm:space-y-0 sm:space-x-4">
                <a href="#kontakt"
                    class="bg-transparent border border-black text-black px-8 py-3 rounded hover:bg-black hover:text-white">Kontakt
                    oss</a>
                <a href="/about" class="bg-transparent text-black px-8 py-3 rounded hover:underline inline-flex items-center">
                    Les mer
                    <svg xmlns="http://www.w3.org/2000/svg" height="15" width="15" viewBox="0 0 320 512" class="ml-2">
                        <path
                            d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z" />
                    </svg>
                </a>
            </div>
        </div>
        <div class="flex-1 md:px-32">
            <img src="/larsen.jpg" alt="Product Image" class="max-w-full h-auto rounded-full">
        </div>
    </div>



    <!-- third section, contact -->
    <div id="kontakt" class="flex items-center justify-center min-h-screen bg-gray-300 p-4">
        <div class="max-w-xl mx-auto p-6 md:p-10">
            <h1 class="text-2xl md:text-3xl font-bold mb-3">
                Kontakt oss?
            </h1>
            <p class="text-gray-700 mb-2 text-sm md:text-base">Send en epost til:</p>
            <h2 class="text-3xl md:text-5xl font-bold mb-2">
                <a href="mailto:hei@larsenbikonsult.no" class="hover:underline">hei@larsenbikonsult.no</a>
            </h2>
            <!-- <p class="text-gray-700 mb-2 text-sm md:text-base">Eller ring oss på:</p>
            <h2 class="text-xl md:text-3xl font-bold">
                <a href="tel:+4790550266" class="hover:underline">(+47) 90 55 02 66</a>
            </h2> -->
        </div>
    </div>







</template>

<script setup>
function toggleMenu() {
    const menu = document.getElementById('mobileMenu');
    menu.classList.toggle('hidden');
}
</script>


<style scoped>
</style>