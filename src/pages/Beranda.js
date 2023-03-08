import React from 'react'
// import "../pages/Styles.css"
import "./Styles.css"

function Beranda() {
  return (
    <header class="masthead">
      {/* <img src="./bg home.jpg" class="img-fluid border-9" alt="./perpus.jpg"></img> */}
            <div class="container px-4 px-lg-5 h-100">
                <div class="row gx-4 gx-lg-5 h-100 align-items-center justify-content-center text-center">
                    <div class="col-lg-8 align-self-end">
                        <h1 class="text-white font-weight-bold">Hello Everyone I'm Fadhila Zalfa Alisya👋</h1>
                        <hr class="divider" />
                    </div>
                    <div class="col-lg-8 align-self-baseline">
                        <p class="text-white mb-5">Yuk cari tahu tentang aku!</p>
                        <a class="btn btn-primary btn-xl" href="/Tentangsaya">Find Out More</a>
                    </div>
                </div>
            </div>
        </header>
  )
}

export default Beranda;