<script>
  import ParticlesComponent from "$lib/Particles.svelte";
  import DownChevron from "$lib/DownChevron.svelte";
</script>

<ParticlesComponent />

<div class="z-10 relative h-screen w-screen flex items-center justify-center">
  <div class="flex-col font-display text-center">
    <div class="font-black text-primary text-3xl md:text-5xl md:pb-2">
      WELCOME
    </div>
    <div class="font-thin text-main md:text-2xl">
      I'm Julian
    </div>

    <DownChevron />
  </div>
</div>
