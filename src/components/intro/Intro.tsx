import { useTranslation } from 'react-i18next';
import { FC } from 'react';

import intro from '~/assets/svg/intro.svg';

import { BannerWidget, TextAnimationWidget } from './widget';

const Intro: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <section
        id='intro'
        className='w-screen h-[105vh] flex items-center justify-between px-16 relative pt-16 md:px-8 sm:px-4 md:flex-col md:h-auto md:pt-24 md:pb-16'
      >
        <div className='flex flex-col justify-center items-start gap-7 md:items-center md:text-center md:mb-12'>
          <span className='font-bold tracking-wide px-6 py-3 bg-gradient-to-r from-[rgba(170,54,124,0.5)] to-[rgba(74,47,189,0.5)] border border-[rgba(255,255,255,0.5)] text-[20px] mb-4 inline-block dark:text-white md:text-[18px] sm:text-[16px] sm:px-4 sm:py-2'>
            {t('intro-welcome')}
          </span>
          <TextAnimationWidget
            text={t('intro')}
            className='h-3 flex items-center text-4xl max-w-[600px] break-words md:text-3xl sm:text-2xl md:text-center md:max-w-full'
          />
        </div>
        <div className='animate-jump-in animate-once flex justify-center items-center md:w-full sm:w-full'>
          <img src={intro} alt='Intro' className='w-[500px] animate-move-up-down md:w-[400px] sm:w-[90%]' />
        </div>
      </section>
      <BannerWidget />
    </>
  );
};

export default Intro;
