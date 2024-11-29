window.onscroll = function()
{
    scrollFunction()
};

function scrollFunction()
{
    let mybutton = document.getElementById( "toTop" );
    let headerDivider = document.getElementById( "headerDivider" );

    if( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20 )
    {
        mybutton.style.display = "block";
        headerDivider.classList.add( 'show' );

        let menu = document.querySelector( '.menu' );
        if( menu.classList.contains( 'menu-open' ) )
        {
            menu.classList.remove( 'menu-open' );
        }

    }
    else
    {
        mybutton.style.display = "none";
        headerDivider.classList.remove( 'show' );
    }
}

function topFunction()
{
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

