<script>
  // @ts-nocheck

	import Particles, { particlesInit } from '@tsparticles/svelte';
	import { onMount } from 'svelte';
	import { loadFull } from "tsparticles";
  import ParticlesConfig from "$lib/particlesjs-config.json";

	/**
	 * @type {typeof Particles}
	 */
	let ParticlesComponent;

	onMount(async () => {
		const module = await import('@tsparticles/svelte');

		ParticlesComponent = module.default;
	});

	void particlesInit(async (engine) => {
		await loadFull(engine);
	});
</script>

<svelte:component
	this="{ParticlesComponent}"
	id="tsparticles"
	class="z-0"
	options="{ParticlesConfig}"
/>