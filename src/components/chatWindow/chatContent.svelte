<script>
import messages from "../../infrastructure/services/chatStructure";
import Avatar from "../Common/avatar.svelte"
import moment from "moment";
import OptionsButton from "../Common/optionsButton.svelte";
</script>

<style>
    .chatApp{
        margin:30px;
    }
    .messageCard__content{
        background-color: #3A63DE;
        color: white;
        padding: 16px 20px;
        border-radius: 8px 8px 8px 1px;
    }
    .byCurrent{
        flex-direction: row-reverse;
        border-radius: 8px 8px 1px 8px;
    }

</style>
 
<div class="chatApp flex flex-col flex-nowrap justify-end h-full">
    {#each messages as item}
         {#if item.message.type==="text"}
         <div class="flex flex-row mt-3" class:byCurrent={item.userId==="123"}>
                    <Avatar/>
                    <div class="flex flex-col">
                        <span class="messageCard__content" class:byCurrent={item.userId==="123"}>
                            {item.message.content}
                        </span>
                        <span class="mt-1">
                            {moment(item.time).fromNow()}
                        </span>
                    </div>
                <span class="mx-2 mb-5 flex flex-col justify-center">
                    <OptionsButton style = "w-5 h-5 text-gray-400"/>
                </span>
         </div>
         {/if}
    {/each}
</div>