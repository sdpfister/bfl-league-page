<script>
    import { onMount } from "svelte";
    import { themeStore } from '$lib/stores';

    // let currentTheme = "light";

    onMount(() => {
    function loadCannySDK() {
      if (!document.getElementById("canny-jssdk")) {
        const f = document.getElementsByTagName("script")[0];
        const e = document.createElement("script");
        e.type = "text/javascript";
        e.async = true;
        e.id = "canny-jssdk";
        e.src = "https://canny.io/sdk.js";
        f.parentNode.insertBefore(e, f);
      }
    }

    if ("function" != typeof window.Canny) {
      const c = function() {
        c.q.push(arguments);
      };
      c.q = [];
      window.Canny = c;
      loadCannySDK();
    }

    // Here we subscribe to the themeStore
    const unsubscribe = themeStore.subscribe(currentTheme => {
      // Render the Canny board with the current theme
      Canny('render', {
        boardToken: '2ebae043-e260-0b99-b783-ed36beb8b25f',
        basePath: "/feedback",
        ssoToken: null,
        theme: currentTheme
      });
    });

    // Make sure to unsubscribe when the component is destroyed
    return () => {
      unsubscribe();
    };
  });
  </script>
  

<style>
    .about {
        position: relative;
        z-index: 1;
        width: 92%;
        max-width: 800px;
        margin: 8em auto 10em;
    }

    h1 {
        font-size: 2em;
        line-height: 1.2em;
        text-align: center;
        margin: 2em 0 1.5em;
    }

    .subBlock {
        margin-left: 2.4em;
    }

    .list-heading {
      margin-bottom: 0; /* Remove bottom margin */
      text-decoration: underline; /* Add underline */
    }

    .list-heading + ol { /* Target the ol immediately following the .list-heading */
      margin-top: 0;  /* Remove top margin */
      margin-left: 30px; /* Indentation */
    }
</style>

<div class="about">
    <h1 class="noUnderscore">Feature Requests</h1>

    <div class="subBlock">
        <p>Welcome to our Feature Request page! Your feedback is invaluable in making our fantasy football platform the best it can be. This is the space where you can propose new features, enhancements, or any other improvements you'd like to see.</p>

        <p class="list-heading">How to Use the Feature Request Widget Below:</p>
        <ol>
            <li>Add a New Request: Click on the "New Post" button to submit your idea.</li>
            <li>Upvote an Existing Request: See a feature you like? Click the upvote button to show your support.</li>
            <li>Check Status: Keep an eye on the status tags next to each request to see what phase it's in—whether it's "Under Review," "Planned," or "Completed."</li>
        </ol>

        <p>Start contributing now and help shape the future of our platform!</p>
    </div>

    <!-- Canny Widget -->
    <br />
    <div data-canny ></div>

</div>
