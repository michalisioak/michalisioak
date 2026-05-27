<script lang="ts">
	import type { Snippet } from 'svelte';

	const {
		size = 'md',
		variant = 'default',
		className,
		children
	}: {
		size: 'sm' | 'md' | 'lg';
		variant: 'default' | 'outline' | 'solid' | 'surface';
		className: string;
		children: Snippet;
	} = $props();

	const badgeVariants = {
		variant: {
			default: 'bg-gray-200 text-gray-700',
			outline: 'outline-2 outline-foreground text-foreground',
			solid: 'bg-foreground text-background',
			surface: 'outline-2 bg-primary text-black'
		},
		size: {
			sm: 'px-2 py-1 text-xs',
			md: 'px-2.5 py-1.5 text-sm',
			lg: 'px-3 py-2 text-base'
		}
	};

	// Compute the class for the badge based on the provided props
	const badgeClass = $derived(
		`${badgeVariants.variant[variant]} ${badgeVariants.size[size]} ${className}`
	);
</script>

<span class={badgeClass}>
	{@render children()}
</span>
