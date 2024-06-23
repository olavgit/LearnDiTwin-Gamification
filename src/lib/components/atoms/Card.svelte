<script lang="ts">
	export { className as class };

	let className = '';
</script>

<div class="p-14 bg-white shadow-lg flex flex-col {className}">
	<slot />
</div>
