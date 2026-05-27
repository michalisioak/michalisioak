<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { MouseEventHandler } from 'svelte/elements';

	const {
		variant = 'default',
		type = 'button',
		disabled = false,
		size = 'md',
		onclick,
		ariaLabel = '',
		children,
		className = ''
	}: {
		variant: 'default' | 'secondary' | 'outline' | 'link';
		size: 'sm' | 'md' | 'lg' | 'icon';
		disabled: boolean;
		className: string;
		type: 'button' | 'submit' | 'reset';
		onclick: MouseEventHandler<HTMLButtonElement>;
		ariaLabel: string | undefined;
		children: Snippet<[]>;
	} = $props();

	const base =
		'font-head transition-all outline-hidden cursor-pointer duration-200 font-medium flex items-center';

	const variants = {
		default:
			'shadow-md hover:shadow-none bg-primary text-black border-2 border-black transition hover:translate-y-1 hover:bg-primary-hover',
		secondary:
			'shadow-md hover:shadow-none bg-secondary shadow-primary text-secondary-foreground border-2 border-black transition hover:translate-y-1',
		outline: 'shadow-md hover:shadow-none bg-transparent border-2 transition hover:translate-y-1',
		link: 'bg-transparent hover:underline'
	};

	const sizes = {
		sm: 'px-3 py-1 text-sm shadow hover:shadow-none',
		md: 'px-4 py-1.5 text-base',
		lg: 'px-8 py-3 text-lg',
		icon: 'p-2'
	};

	const computedClass = $derived(`${base} ${variants[variant]} ${sizes[size]} ${className}`);
</script>

<button {type} class={computedClass} {disabled} aria-label={ariaLabel} {onclick}>
	{@render children()}
</button>
