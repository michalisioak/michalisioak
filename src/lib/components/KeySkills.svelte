<script lang="ts">
	import { me } from '$lib/me';
	import { m } from '$lib/paraglide/messages';
	import Badge from './Badge.svelte';
</script>

<h3 class="mb-2 text-xl font-semibold">{m.key_skills()}</h3>

<div class="items-justify items- mb-6 flex w-full flex-wrap justify-between gap-4 md:justify-start">
	{#each me.key_skills as skill}
		<Badge variant="surface">{skill}</Badge>
	{/each}
</div>
