<script>
    import ChatHeader from "./chatHeader.svelte";
    import ChatInput from "./chatInput.svelte";
    import ChatContent from "./chatContent.svelte";
</script>


<div class="chat h-screen justify-between w-full flex flex-col">
    <ChatHeader/>
    <ChatContent/>
    <ChatInput/>
</div>