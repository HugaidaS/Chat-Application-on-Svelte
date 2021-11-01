<script>
    import ScrollMenuItem from "./scrollMenuItem.svelte";
    let menuItems = [
        {name:"Dashboard",img:"./imgs/Grid.png"},
        {name:"E-Commerce",img:"./imgs/Cart.png"},
        {name:"Calendar",img:"./imgs/Calendar.png"},
        {name:"Mail",img:"./imgs/Mail.png"},
        {name:"Chat",img:"./imgs/Chat.png"},
        {name:"Tasks",img:"./imgs/Tasks.png"}
    ]
</script>


<div class="scrolling h-100 max-h-screen overflow-auto">
    <div class="scrolling__item flex flex-row justify-center items-center w-full h-24"><a href="/"><img src="./imgs/Logo.png" alt=""></a></div>
    {#each menuItems as menuItem}
    <ScrollMenuItem item={menuItem}/>
    {/each}
    <div class="scrolling__item flex flex-col justify-center items-center w-full "><a href="/"><img src="./imgs/More.png" alt=""></a></div>
  </div>
  

  <style>
  .scrolling {
    background-color: #3a63de;
    color: white;
    width: 150px;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .scrolling::-webkit-scrollbar {
  display: none;
  }
  .scrolling__item{
    color:white;
  }

  </style>
