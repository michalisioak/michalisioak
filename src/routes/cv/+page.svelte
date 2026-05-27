<script>
	import { resolve } from '$app/paths';
	import AppBar from '$lib/components/AppBar.svelte';
	import A4Paper from './A4.svelte';
	import CV from './CV.svelte';
</script>

<AppBar title="CV">
	{#snippet actions()}
		<a
			href={resolve('/cv/save')}
			class="border-primary hover:bg-primary px-3 py-1 text-sm font-bold hover:text-neutral-950 border-2 uppercase transition-colors"
		>
			Save
		</a>
	{/snippet}
</AppBar>

<A4Paper maxWidth="600px">
	<div class="content">
		<CV />
	</div>
</A4Paper>
