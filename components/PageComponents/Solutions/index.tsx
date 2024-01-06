import s from './solutions.module.scss';
import ProjectCard, { IProjectCard } from '@/components/PageComponents/Solutions/components/ProjectCard';
import SmetLabLogoSvg from '@/components/PageComponents/Solutions/components/svg/smetLabLogoSvg';
import HandSvg from '@/components/PageComponents/Solutions/components/svg/handSvg';
import { MyHubLogoSvg, MyHubLogoSvg2 } from '@/components/PageComponents/Solutions/components/svg/myHubLogoSvg';
import RocketSvg from '@/components/PageComponents/Solutions/components/svg/rocketSvg';
import Link from 'next/link';
import WorkersSvg from '@/components/PageComponents/Solutions/components/svg/workersSvg';
import Title from '@/components/Common/UI/Title';
import usePageTranslation from '@/core/hooks/UsePageTranslation';
import { DictionaryKey, TSolutionsDictionary } from '@/core/lib/i18n';
const SolutionsPageComponent = () => {
  const {t} = usePageTranslation<TSolutionsDictionary>(DictionaryKey.Solutions)

  const projectCardsList: IProjectCard[] = [
    {
      logo: <SmetLabLogoSvg />,
      title: t.solutions.projectCardsList.smetLab.title,
      description: t.solutions.projectCardsList.smetLab.description,
      imagesBlock: (
        <div>
          <HandSvg />
        </div>
      ),
    },
    {
      logo: <MyHubLogoSvg />,
      title: t.solutions.projectCardsList.myHub.title,
      description: t.solutions.projectCardsList.myHub.description,
      imagesBlock: (
        <div>
          <WorkersSvg />
        </div>
      ),
    },
    {
      logo: <MyHubLogoSvg2 />,
      title: t.solutions.projectCardsList.myHub.title,
      description: t.solutions.projectCardsList.myHub.description,
      imagesBlock: <RocketSvg />,
    },
  ];

  return (
    <section className={'small-container'}>
      <Title>{t.solutions.title}</Title>
      <p>
        {t.solutions.description[0]}
      </p>
      <p>{t.solutions.description[1]}</p>
      <ul className={s.projectCardsList}>
        {projectCardsList.map((project, index) => (
          <li key={'project-card' + index}>
            <Link href={'#'}>
              <ProjectCard {...project} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SolutionsPageComponent;
