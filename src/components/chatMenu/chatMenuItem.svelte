<script>
    import Title from "./chatMenuBlockTitle.svelte"
    import Avatar from "../Common/avatar.svelte"
    export let items;
    export let title;
</script>

<div class="items">
    <Title blockTitle={title}/>
    {#each items as { name,body,status,unreadMessages }}
    <div class="chat__item flex flex-row flex-nowrap justify-between items-center border-b border-solid border-gray-300">
      <Avatar status={status}/>
      <div class="item__content w-4/5 pt-2.3 flex flex-row justify-between">
        <div class="flex flex-col">
          <p class="chat__subtitle">{name}</p>
          <a href="/">
            {body.substring(0,30)}...
          </a>
        </div>
        {#if unreadMessages>0}
        <div class="flex flex-col justify-center items-center">
          <div class="unread mr-5 flex flex-col justify-center items-center">{unreadMessages}</div>
        </div>
        {/if}
    </div>
    </div>
  {/each}
</div>

<style>
  .items{
    height: 245px;
  }
  .chat__item{
    height: 100px;
    padding-right: -3px;
  }
  .chat__subtitle{
    font-size: 15px;
  }
  .unread{
    height: 21px;
    width: 21px;
    color: #fff;
    background-color: #FD726A;
    text-align: center;
  }
</style>
