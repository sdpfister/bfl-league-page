import { getLeaguePlayoffStandings, getLeagueTeamManagers } from '$lib/utils/helper';

export async function load() {

    const standingsData = getLeaguePlayoffStandings();
    const leagueTeamManagersData = getLeagueTeamManagers();

    return {
        standingsData,
        leagueTeamManagersData,
    };
}