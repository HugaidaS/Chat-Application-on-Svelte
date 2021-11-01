<script>
    export let status;
</script>

<picture class="w-16 relative ml-3">
    <img src="https://picsum.photos/52" alt="randomLogo" class="rounded-2xl">
    <div class:online={status}></div>
</picture>

<style>
    .online{
    position: absolute;
    width: 12px;
    height: 12px;
    left: 0.8rem;
    left: 2.5rem;
    top: 42px;
    background: #44CB7F;
    border: 2px solid #FFFFFF;
    border-radius: 100%;
  }
</style>