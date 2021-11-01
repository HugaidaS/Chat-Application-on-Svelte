<script>
    import Item from "./chatMenuItem.svelte"
    import Search from "./search.svelte";
    import teams from "../../infrastructure/services/teams"
    import people from "../../infrastructure/services/people"

</script>

<style>
    .chatList {
    width: 380px;
  }
</style>

<div class="chatList border-r border-solid border-gray-300 flex flex-col justify-start h-100 max-h-screen overflow-hidden">
    <Search/>
    <Item items={teams} title="Teams"/>
    <Item items={people} title="People"/>
</div>