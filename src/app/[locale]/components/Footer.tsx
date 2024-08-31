export const Footer = () => {
  return (
    <footer className='border-t-4 border-yellow-500 bg-white'>
      <div className='container mx-auto px-4 py-8'>
        <div className='flex flex-col justify-between md:flex-row'>
          <div className='mb-8 flex-1 md:mb-0'>
            <h2 className='mb-2 font-semibold text-gray-700'>
              TENTANG PRODIA OHI
            </h2>
            <hr className='mb-4 w-12 border-t-2 border-yellow-500' />
            <p className='text-gray-600'>
              Prodia OHI adalah sister company dari Prodia Widyahusada yang
              berfokus pada layanan pemeriksaan kesehatan (MCU) berbasis
              Kedokteran Okupasi dengan kualitas hasil pemeriksaan yang terbaik
              dan terpercaya.
            </p>
          </div>

          <div className='mb-8 flex-1 md:mb-0'>
            <h2 className='mb-2 font-semibold text-gray-700'>INFO TERBARU</h2>
            <hr className='mb-4 w-12 border-t-2 border-yellow-500' />
            <ul className='text-gray-600'>
              <li className='mb-4'>
                <span className='block text-sm text-gray-500'>30 Agu</span>
                <a href='#' className='text-green-600 hover:underline'>
                  Promo Spesial Hari Pelanggan Nasional (Harpelnas)
                </a>
              </li>
              <li>
                <span className='block text-sm text-gray-500'>22 Agu</span>
                <a href='#' className='text-green-600 hover:underline'>
                  Cemaran Nitrit dalam Air: Sumber, Tingkat Risiko, dan Efeknya
                  pada Kesehatan
                </a>
              </li>
            </ul>
          </div>

          <div className='flex-1'>
            <h2 className='mb-2 font-semibold text-gray-700'>
              PT PRODIA UTAMA
            </h2>
            <hr className='mb-4 w-12 border-t-2 border-yellow-500' />
            <div className='flex flex-wrap gap-4'>
              <img
                src='link1-f18fdd9330.png'
                alt='Prodia'
                // width={40}
                height={40}
              />
              <img
                src='group-logo-04.jpg'
                alt='ProSTEM'
                // width={40}
                height={40}
              />
              <img
                src='link3-03fe57ef68.png'
                alt='Prodia the CRO'
                // width={40}
                height={40}
              />
              <img
                src='link2-c73be42978.png'
                alt='ProLINE'
                height={40}
                // width={40}
              />
              <img
                src='inodia.png'
                alt='inodia'
                height={40}
                // width={40}
              />
              <img
                src='logo6.png'
                alt='GMO GlobalSign'
                height={40}
                // width={40}
              />
            </div>
          </div>
        </div>
      </div>

      <div className='bg-green-600 py-4 text-center text-white'>
        <div className='container mx-auto px-4'>
          <p className='text-sm'>
            Copyright © 2024. Layanan Pemeriksaan Karyawan & Lingkungan Kerja -
            PT. Prodia Occupational Health Indonesia
          </p>
        </div>
      </div>
    </footer>
  )
}
