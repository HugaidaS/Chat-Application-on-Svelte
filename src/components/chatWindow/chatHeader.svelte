<script>
    import Avatar from "../Common/avatar.svelte"
    import AddNewButton from "../Common/addNewButton.svelte"
    import OptionsButton from "../Common/optionsButton.svelte"
</script>

<style>
    /* your styles go here */
</style>

<div class="chat__header flex flex-row items-center justify-between border-b border-solid border-gray-300 pt-3 pb-3 px-6">
    <div class="flex items-center">
        <Avatar status={true}/>
        <p>Jane Wilson</p>
    </div>
    <div class="flex w-20 justify-between">
        <AddNewButton/>
        <OptionsButton style = "w-6 h-6 text-gray-600"/>
    </div>
</div>