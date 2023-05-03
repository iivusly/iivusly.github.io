<script lang="ts">
  import { onMount } from 'svelte'
  import { create_in_transition } from 'svelte/internal'
  import { fly } from 'svelte/transition'
  import type { TransitionConfig } from 'svelte/types/runtime/transition'

  declare type TransitionOptions = {
    direction: 'in' | 'out' | 'both'
  }
  declare type TransitionFn = (
    node: Element,
    params: any,
    options: TransitionOptions
  ) => TransitionConfig

  let element: HTMLDivElement
  export let runOnce: boolean = true
  export let transitionFn: TransitionFn = fly
  export let params: any = transitionFn === fly ? { y: '100%' } : {}

  function check([entry]: IntersectionObserverEntry[], observer) {
    if (entry.isIntersecting) {
      create_in_transition(element, transitionFn, params).start()
      if (runOnce) {
        observer.disconnect()
      }
    }
  }

  onMount(() => {
    const observer = new IntersectionObserver(check, {})
    observer.observe(element)
  })
</script>

<div bind:this={element}>
  <slot />
</div>
