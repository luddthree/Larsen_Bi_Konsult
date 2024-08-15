export default defineNuxtPlugin((nuxtApp) => {
    if (process.env.NODE_ENV !== 'production') {
      return
    }
  
    const gtagId = nuxtApp.$config.public.gtagId
  
    window.dataLayer = window.dataLayer || [];
    function gtag() { dataLayer.push(arguments); }
    gtag('js', new Date());
    gtag('config', gtagId);
  
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${gtagId}`;
    script.async = true;
    document.head.appendChild(script);
  });
  