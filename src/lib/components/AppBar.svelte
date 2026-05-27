<script lang="ts">
	import type { Snippet } from 'svelte';

	let { title, actions }: { title: string; actions?: Snippet } = $props();
</script>

<div class="border-primary text-primary bg-neutral-950 w-full border-b-4">
	<div class="max-w-6xl px-4 py-4 mx-auto flex items-center justify-between">
		<h1 class="text-3xl font-extrabold tracking-wider uppercase">{title}</h1>
		<div class="gap-2 flex flex-row">
			{@render actions?.()}
		</div>
	</div>
</div>
