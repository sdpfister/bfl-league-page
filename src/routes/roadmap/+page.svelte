<script>
    const goToSection = (sectionId) => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }
</script>

<style>
    .roadmap {
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

    h2 {
        font-size: 1.5em;
        line-height: 1.2em;
        font-weight: bold;
        text-decoration: underline;
    }

    h3 {
        font-size: 1.3em;
        line-height: 1.2em;
    }

    h4 {
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    h5 {
        margin-left: 6em;
        font-size: 0.8em;
        line-height: 1.1em;
    }

    .sectionHeading {
        margin: 4em 0 1.5em;
    }

    .subSectionHeading {
        margin: 1.5em 0 1.5em;
    }

    .toc-item {
        text-decoration: underline;
    }

    .right {
        text-align: right;
    }

    .clickable {
        cursor: pointer;
    }

    .clickable:hover {
        color: #00316b;
    }

    p {
        color: #777;
        margin-left: 2em;
    }
</style>

<div class="roadmap">
    <h1 class="noUnderscore">Site Roadmap - Features & Fixes</h1>
    
    <!-- Table of Contents -->
    <div class="toc">
      <div><strong>Table of Contents:</strong></div>
      <div class="toc-item" on:click={() => goToSection('general')}>General</div>
      <div class="toc-item" on:click={() => goToSection('stats-analysis')}>Stats & Analysis</div>
      <div class="toc-item" on:click={() => goToSection('homepage')}>Homepage</div>
      <div class="toc-item" on:click={() => goToSection('trades-waivers')}>Trades & Waivers</div>
      <div class="toc-item" on:click={() => goToSection('standings')}>Standings</div>
      <div class="toc-item" on:click={() => goToSection('social')}>Social</div>
      <div class="toc-item" on:click={() => goToSection('authentication')}>Authentication</div>
      <div class="toc-item" on:click={() => goToSection('communication')}>Communication</div>
    </div>
    
    <!-- General Section -->
    <h2 class="sectionHeading" id="general">General</h2>
    <ul>
        <li>
            <h3 class="subSectionHeading">Managers pages</h3>
            <p class="notes">Individual pages for each league manager. Include basic info, contact methods, trophies won, and transaction history.</p>
        </li>
        <li>
            <h3 class="subSectionHeading">Rules page</h3>
            <p class="notes">A comprehensive guide to league rules including scoring, roster settings, and transaction policies.</p>
        </li>
        <li>
            <h3 class="subSectionHeading">Updated site navigation</h3>
            <p class="notes">Reorganize menus for improved user experience.</p>
        </li>
        <li>
            <h3 class="subSectionHeading">Resources page</h3>
            <p class="notes">Curated list of news, tools, and articles relevant to fantasy football.</p>
        </li>
        <li>
            <h3 class="subSectionHeading">Trophy Room</h3>
            <p class="notes">Exception for new managers who took over another team. Include a history of trophies for the original manager and the new one.</p>
        </li>
        <li>
            <h3 class="subSectionHeading">Footer update</h3>
            <p class="notes">Add copyright info, quick links to important sections, and social media buttons.</p>
        </li>
        <li>
            <h3 class="subSectionHeading">Integrated roadmap tool</h3>
            <p class="notes">A feature to integrate with GitHub issues for the repo. The tool will display a summarized version of tasks and share automated statuses like "In Progress", "Complete", etc.</p>
        </li>
        <li>
            <h3 class="subSectionHeading">Matchups</h3>
            <p class="notes">Fix issue related to incorrect playoff matchups.</p>
        </li>
        <li>
            <h3 class="subSectionHeading">Rivalries</h3>
            <p class="notes">Separate data for old and new managers for rivalry statistics.</p>
        </li>
        <li>
            <h3 class="subSectionHeading">League polling/voting</h3>
            <p class="notes">Implement a voting system for league matters like rule changes.</p>
        </li>
    </ul>
  
    <!-- Stats & Analysis Section -->
    <h2 class="sectionHeading" id="stats-analysis">Stats & Analysis</h2>
    <ul>
        <li>
            <h3 class="subSectionHeading">Additional stats and analysis</h3>
            <p class="notes">Offer more in-depth player, team, and league statistics.</p>
        </li>
        <li>
            <h3 class="subSectionHeading">Additional player and team data</h3>
            <p class="notes">Integrate data such as injury reports and other relevant metrics.</p>
        </li>
        <li>
            <h3 class="subSectionHeading">Luck standings</h3>
            <p class="notes">Implement an algorithm to determine matchup luck based on expected win values. Each week, teams are compared to all other teams to calculate win/lose percentages. This generates a weekly luck value and standings, which are cumulated over the season. This metric could serve as a better indicator for determining our 6th seed for the playoffs as opposed to the current total Points For (PF).</p>
        </li>
    </ul>
  
    <!-- Homepage Section -->
    <h2 class="sectionHeading" id="homepage">Homepage</h2>
    <ul>
        <li>
            <h3 class="subSectionHeading">Recent transactions</h3>
            <p class="notes">Limit to current year transactions.</p>
        </li>
    </ul>
  
    <!-- Trades & Waivers Section -->
    <h2 class="sectionHeading" id="trades-waivers">Trades & Waivers</h2>
    <ul>
        <li>
            <h3 class="subSectionHeading">Add season filtering</h3>
            <p class="notes">Enable filtering, with the current season set as the default.</p>
        </li>
        <li>
            <h3 class="subSectionHeading">Add waiver wire positions</h3>
            <p class="notes">Show the waiver order for the current week.</p>
        </li>
        <li>
            <h3 class="subSectionHeading">Add available waiver players</h3>
            <p class="notes">List available players for waivers.</p>
        </li>
        <li>
            <h3 class="subSectionHeading">Trending players</h3>
            <p class="notes">Add Sleepers trending up and trending down among available players.</p>
        </li>
    </ul>
  
    <!-- Standings Section -->
    <h2 class="sectionHeading" id="standings">Standings</h2>
    <ul>
        <li>
            <h3 class="subSectionHeading">Previous standings</h3>
            <p class="notes">Add standings for all previous years.</p>
        </li>
    </ul>
  
    <!-- Social Section -->
    <h2 class="sectionHeading" id="social">Social</h2>
    <ul>
        <li>
            <h3 class="subSectionHeading">Social feed(s)</h3>
            <p class="notes">Integrate at least the Facebook group feed. Research if Sleeper API can be used for chat.</p>
        </li>
    </ul>
    
    <!-- Authentication Section -->
    <h2 class="sectionHeading" id="authentication">Authentication</h2>
    <ul>
        <li>
            <h3 class="subSectionHeading">User accounts/login</h3>
            <p class="notes">Implement secure login and user account features.</p>
        </li>
        <li>
            <h3 class="subSectionHeading">oAuth Integration</h3>
            <p class="notes">Allow users to sign up and log in using third-party services like Google and Facebook.</p>
        </li>
    </ul>
    
    <!-- Communication Section -->
    <h2 class="sectionHeading" id="communication">Communication</h2>
    <ul>
        <li>
            <h3 class="subSectionHeading">Notifications</h3>
            <p class="notes">Implement push notifications and give users the option for SMS and email notifications.</p>
        </li>
        <li>
            <h3 class="subSectionHeading">Chat</h3>
            <p class="notes">Create a chatroom for general league discussions.</p>
        </li>
        <li>
            <h3 class="subSectionHeading">Direct messaging</h3>
            <p class="notes">Allow users to send direct messages to individual managers.</p>
        </li>
    </ul>
  </div>
