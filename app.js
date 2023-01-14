  const closeBtn=document.querySelector('.close-btn');
    const toggleBtn=document.querySelector('.sidebar-toggle');
    const sidebar=document.querySelector('.sidebar');
if(toggleBtn){
    toggleBtn.addEventListener('click', ()=>{
    sidebar.classList.toggle("show-sidebar");
    console.log("bop");
   });
}
if(closeBtn){
closeBtn.addEventListener('click', ()=>{

    sidebar.classList.toggle("show-sidebar");
    console.log("bip");

});
}
