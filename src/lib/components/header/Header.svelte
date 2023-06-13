<script>
    import Logo from '$lib/components/header/Logo.svelte';
    import ThemeSwitch from '$lib/components/header/ThemeSwitch.svelte';
    import Nav from '$lib/components/header/nav/Nav.svelte';

    import Button from '$lib/components/shared/buttons/Button.svelte';
    import IconButton from '$lib/components/shared/buttons/IconButton.svelte';

    import Container from '$lib/components/shared/Container.svelte';

    import sunIcon from '@iconify/icons-la/sun';
    import moonIcon from '@iconify/icons-la/moon';
    import searchIcon from '@iconify/icons-la/search';
    import barsIcon from '@iconify/icons-la/bars';
    
    import oredooLogoDark from '$lib/assets/images/logo-dark.png';
    import oredooLogoLight from '$lib/assets/images/logo-light.png';

    import { slide } from 'svelte/transition';

    let isOpenMobileNav = false
</script>

<header class="h-[85px] bg-white dark:bg-[#101213] border-b border-solid border-[#E6E7E7] dark:border-[#99999926] fixed top-0 right-0 left-0 z-[1030] block flex-row flex-nowrap justify-start mobile:flex-col mobile:flex-wrap mobile:justify-center">
    <Container>
        <div class="flex h-[85px] justify-center items-center">

            <!--logo-->
            <Logo logoDark={oredooLogoDark} logoLight={oredooLogoLight}/>
            <!--/-->

            <div 
                transition:slide
                class="{isOpenMobileNav ? '' : 'mobile:hidden'} !ml-auto !mr-auto mobile:bg-white mobile:absolute mobile:top-[85px] mobile:w-[100%] mobile:left-0 mobile:right-0">
                    <Nav/>
            </div>

            <!--header-right-->
            <div class="items-center flex ml-auto">
                
                <!--theme-switch-->
                <ThemeSwitch 
                    iconLight={moonIcon} 
                    iconDark={sunIcon}
                    iconClass="text-[#191B1D] dark:text-white bg-transparent w-[20px] h-[20px] text-xl leading-[20px]"
                    btnClass="w-[35px] h-[35px] p-[8px] inline-block text-center cursor-pointer"
                />

                <!--search-icon-->
                <IconButton 
                    icon={searchIcon}
                    iconClass="text-xl leading-[35px] text-[#191B1D] dark:text-white"
                    btnClass="w-[35px] h-[35px] rounded-[20px] mx-[10px] p-[8px] text-center inline-block cursor-pointer text-[#191B1D] transition-all duration-[0.5s] delay-0 ease-in-out"
                />

                <!--button-subscribe-->
                <Button 
                    title="Subscribe"
                    btnClass="relative text-white bg-[#191B1D] hover:text-[#191B1D] hover:bg-white dark:text-[#191B1D] dark:bg-white dark:hover:text-white dark:hover:bg-[#191B1D] inline-flex text-center font-medium capitalize rounded-none z-[1] border border-solid border-[#191B1D] dark:border-white py-[0px] px-[20px] text-[15px] leading-[38px] cursor-pointer whitespace-nowrap align-middle transition-all duration-[0.5s] delay-0 ease-in-out"
                />
                
                <!--navbar-toggler-->
                <IconButton
                    on:click={() => isOpenMobileNav = !isOpenMobileNav}
                    icon={barsIcon}
                    iconClass="text-xl leading-[35px] text-[#191B1D] dark:text-white"
                    btnClass="relative w-[35px] h-[35px] ml-[15px] p-[7px] hidden text-center mobile:inline-block cursor-pointer text-[#191B1D]"
                />
                <!--/-->
            </div>
        </div>
    </Container>
</header>