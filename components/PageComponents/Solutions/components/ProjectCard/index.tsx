import s from './projcet-card.module.scss';
import { FC, ReactNode } from 'react';

export interface IProjectCard {
  logo: ReactNode;
  title: string;
  description: string;
  imagesBlock: ReactNode;
}

const ProjectCard: FC<IProjectCard> = ({ logo, title, description, imagesBlock }) => {
  return (
    <div className={s.projectCard}>
      <div className={s.projectCard__info}>
        <div className={s.projectCard__head}>
          {logo}
          <h4 className={s.projectCard__title}>{title}</h4>
        </div>
        <p>{description}</p>
      </div>
      <div className={s.projectCard__imagesBlock}>{imagesBlock}</div>
    </div>
  );
};

export default ProjectCard;
