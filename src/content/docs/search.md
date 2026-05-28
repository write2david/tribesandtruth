---
title: Search Directory
template: splash
description: Search the full documentation archive instantly.
editUrl: false
lastUpdated: false
---

<div class="search-loader">
  <p>Opening documentation search index...</p>
  <div class="spinner"></div>
</div>

<script is:inline>
  (function () {
    // Set a recurring check to find Starlight's search elements
    const searchWatchdog = setInterval(() => {
      const nativeSearchButton = document.querySelector('button[data-open-modal="search"]');
      
      // If the button isn't loaded yet, do nothing and wait for the next tick
      if (!nativeSearchButton) return;

      // Found it! Kill the loop immediately so it doesn't run infinitely
      clearInterval(searchWatchdog);

      // 1. Click the button to pop open the modal
      nativeSearchButton.click();

      // 2. Extract any deep-linked queries (?q=something)
      const urlParams = new URLSearchParams(window.location.search);
      const searchQuery = urlParams.get('q');

      if (searchQuery) {
        // Wait a brief frame for the modal transition to finish, then inject text
        setTimeout(() => {
          const searchInput = document.querySelector('#starlight__search input');
          if (searchInput) {
            searchInput.value = searchQuery;
            searchInput.dispatchEvent(new Event('input', { bubbles: true }));
          }
        }, 100);
      }
    }, 50); // Checks every 50 milliseconds

    // Safety fallback: Automatically clear interval after 5 seconds if anything breaks
    setTimeout(() => clearInterval(searchWatchdog), 5000);
  })();
</script>

<style>
  /* Center the loading text and spinner on the splash canvas */
  .search-loader {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 25vh;
    gap: 1rem;
    text-align: center;
  }
  .spinner {
    width: 36px;
    height: 36px;
    border: 4px solid var(--sl-color-gray-5);
    border-top: 4px solid var(--sl-color-accent);
    border-radius: 50%;
    animation: spin 1s linear infinite;
  }
  @keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
  }
</style>