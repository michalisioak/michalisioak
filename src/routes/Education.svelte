<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { me } from '$lib/me';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';

	const options: Intl.DateTimeFormatOptions = { year: 'numeric' };
</script>

<h1 class="pb-3 text-4xl font-bold lg:text-3xl">{m.education()}</h1>

{#each me.education as education}
	<Card>
		<h2 class="font-head strong text-bold flex justify-between text-xl font-bold">
			<span>{education.name()}</span>
			<span
				>{education.start.toLocaleDateString(getLocale(), options)} - {education.end == null
					? m.now()
					: education.end.toLocaleDateString(getLocale(), options)}</span
			>
		</h2>
		<p class="text-muted-foreground">{education.university()}</p>
	</Card>
{/each}
