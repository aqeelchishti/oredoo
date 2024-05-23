<script>
    import Composer from "$lib/components/composer/Composer.svelte";

    import { supabase } from '$lib/supabase/supabaseClient';

    const addPost = async (row) => {
        const { data, error } = await supabase
        .from('posts')
        .insert(row)
        .select()
    }
</script>

<section class="block h-auto mt-[85px] mb-[50px] !pt-0 mx-20">
    <Composer />
</section>