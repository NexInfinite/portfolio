<script lang="ts">
	export let url: string;
  export let up: boolean = false;

  let icon = up ? "fa-caret-up" : "fa-caret-down";
</script>

<a href={url} aria-label="next_section">
  <i class={`fa ${icon} icon-caret-down text-xl transition-all duration-300 ease-in-out md:text-3xl hover:text-2xl md:hover:text-5xl hover:cursor-pointer hover:text-primary`}></i>
</a>