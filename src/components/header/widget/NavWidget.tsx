import { FC } from 'react';
import { useTranslation } from 'react-i18next';

interface NavWidgetProps {
  isMobile?: boolean;
  closeMenu?: () => void;
}

const NavWidget: FC<NavWidgetProps> = ({ isMobile = false, closeMenu }): JSX.Element => {
  const { t } = useTranslation();
  const handleNavigation = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId?: string) => {
    event.preventDefault();

    if (isMobile && closeMenu) {
      closeMenu();
    }

    if (!targetId) {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const offsetTop = targetElement.getBoundingClientRect().top + window.scrollY;
      const scrollToPosition = offsetTop - window.innerHeight / 2 + targetElement.offsetHeight / 2;
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
    }
  };

  const navItemClass = isMobile
    ? 'py-3 block text-center cursor-pointer dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
    : 'px-3 cursor-pointer dark:text-white hover:underline';

  return (
    <div className={isMobile ? 'flex flex-col w-full' : 'flex justify-around items-center mr-4'}>
      <a className={navItemClass} onClick={(e) => handleNavigation(e)}>
        {t('nav-home')}
      </a>
      <a className={navItemClass} onClick={(e) => handleNavigation(e, 'about')}>
        {t('nav-about')}
      </a>
      <a className={navItemClass} onClick={(e) => handleNavigation(e, 'skills')}>
        {t('nav-skills')}
      </a>
      <a className={navItemClass} onClick={(e) => handleNavigation(e, 'experience')}>
        {t('nav-experience')}
      </a>
      <a className={navItemClass} onClick={(e) => handleNavigation(e, 'projects')}>
        {t('nav-projects')}
      </a>
      <a className={navItemClass} onClick={(e) => handleNavigation(e, 'contact')}>
        {t('nav-contact')}
      </a>
    </div>
  );
};

export default NavWidget;
