import { useTranslations } from 'next-intl'

export default function DashboardPage() {
  const t = useTranslations('')
  return (
    <div>
      <section className='flex flex-col items-center justify-center py-24'>
        <div
          id='default-carousel'
          className='relative w-full'
          data-carousel='slide'
        >
          <div className='relative h-56 overflow-hidden rounded-lg md:h-96'>
            <div className='hidden duration-700 ease-in-out' data-carousel-item>
              <img
                src='Prodia-OHI-4-1536x649.png'
                className='absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2'
                alt='...'
              />
            </div>

            <div className='hidden duration-700 ease-in-out' data-carousel-item>
              <img
                src='public/PROMO-HARI-PELANGGAN-NASIONAL-2024-1024x512.png'
                className='absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2'
                alt='...'
              />
            </div>

            <div className='hidden duration-700 ease-in-out' data-carousel-item>
              <img
                src='public/Promo-HW-III-1-1024x512.png'
                className='absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2'
                alt='...'
              />
            </div>

            <div className='hidden duration-700 ease-in-out' data-carousel-item>
              <img
                src='public/Promo-ING-Kmia-Kafein-1-1-1024x512.png'
                className='absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2'
                alt='...'
              />
            </div>

            <div className='hidden duration-700 ease-in-out' data-carousel-item>
              <img
                src='/docs/images/carousel/carousel-5.svg'
                className='absolute left-1/2 top-1/2 block w-full -translate-x-1/2 -translate-y-1/2'
                alt='...'
              />
            </div>
          </div>

          <div className='absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 space-x-3 rtl:space-x-reverse'>
            <button
              type='button'
              className='h-3 w-3 rounded-full'
              aria-current='true'
              aria-label='Slide 1'
              data-carousel-slide-to='0'
            ></button>
            <button
              type='button'
              className='h-3 w-3 rounded-full'
              aria-current='false'
              aria-label='Slide 2'
              data-carousel-slide-to='1'
            ></button>
            <button
              type='button'
              className='h-3 w-3 rounded-full'
              aria-current='false'
              aria-label='Slide 3'
              data-carousel-slide-to='2'
            ></button>
            <button
              type='button'
              className='h-3 w-3 rounded-full'
              aria-current='false'
              aria-label='Slide 4'
              data-carousel-slide-to='3'
            ></button>
            <button
              type='button'
              className='h-3 w-3 rounded-full'
              aria-current='false'
              aria-label='Slide 5'
              data-carousel-slide-to='4'
            ></button>
          </div>

          <button
            type='button'
            className='group absolute start-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none'
            data-carousel-prev
          >
            <span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70'>
              <svg
                className='h-4 w-4 text-white dark:text-gray-800 rtl:rotate-180'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='M5 1 1 5l4 4'
                />
              </svg>
              <span className='sr-only'>Previous</span>
            </span>
          </button>
          <button
            type='button'
            className='group absolute end-0 top-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none'
            data-carousel-next
          >
            <span className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70'>
              <svg
                className='h-4 w-4 text-white dark:text-gray-800 rtl:rotate-180'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 6 10'
              >
                <path
                  stroke='currentColor'
                  stroke-linecap='round'
                  stroke-linejoin='round'
                  stroke-width='2'
                  d='m1 9 4-4-4-4'
                />
              </svg>
              <span className='sr-only'>Next</span>
            </span>
          </button>
        </div>
      </section>
      <section className='bg-background-secondary py-20 max-lg:py-10'>
        <div className='mx-auto grid max-w-screen-lg grid-cols-3 gap-7 px-8 py-5 max-lg:max-w-fit max-lg:grid-cols-1 max-lg:gap-10'>
          <div className='text-center'>
            <h2 className='mb-3  text-xl font-semibold'>{t('Approachable')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Add_components_without_sending_additional_client_side_JavaScript_Built_on_the_latest_React_features'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Versatile')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'Automatic_Image_Font_and_Script_Optimizations_for_improved_UX_and_Core_Web_Vitals'
              )}
            </p>
          </div>
          <div className='text-center'>
            <h2 className='mb-3 text-xl font-semibold'>{t('Performant')}</h2>
            <p className='text-text-secondary max-lg:max-w-[500px]'>
              {t(
                'A_rich_incredibly_adoptable_template_that_scales_between_a_small_showcase_website_and_a_full_size_app'
              )}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
