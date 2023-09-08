<script>
    import { managers } from '$lib/utils/helper';
	import { tabs } from '$lib/utils/tabs';
	import { onMount } from 'svelte';

	let outOfDate = false;

    onMount(async () => {
		const res = await fetch('/api/checkVersion', {compress: true})
		const needUpdate = await res.json();
		outOfDate = needUpdate;
        resize(el?.getBoundingClientRect(), true);
	})

    let managersOutOfDate = false;
    if(managers) {
        for(const manager of managers) {
            if(manager.roster && !manager.managerID) {
                managersOutOfDate = true;
                resize(el?.getBoundingClientRect(), true);
                break;
            }
        }
    }
</script>

<style>
    .admin {
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

    h4 {
        text-decoration: underline;
        margin-left: 2em;
        font-size: 1.2em;
        line-height: 1.2em;
    }

    .subBlock {
        margin-left: 2.4em;
    }
</style>

<div class="admin">
    <h1 class="noUnderscore">ADMIN</h1>

    <h4>Updates</h4>
        <div class="subBlock">
            {#if outOfDate}
                <p>There is an update available for your League Page. <a href="https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#iv-updates">Follow the Update Instructions</a> to get all of the newest features!</p>
            {/if}
            {#if managersOutOfDate}
                <p>Your managers page needs an update, <a href="https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#2-add-managers">please follow the instructions</a> to get the most up-to-date experience.</p>
            {/if}
        </div>
</div>