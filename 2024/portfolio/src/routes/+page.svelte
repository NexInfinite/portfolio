<script>
  import ParticlesComponent from "$lib/components/Particles.svelte";
  import DownCaret from "$lib/components/DownCaret.svelte";
  import Welcome from "$lib/screens/Welcome.svelte";
  import WhatIDo from "$lib/screens/WhatIDo.svelte";
  import { path } from "$lib/components/Path.svelte";
</script>

<ParticlesComponent />

{#if path != ""}
  <div class="sticky w-scren z-20 top-0 overflow-hidden">
    <div class="flex flex-row w-screen justify-center">
      <DownCaret url="" up={true} />
    </div>
  </div>
{/if}

<div class="overflow-x-hidden">
  <Welcome />
  <WhatIDo />
</div>
