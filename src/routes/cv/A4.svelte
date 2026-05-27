<script>
	const { maxWidth = '800px', margin = '0 auto', padding = '1rem', children } = $props();

	const A4_WIDTH_MM = 210;
	const A4_HEIGHT_MM = 297;
	const aspectRatio = A4_HEIGHT_MM / A4_WIDTH_MM; // 1.414 (height/width for portrait)
</script>

<div class="a4-paper" style={`max-width: ${maxWidth}; margin: ${margin};`}>
	<div class="aspect-wrapper" style={`padding-bottom: ${aspectRatio * 100}%;`}>
		<div class="content" style={`padding: ${padding};`}>
			<div class="content-inner">
				{@render children?.()}
			</div>
		</div>
	</div>
</div>

<style>
	.a4-paper {
		position: relative;
		width: 100%;
	}

	.aspect-wrapper {
		position: relative;
		width: 100%;
	}

	.content {
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		box-sizing: border-box;
	}

	.content-inner {
		width: 100%;
		height: 100%;
		overflow: auto;
		box-sizing: border-box;
		box-shadow:
			0 4px 20px rgba(0, 0, 0, 0.15),
			0 1px 3px rgba(0, 0, 0, 0.1);
	}
</style>
