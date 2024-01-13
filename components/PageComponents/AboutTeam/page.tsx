'use client';
import Link from 'next/link';
import Image from 'next/image';
import { founder_1, founder_2 } from '@/core/constants/founders';
import HowWeWork from './components/HowWeWork';
import { reviews } from './mock/reviews.mock';
import Title from '@/components/Common/UI/Title';
import usePageTranslation from '@/core/hooks/UsePageTranslation';
import { DictionaryKey, TAboutTeamDictionary } from '@/core/lib/i18n';
import OurApproach from '@/components/PageComponents/AboutTeam/components/OurApproach';

const AboutTeamPageComponent = () => {
  const {t, locale} = usePageTranslation<TAboutTeamDictionary>(DictionaryKey.AboutTeam)

  const navLinks = [
    { path: '#about-team', text: t.aboutTeam.pageNav.whoCharge },
    { path: '#how-we-work', text: t.aboutTeam.pageNav.ourMethod },
    { path: '#our-approach', text: t.aboutTeam.pageNav.ourApproach },
    { path: '#reviews', text: t.aboutTeam.pageNav.reviews },
  ];

  const handleScrollToSection = (event: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    event.preventDefault();
    const section = document?.querySelector(sectionId);
    if (section) {
      const sectionRect = section.getBoundingClientRect();
      const marginTop = 60;
      const options: ScrollToOptions = {
        top: sectionRect.top - marginTop,
        behavior: 'smooth',
      };
      window.scrollTo(options);
    }
  };

  return (
    <>
      <section className={'small-container'}>
        <Title>{t.aboutTeam.headings.aboutTeam}</Title>
        <nav className={'about-team-nav'}>
          {navLinks.map(link => (
            <Link
              onClick={(e) => handleScrollToSection(e, link.path)}
              key={link.path}
              href={link.path}
              className={'about-team-nav__item'}
            >
              {link.text}
            </Link>
          ))}
        </nav>
        {
          t.aboutTeam.description.map((text, index) => <p key={'description_'+index}>{text}</p>)
        }
      </section>
      <section className={'about-team-founders-wrp'}>
        <div id={'about-team'} className={'small-container'}>
          <Title className={'about-team-founders-title'} color={'white'}>
            {t.aboutTeam.headings.whoLeadsTeam}
          </Title>
          <div className={'about-team-founders'} key={'aboutTeamFounder_'+locale}>
            {[founder_1, founder_2].map((founder, index) => (
              <div className={'about-team-founder'} key={'founder_' + index}>
                <div className={'about-team-founder__img'}>
                  <Image src={founder.imagePath} alt={founder.imagePath} fill={true} />
                </div>
                <div className={'about-team-founder__info'}>
                  <Link className={'about-team-founder__nameLink'} href={founder.telegram}>
                    {t.aboutTeam.team[founder.key].fullName}
                  </Link>
                  <p>{t.aboutTeam.team[founder.key].responsible}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={'about-team-founders-task-definition'}>
            <p>{t.aboutTeam.foundersMessage[0]}</p>
            <p>{t.aboutTeam.foundersMessage[1]}</p>
            <p>
              <span>
                <Link href={founder_1.telegram}>{t.aboutTeam.foundersMessage[2]}</Link>
              </span>
              {t.aboutTeam.foundersMessage[3]}
            </p>
          </div>
        </div>
      </section>
      <section>
        <div id={'how-we-work'} className={'small-container'}>
          <Title>{t.aboutTeam.headings.howWeWorking}</Title>
          <HowWeWork />
        </div>
      </section>
      <section>
        <div id={'our-approach'} className={'small-container'}>
          <Title className={'about-team-our-approach-title'}>{t.aboutTeam.headings.ourApproach}</Title>
          <OurApproach/>
        </div>
      </section>
      <section>
        <div id={'reviews'} className={'small-container'}>
          <Title className={'about-team-reviews-title'}>{t.aboutTeam.headings.reviews}</Title>
          <ul className={'about-team-reviews-wrp'}>
            {reviews.map((review, index) => (
              <li key={'review_' + index} className={'about-team-review'}>
                <div className={'about-team-reviewer'}>
                  <div className={'about-team-reviewer__img'}>
                    <Image src={review.user.image} alt={review.user.image} fill={true} />
                  </div>
                  <div className={'about-team-reviewer__info'}>
                    {`${review.user.fullName}, `}
                    <a href={review.company.link} target={'_blank'} rel={'nofollow noopener noreferrer'}>
                      {review.company.name}
                    </a>
                  </div>
                </div>
                <div className={'about-team-review__details'}>{t.aboutTeam.reviews[review.reviewKey]}</div>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
};

export default AboutTeamPageComponent;
