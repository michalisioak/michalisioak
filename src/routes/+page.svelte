<script>
	import AppBar from '$lib/components/AppBar.svelte';
	import AboutMe from './AboutMe.svelte';
	import Education from './Education.svelte';
	import Seminars from './Seminars.svelte';
	import Timeline from './Timeline.svelte';
</script>

<AppBar title="ABOUT ME" />
<div class="max-w-6xl px-6 py-12 mx-auto">
	<AboutMe />
	<div class="pt-10"></div>
	<Education />
	<div class="pt-10"></div>
	<Seminars />
	<div class="pt-10"></div>
	<Timeline />
</div>
