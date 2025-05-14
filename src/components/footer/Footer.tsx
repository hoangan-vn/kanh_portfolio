import { FC, lazy, Suspense } from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import Lottie from 'react-lottie';

import LoadingAnimationData from '~/assets/lotties/loading-animation.json';
import placeholder from '~/assets/images/placeholder.png';
import APP_PATH from '~/constants/appPath';
import logo from '~/assets/images/ic_launcher.png';

const MapComponent = lazy(() => import('./widget/MapWidget'));

const Footer: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: LoadingAnimationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <footer className='w-screen flex flex-col px-16 mt-5 md:px-8 sm:px-4 min-w-0'>
      <div className='flex justify-between items-start py-10 gap-24 lg:gap-12 md:flex-col md:gap-10 md:items-center'>
        <div className='flex flex-col justify-center items-center gap-5 md:text-center'>
          <button
            className='cursor-pointer w-[170px] md:w-[140px] sm:w-[120px]'
            onClick={() => navigate(APP_PATH.home)}
          >
            <img src={logo} alt='Logo' className='w-full' />
          </button>
          <span className='text-justify dark:text-white md:text-center'>{t('footer-info')}</span>
        </div>

        <div className='flex flex-col gap-5 md:items-center'>
          <h5 className='text-xl leading-[35px] font-semibold dark:text-white'>
            {`${t('footer-terms-condition')} & ${t('footer-privacy-policy')}`}
          </h5>
          <ul className='space-y-5 text-heading-9 whitespace-nowrap dark:text-white md:text-center'>
            <li className='cursor-pointer hover:underline' onClick={() => navigate(APP_PATH['terms-condition'])}>
              {t('footer-terms-condition')}
            </li>
            <li className='cursor-pointer hover:underline' onClick={() => navigate(APP_PATH['privacy-policy'])}>
              {t('footer-privacy-policy')}
            </li>
          </ul>
        </div>

        <div className='flex flex-col gap-0 shrink-0 md:items-center'>
          <h5 className='text-xl leading-[35px] font-semibold dark:text-white'>{t('footer-follow')}</h5>
          <div className='relative w-[400px] h-[300px] lg:w-[300px] lg:h-[250px] md:w-[90%] sm:h-[200px]'>
            <Suspense
              fallback={
                <div className='absolute bg-opacity-80 z-10 flex justify-center items-center w-full h-full'>
                  <Lottie options={defaultOptions} height={100} width={100} />
                </div>
              }
            >
              <MapComponent placeholder={placeholder} />
            </Suspense>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center p-10 border-t-2 border-gray-400 dark:text-white md:p-6 md:text-center sm:p-4 sm:text-sm'>
        {t('footer-copyright')}
      </div>
    </footer>
  );
};

export default Footer;
