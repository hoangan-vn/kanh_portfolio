import { motion } from 'framer-motion';
import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import photo from '~/assets/images/photo.png';

const About: FC = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <section
      id='about'
      className='w-screen px-16 flex justify-start items-start gap-8 md:flex-col md:items-center md:px-8 sm:px-4 md:py-12'
    >
      <motion.img
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 1, x: -100 }}
        transition={{ duration: 0.5 }}
        className='w-[350px] h-auto rounded-lg shadow-sm dark:shadow-white md:w-[280px] sm:w-[220px] md:mb-8'
        src={photo}
        alt='Identity'
      />
      <motion.div
        whileInView={{ opacity: 1, x: 0 }}
        initial={{ opacity: 1, x: 100 }}
        transition={{ duration: 0.5 }}
        className='flex flex-col gap-4 text-wrap md:items-center md:text-center'
      >
        <h1 className='text-gradient inline-block font-bold text-5xl dark:text-gradient-100 md:text-4xl sm:text-3xl'>
          {t('nav-about')}
        </h1>
        <p className='dark:text-white'>
          {t('about-content-1')}
          <span className='px-2 py-1 text-blue-500 rounded-lg bg-blue-200 mx-1'>{t('about-position-1')}</span>
          {/* {t('common-comma')} */}
          {/* <span className='px-2 py-1 text-blue-500 rounded-lg bg-blue-200 mx-1'>{t('about-position-2')}</span> */}
          {t('about-content-2')}
        </p>
        <p className='dark:text-white'>{t('about-content-3')}</p>
      </motion.div>
    </section>
  );
};

export default About;
