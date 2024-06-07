<script lang="ts" context="module">
	import '../app.css';
	import cork from '$lib/assets/images/cork.jpeg?w=1920&format=webp&imagetools';
</script>

<div class="main min-h-screen flex bg-cover">
	<img
		src={cork}
		alt="cork"
		class="pointer-events-none absolute h-full w-full object-cover -z-10"
	/>
	<slot />
</div>
