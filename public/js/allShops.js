const searc_name = document.querySelector('.search-name')


const search_filter = document.querySelector('.search-filter')
search_filter.addEventListener('click', el=>{
    search_filter.href=`/all-shops/${searc_name.value}`
})