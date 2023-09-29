<script>
    import { leagueName, round } from '$lib/utils/helper';
	import { getTeamFromTeamManagers } from '$lib/utils/helperFunctions/universalFunctions';
  	import DataTable, { Head, Body, Row, Cell } from '@smui/data-table';
	import LinearProgress from '@smui/linear-progress';
    import { onMount } from 'svelte';
    import Standing from './Standing.svelte';

    export let standingsData, leagueTeamManagersData;

    // Least important to most important (i.e. the most important [usually wins] goes last)
    // Edit this to match your leagues settings
    const sortOrder = ["fptsAgainst", "divisionTies", "divisionWins", "fpts", "ties", "wins"];

    // Column order from left to right
    const columnOrder = [{name: "W", field: "wins"}, {name: "L", field: "losses"}, {name: "PF", field: "fpts"}, {name: "PA", field: "fptsAgainst"}, {name: "Streak", field: "streak"}]


    let loading = true;
    let preseason = false;
    let playoffStandings, year, leagueTeamManagers;
    onMount(async () => {
        const asyncStandingsData = await standingsData;
        if (!asyncStandingsData) {
            loading = false;
            preseason = true;
            return;
        }
        const { standingsInfo, yearData } = asyncStandingsData;
        leagueTeamManagers = await leagueTeamManagersData;
        year = yearData;

        let finalStandings = Object.keys(standingsInfo).map((key) => standingsInfo[key]);

        // Existing sorting logic based on sortOrder
        for (const sortType of sortOrder) {
            if (!finalStandings[0][sortType] && finalStandings[0][sortType] != 0) {
                continue;
            }
            finalStandings = [...finalStandings].sort((a, b) => b[sortType] - a[sortType]);
        }

        // Custom logic to determine the top 6 teams for playoffs
        // First, sort all the teams by wins and then by fpts
        finalStandings.sort((a, b) => b.wins - a.wins || b.fpts - a.fpts);

        // Take the top 5 teams
        const topFiveTeams = finalStandings.slice(0, 5);

        // Take the remaining teams and sort them by fpts to find the 6th team
        const remainingTeams = finalStandings.slice(5);
        const sixthTeam = remainingTeams.sort((a, b) => b.fpts - a.fpts)[0];

        // Combine them to get the top 6 teams
        playoffStandings = [...topFiveTeams, sixthTeam];

        loading = false;
    })

    let innerWidth;

</script>

<svelte:window bind:innerWidth={innerWidth} />

<style>
    .loading {
        display: block;
        width: 85%;
        max-width: 500px;
        margin: 80px auto;
    }

    :global(.center) {
        text-align: center;
    }

    :global(.wrappable) {
        white-space: normal;
        line-height: 1.2em;
    }

    h1 {
        font-size: 2.2em;
        line-height: 1.3em;
        margin: 1.5em 0 2em;
    }

    .standingsTable {
        max-width: 100%;
        overflow-x: scroll;
        margin: 0.5em 0 5em;
    }
</style>

<h1>{year ?? ''} {leagueName} <br> Playoff Standings</h1>

{#if loading}
    <!-- promise is pending -->
    <div class="loading">
        <p>Loading Standings...</p>
        <LinearProgress indeterminate />
    </div>
{:else if preseason}
<div class="loading">
    <p>Preseason, No Standings Yet</p>
</div>
{:else}
    <div class="standingsTable">
        <DataTable table$aria-label="League Standings" >
            <Head> <!-- Team name  -->
                <Row>
                    <Cell class="center">Team</Cell>
                    {#each columnOrder as column}
                        <Cell class="center wrappable">{column.name}</Cell>
                    {/each}
                </Row>
            </Head>
            <Body>
                <!-- 	Standing	 -->
                {#each playoffStandings as playoffStanding}
                    <Standing {columnOrder} {playoffStanding} {leagueTeamManagers} team={getTeamFromTeamManagers(leagueTeamManagers, playoffStanding.rosterID)} />
                {/each}
            </Body>
        </DataTable>
    </div>
{/if}
