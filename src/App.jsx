import { useState } from 'react'
import KartuMenu from './components/kartuMenu'

const nama = 'Sam'
const N = 88
const gayaJudul = {color: '#1F3A5F', fontsize: '20px'}

const harga = 10.000
const namaMakanan = 'ayam geprek'
const kategori = 'Makanan'
function App() {
  const jam = 9
  return (<>
    <h1 className="judul" style={gayaJudul}>
      kantin{ nama}
    </h1>
    <p>{jam< 12 ? 'Selamat Pagi' : 'Selamat Siang'}</p>
    <p>saldo awal kartu kantin: Rp: {N *1000}</p>
    <button disabled> bayar </button>
    


    <h2 className='Menu' style={gayaJudul}>Menu Hari ini</h2>
    <p>{kartuNama(namaMakanan, harga, kategori)}</p>
  </>)
}




export default App
