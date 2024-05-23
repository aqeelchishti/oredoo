<script>
	import { goto } from '$app/navigation';

    export let current_page, page_size, posts_count, pages_count, goto_pre_link;

    const changePageSize = (pa_count, po_count, c_page, p_size) => {
        goto(`/${goto_pre_link}?page=${c_page}&size=${p_size}`);
        /*if (po_count  po_page) {
            goto(`/${goto_pre_link}?page=${c_page}&size=${p_size}`);
        } 
        else {
            goto(`/${goto_pre_link}?page=${1}&size=${p_size}`);
        }*/
    }
</script>

<div class="flex text-center items-center border-b border-solid border-[#E6E7E7] mb-[30px] py-[30px] px-0">
	<h6>Showing {page_size} of {posts_count} results</h6>
	<form class="ml-auto" method="POST">
		<label for="change_page_size" class="text-base font-league text-prime font-bold pr-2">Page Size</label>
		<select name="change_page_size" class="px-3 py-2 border border-solid border-[#E6E7E7] text-base font-league font-bold focus:ring-0 focus:border-prime text-prime" bind:value={page_size} on:change={() => changePageSize(pages_count, posts_count, current_page, page_size)}>
			<option class="select-option" value={1} selected>1</option>
			<option class="select-option" value={2}>2</option>
			<option class="select-option" value={3}>3</option>
		</select>
	</form>
</div>

<style>
    .select-option {
        @apply px-3 py-2 text-base font-league font-bold text-prime;
    }
</style>