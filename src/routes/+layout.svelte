<script lang="ts">
	import { resolve } from '$app/paths';
	import { m } from '$lib/paraglide/messages';
	import '../app.css';

	let { children } = $props();

	let pages = [
		{
			name: 'Projects',
			page: '/projects'
		},
		{
			name: m.contact(),
			page: '/contact'
		}
	];
</script>

<div class="border-primary text-primary bg-neutral-950 w-full border-b-4">
	<div class="max-w-6xl px-4 py-4 mx-auto flex items-center justify-between">
		<!-- <h1 class="text-3xl font-extrabold tracking-wider uppercase">IOAK.EU</h1> -->
		<nav class="space-x-6 flex">
			{#each pages as { name, page } (name)}
				<a
					href={resolve(page)}
					class="border-primary hover:bg-primary px-3 py-1 text-sm font-bold hover:text-neutral-950 border-2 uppercase transition-colors"
				>
					{name}
				</a>
			{/each}
		</nav>
	</div>
</div>
{@render children()}
