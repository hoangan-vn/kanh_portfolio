import { FC } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';

import projectsDataEn from '~/assets/data/projects-en.json';
import projectsDataVi from '~/assets/data/projects-vi.json';
import { Locale } from '~/constants/enum';
import { RootState } from '~/app/store';
import irsac from '~/assets/images/image_0.png';
import cong_khanh from '~/assets/images/image_1.png';
import phong_son from '~/assets/images/image_2.png';
import bamboo from '~/assets/images/image.png';

import { ProjectItemWidget } from './widget';

const Projects: FC = (): JSX.Element => {
  const { t } = useTranslation();
  const currentLocale = useSelector((state: RootState) => state.localization.locale);
  const data = currentLocale === Locale.en ? projectsDataEn : projectsDataVi;
  const leadingCase = (leading: string) => {
    switch (leading) {
      case 'irsac':
        return irsac;
      case 'cong_khanh':
        return cong_khanh;
      case 'phong_son':
        return phong_son;
      default:
        return bamboo;
    }
  };

  return (
    <section className='w-screen flex flex-col justify-start items-center p-16 gap-10'>
      <h1 id='projects' className='text-gradient inline-block font-bold text-5xl'>
        {t('nav-projects')}
      </h1>
      <div className='flex flex-col gap-3 items-start w-full'>
        {data.map((project) => (
          <ProjectItemWidget
            leading={leadingCase(project.leading)}
            title={project.title}
            time={project.time}
            link={project.link}
            description={project.description}
            technologies={project.technologies}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
