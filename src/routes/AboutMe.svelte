<script lang="ts">
	import Avatar from '$lib/components/Avatar.svelte';
	import Badge from '$lib/components/Badge.svelte';
	import Button from '$lib/components/Button.svelte';
	import KeySkills from '$lib/components/KeySkills.svelte';
	import { me } from '$lib/me';
	import { m } from '$lib/paraglide/messages';

	const today = new Date();
	const birthDate = new Date('2002-01-03');
	const age = today.getFullYear() - birthDate.getFullYear();
</script>

<section class="flex flex-col gap-15 md:flex-row">
	<!-- Left Section -->
	<div class="container">
		<h1 class="text-4xl font-semibold sm:text-justify">
			{m.hi_i_am()} <span class="text-primary">{m.michalis()}</span>
		</h1>

		<ul class="mt-6 space-y-3 text-neutral-600">
			<li class="flex items-center">
				<span class="mr-2">📍</span>
				{m.based_in()}
				{me.location}
			</li>
			<li class="flex items-center"><span class="mr-2">➕</span> {age} {m.years_old()}</li>
			<li class="flex items-center"><span class="mr-2">💻</span> {me.study}</li>
			<li class="flex items-center">1+ Years of work Experience</li>
		</ul>

		<KeySkills />

		<p class="in mt-6 text-justify leading-relaxed text-neutral-700">
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam quibusdam esse cupiditate
			laudantium sequi ducimus quos quam, cumque cum libero, sit adipisci nulla deserunt? Laudantium
			magnam ipsum suscipit delectus voluptatibus?
		</p>

		<div class="mt-6 flex w-full gap-4">
			<Button>Get in Touch</Button>
			<Button variant="secondary" size="lg">View Projects</Button>
		</div>
	</div>

	<div class="container flex-3/5">
		<Avatar></Avatar>

		<h3 class="mb-2 text-xl font-semibold">{m.services()}</h3>
		<ul class="space-y-2 text-gray-700">
			<li>→ Full Stack Development</li>
			<li>→ Specialized in AI</li>
			<li>→ Web Design & Development</li>
			<li>→ Automation & Scripting</li>
		</ul>
	</div>
</section>
