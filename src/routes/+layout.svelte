<script lang="ts">
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

<div class="border-primary text-primary w-full border-b-4 bg-neutral-950">
	<div class="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
		<h1 class="text-3xl font-extrabold tracking-wider uppercase">IOAK.EU</h1>
		<nav class="flex space-x-6">
			{#each pages as { name, page }}
				<a
					href={page}
					class="border-primary hover:bg-primary border-2 px-3 py-1 text-sm font-bold uppercase transition-colors hover:text-neutral-950"
				>
					{name}
				</a>
			{/each}
		</nav>
	</div>
</div>
{@render children()}
