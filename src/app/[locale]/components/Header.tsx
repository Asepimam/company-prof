'use client'
import { Link } from '@/src/navigation'
import { useTranslations } from 'next-intl'
import Image from 'next/image'
import { FC, useState } from 'react'

import { FaBars, FaFacebook, FaLinkedin, FaYoutube } from 'react-icons/fa'
import { PiInstagramLogoBold } from 'react-icons/pi'

interface Props {
  locale: string
}

export const Header: FC<Props> = ({ locale }) => {
  const t = useTranslations('')

  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className='mx-auto flex max-w-screen-2xl flex-col items-center justify-between '>
      <div className='flex w-full flex-row items-center justify-between gap-4 bg-white p-4  md:px-36'>
        <div className='flex items-center md:hidden'>
          <button onClick={toggleSidebar}>
            <FaBars className='text-2xl' />
          </button>
        </div>
        <div className='flex flex-row items-center sm:gap-4'>
          <Link lang={locale} href='/'>
            <Image src='logo.svg' alt='logo' width={360} height={40} />
          </Link>
        </div>
        <div className='hidden w-full content-between items-center md:flex md:gap-3 '>
          <div className='w-full'>
            <form action='#' method='get' className='mx-auto max-w-lg'>
              <div className='relative hidden md:block'>
                <input
                  type='text'
                  id='search-navbar'
                  className='block w-full rounded-full border border-gray-300 bg-white p-2 pl-3 text-sm text-gray-900 focus:border-spacing-2 focus:outline-none focus:ring-transparent'
                  placeholder='Cari Artikel dan Layanan...'
                />
                <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3'>
                  <svg
                    className='h-4 w-4 text-gray-500'
                    aria-hidden='true'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 20 20'
                  >
                    <path
                      stroke='currentColor'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z'
                    />
                  </svg>
                  <span className='sr-only'>Search icon</span>
                </div>
              </div>
            </form>
          </div>
          <div className='flex items-center gap-2'>
            <a href='https://www.facebook.com/' target='_blank'>
              <FaFacebook className='text-2xl text-blue-600' />
            </a>
            <a href='https://www.instagram.com/' target='_blank'>
              <PiInstagramLogoBold className='text-2xl text-pink-600' />
            </a>
            <a href='https://www.linkedin.com/' target='_blank'>
              <FaLinkedin className='text-2xl text-blue-700' />
            </a>
            <a href='https://www.youtube.com/' target='_blank'>
              <FaYoutube className='text-2xl text-red-600' />
            </a>
          </div>
        </div>
      </div>

      <div className='hidden bg-orange-500 md:flex md:h-1 md:w-full'></div>

      <div className='hidden w-full items-center justify-between bg-green-600 p-2 px-36 text-white md:flex'>
        <nav className='inline-flex gap-5'>
          <Link lang={locale} href={`/`}>
            {t('Beranda')}
          </Link>
          <a href=''>{t('Tentang POHI')}</a>
          <a href=''>{t('Produk dan Layanan')}</a>
          <a href=''>{t('Info Kesehatan Kerja')}</a>
          <a href=''>{t('Hubungi Kami')}</a>
          <a href=''>{t('Karir')}</a>
        </nav>
        <div className='flex items-center gap-4'>
          <span>EMAIL</span>
          <span>|</span>
          <span>021-31924388</span>
        </div>
      </div>

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='p-4'>
          <form action='#' method='get' className='mb-4'>
            <input
              type='text'
              id='search-sidebar'
              className='block w-full rounded-full border border-gray-300 bg-white p-2 pl-3 text-sm text-gray-900 focus:border-green-500 focus:outline-none focus:ring-green-500'
              placeholder='Cari Artikel dan Layanan...'
            />
          </form>
          <nav className='flex flex-col gap-4'>
            <Link lang={locale} href={`/`}>
              {t('Beranda')}
            </Link>
            <a href=''>{t('Tentang POHI')}</a>
            <a href=''>{t('Produk dan Layanan')}</a>
            <a href=''>{t('Info Kesehatan Kerja')}</a>
            <a href=''>{t('Hubungi Kami')}</a>
            <a href=''>{t('Karir')}</a>
          </nav>
          <div className='mt-6 flex items-center gap-4'>
            <a href='https://www.facebook.com/' target='_blank'>
              <FaFacebook className='text-2xl text-blue-600' />
            </a>
            <a href='https://www.instagram.com/' target='_blank'>
              <PiInstagramLogoBold className='text-2xl text-pink-600' />
            </a>
            <a href='https://www.linkedin.com/' target='_blank'>
              <FaLinkedin className='text-2xl text-blue-700' />
            </a>
            <a href='https://www.youtube.com/' target='_blank'>
              <FaYoutube className='text-2xl text-red-600' />
            </a>
          </div>
        </div>
      </div>

      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className='p-4'>
          <form action='#' method='get' className='mb-4'>
            <input
              type='text'
              id='search-sidebar'
              className='block w-full rounded-full border border-gray-300 bg-white p-2 pl-3 text-sm text-gray-900 focus:border-green-500 focus:outline-none focus:ring-green-500'
              placeholder='Cari Artikel dan Layanan...'
            />
          </form>
          <nav className='flex flex-col gap-4'>
            <Link lang={locale} href={`/`}>
              {t('Beranda')}
            </Link>
            <a href=''>{t('Tentang POHI')}</a>
            <a href=''>{t('Produk dan Layanan')}</a>
            <a href=''>{t('Info Kesehatan Kerja')}</a>
            <a href=''>{t('Hubungi Kami')}</a>
            <a href=''>{t('Karir')}</a>
          </nav>
          <div className='mt-6 flex items-center gap-4'>
            <a href='https://www.facebook.com/' target='_blank'>
              <FaFacebook className='text-2xl text-blue-600' />
            </a>
            <a href='https://www.instagram.com/' target='_blank'>
              <PiInstagramLogoBold className='text-2xl text-pink-600' />
            </a>
            <a href='https://www.linkedin.com/' target='_blank'>
              <FaLinkedin className='text-2xl text-blue-700' />
            </a>
            <a href='https://www.youtube.com/' target='_blank'>
              <FaYoutube className='text-2xl text-red-600' />
            </a>
          </div>
        </div>
      </div>

      {/* Tombol Close di Luar Sidebar */}
      {isSidebarOpen && (
        <div
          className={`fixed inset-y-0 right-0 z-40 w-64 transition-transform duration-300 ease-in-out`}
          style={{ marginLeft: '-64px' }} // Menempatkan tombol di luar sidebar
        >
          <div className='flex h-full items-start justify-end bg-black bg-opacity-50 pr-4 pt-4'>
            <button onClick={toggleSidebar} className='text-2xl text-white'>
              &times;
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
