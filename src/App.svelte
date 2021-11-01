<script>
import Tailwind from './components/Common/Tailwind.svelte'
import ScrollMenu from "./components/scrollMenu/scrollMenu.svelte"
import ChatMenu from './components/chatMenu/chatMenu.svelte';
import ChatContainer from './components/chatWindow/chatContainer.svelte';
</script>

<main class="h-100 flex max-h-screen">
  <Tailwind />
  <ScrollMenu/>
  <ChatMenu/>
  <ChatContainer/>
</main>

<style>
  main {
    background-color: #fff;
    font-family: 'Poppins', sans-serif;
    font-size: 13px; 
  }


</style>
