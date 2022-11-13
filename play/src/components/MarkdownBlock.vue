<template>
  <div class="code-block">
    <h3>code wrapper</h3>
    <slot name="source"></slot>
    <hr/>
    <slot name="code"></slot>
  </div>
</template>
<script lang="ts">
export default {
  name: 'MarkdownBlock'
}
</script>