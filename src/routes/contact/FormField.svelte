<script lang="ts">
	import Input from '$lib/components/Input.svelte';
	import { m } from '$lib/paraglide/messages';
</script>

<form class="flex flex-col gap-4">
	<Input placeholder={m.name()} />
	<textarea
		rows={4}
		placeholder={m.message()}
		class="w-full border-2 border-black px-4 py-2 shadow-md transition focus:shadow-xs focus:outline-hidden"
	></textarea>
</form>
