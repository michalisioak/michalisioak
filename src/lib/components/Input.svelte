<script lang="ts">
	const { placeholder }: { placeholder: string } = $props();
</script>

<input
	{placeholder}
	class="w-full border-2 px-4 py-2 shadow-md transition focus:shadow-xs focus:outline-hidden"
	type="text"
/>
