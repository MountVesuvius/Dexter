<script>
  import "../app.css";
  import { onMount } from "svelte";

  onMount(() => {
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
        .then((registration) => {
            console.log('Service Worker registered:', registration);
        })
        .catch((error) => {
            console.error('Service Worker registration failed:', error);
        });
    }
  })
</script>

		<link rel="manifest" href="/static/manifest.json">
<slot />
