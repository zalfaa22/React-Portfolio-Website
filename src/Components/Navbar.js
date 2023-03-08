import "../pages/Styles.css";

const navbarToggler = document.body.querySelector('.navbar-toggler');
const responsiveNavItems = [].slice.call(
    document.querySelectorAll('#navbarResponsive .nav-link')
);
responsiveNavItems.map(function (responsiveNavItem) {
    responsiveNavItem.addEventListener('click', () => {
        if (window.getComputedStyle(navbarToggler).display !== 'none') {
            navbarToggler.click();
        }
    });
});
const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-light fixed-top py-2 bg-light py-3" id="mainNav">
    <div class="container px-9 px-lg-5">
        <a class="navbar-brand" href="/beranda">Zalfa</a>
        <button class="navbar-toggler navbar-toggler-right" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation"><span class="navbar-toggler-icon"></span></button>
        <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ms-auto my-2 my-lg-0">
                <li class="nav-item"><a class="nav-link" href="/Beranda">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="/Tentangsaya">About</a></li>
                <li class="nav-item"><a class="nav-link" href="/Karya">Portfolio</a></li>
                <li class="nav-item"><a class="nav-link" href="/Kontak">Contact</a></li>
                <li class="nav-item"><a class="nav-link" href="/Gallery">Gallery</a></li>
            </ul>
        </div>
    </div>
</nav>


  );
};

export default Navbar;
