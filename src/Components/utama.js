import React from 'react';
import {Routes, Route} from 'react-router-dom';

import Beranda from '../pages/Beranda';
import Karya from '../pages/Karya';
import Tentangsaya from '../pages/Tentangsaya';
import Kontak from '../pages/Kontak';
import Gallery from '../pages/Gallery'

const Utama = () => (
    <Routes>
        <Route exact path='/beranda' element={<Beranda/>} />
        <Route path='/tentangsaya' element={<Tentangsaya/>} />
        <Route path='/karya' element={<Karya/>} />
        <Route path='/kontak' element={<Kontak/>} />
        <Route path='/gallery' element={<Gallery/>} />
    </Routes>
)

export default Utama;