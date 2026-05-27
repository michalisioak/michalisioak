<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import { me } from '$lib/me';
	import { m } from '$lib/paraglide/messages';
	import { getLocale } from '$lib/paraglide/runtime';

	const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short' };
</script>

<h1 class="pb-3 text-4xl font-bold lg:text-3xl">{m.seminars()}</h1>
<div class="flex flex-col gap-4">
	{#each me.seminars as seminar}
		<Card>
			<h2 class="flex justify-between">
				<div class="flex flex-col items-start">
					<span class="font-head strong text-bold text-xl font-bold">
						{seminar.name.get()}
					</span>
					<span class="text-muted-foreground">
						{seminar.location.get()}
					</span>
				</div>

				<div class="flex flex-col items-end">
					<span class="font-head strong text-bold text-xl font-bold">
						{seminar.date.toLocaleDateString(getLocale(), options)}
					</span>
					<span class="text-muted-foreground">{seminar.organization}</span>
				</div>
			</h2>

			{#if seminar.short_description !== undefined}
				<p class="text-shadow-muted-foreground text-lg">{seminar.short_description.get()}</p>
			{/if}
		</Card>
	{/each}
</div>
