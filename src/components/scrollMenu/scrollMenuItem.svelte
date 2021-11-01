    <script>
        export let item;
    </script>
    
    <div class="scrolling__item flex flex-col justify-center items-center w-full scrolling__item-height"><a href="/"><img src={item.img} alt=""></a>
        <p class="scrolling__item__subtitle">{item.name}</p>
    </div>

    <style>
        .scrolling__item-height{
        height: 150px;
        padding-top: 31px
        }
        .scrolling__item__subtitle{
        margin-top: 15px;
        }
        </style>
        