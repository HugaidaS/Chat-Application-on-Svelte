<script>
  export let blockTitle;
</script>
<div class="chat__title flex flex-row justify-between px-5 font-medium pt-5">
    <p>{blockTitle.toUpperCase()}</p>
    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
    </svg>
</div>

  <style>
    .chat__title{
    line-height: 22,5px;
    font-family: 'Poppins';
    color:#818386;
    font-size: 15px;
    font-weight: 500;
  }
  </style>