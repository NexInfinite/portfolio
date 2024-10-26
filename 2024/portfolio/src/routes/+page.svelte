<script>
  import ParticlesComponent from "$lib/Particles.svelte";
  import DownCaret from "$lib/DownCaret.svelte";
</script>

<ParticlesComponent />

<div class="overflow-x-hidden">
  <div class="z-10 relative h-screen w-screen flex items-center justify-center">
    <div class="flex-col font-display text-center">
      <div class="font-black text-primary text-5xl md:pb-2">
        WELCOME
      </div>
      <div class="font-thin text-main text-2xl">
        I'm Julian
      </div>
  
      <DownCaret />
    </div>
  </div>

  <div id="2" class="z-10 relative h-screen w-screen flex items-center justify-center">
    <div class="flex-col font-display text-center">
      <div class="font-black text-primary text-5xl md:pb-2">
        WELCOME
      </div>
      <div class="font-thin text-main text-2xl">
        I'm Julian
      </div>
  
      <DownCaret />
    </div>
  </div>
</div>
