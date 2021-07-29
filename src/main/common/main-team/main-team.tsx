import clsx from 'clsx';
import React from 'react';
import { useMedia } from 'react-use';

import { Grid } from 'src/common/grid';
import { Paper } from 'src/common/paper';
import { Typography } from 'src/common/typography';
import { Carousel } from 'src/common/carousel';
import { Button } from 'src/common/button';
import vlad_komissarov from 'src/assets/images/team/vlad_komissarov.png';
import artem_tolkachev from 'src/assets/images/team/artem_tolkachev.png';
import bondappetit from 'src/assets/images/team/bondappetit.png';
import dream_team from 'src/assets/images/team/dream_team.png';
import max_bokov from 'src/assets/images/team/max_bokov.png';
import waves from 'src/assets/images/team/waves.png';
import join_us from 'src/assets/images/team/join_us.png';
import { ReactComponent as TwitterIcon } from 'src/assets/icons/social/twitter.svg';
import { ReactComponent as LinkedInIcon } from 'src/assets/icons/social/linkedin.svg';
import { ButtonBase } from 'src/common/button-base';
import * as styles from './main-team.css';

export type MainTeamProps = {
  className?: string;
};

type Team = {
  photo: string;
  name: string;
  role: string;
  description: string;
  actions: JSX.Element[];
};

const TEAM: Array<Team> = [
  {
    photo: vlad_komissarov,
    name: 'Vladislav Komisarov',
    role: 'CEO and founder',
    description:
      'Vlad has over 17 years of experience in web development. He launched and managed a number of major ICT products and services on the CIS market.',
    actions: [
      <ButtonBase>
        <TwitterIcon />
      </ButtonBase>,
      <ButtonBase>
        <LinkedInIcon />
      </ButtonBase>
    ]
  },
  {
    photo: artem_tolkachev,
    name: 'Artem Tolkachev',
    role: 'CBDO and co-founder',
    description:
      'Former head of the Blockchain Lab at Deloitte. For over seven years, Artem has been one of the key opinion leaders in the CIS region in blockchain and tokenization.',
    actions: [
      <ButtonBase>
        <TwitterIcon />
      </ButtonBase>,
      <ButtonBase>
        <LinkedInIcon />
      </ButtonBase>
    ]
  },
  {
    photo: max_bokov,
    name: 'Max Bokov',
    role: 'Head Of Design',
    description:
      'Max Bokov is a designer and art director with 8 years of experience. Over the last 3 years, he has created designs for several successful blockchain projects.',
    actions: [
      <ButtonBase>
        <TwitterIcon />
      </ButtonBase>,
      <ButtonBase>
        <LinkedInIcon />
      </ButtonBase>
    ]
  },
  {
    photo: dream_team,
    name: 'Dream Team',
    role: '8 FTE',
    description: 'bla bla bla',
    actions: []
  },
  {
    photo: waves,
    name: 'Waves Technologies',
    role: 'Partner',
    description:
      'All-encompassing gateway blockchain protocol advancing technological frontiers of today for the pioneering developers of tomorrow. ',
    actions: [
      <ButtonBase>
        <TwitterIcon />
      </ButtonBase>,
      <ButtonBase>
        <LinkedInIcon />
      </ButtonBase>
    ]
  },
  {
    photo: bondappetit,
    name: 'BondAppetit',
    role: 'Partner',
    description:
      'The first DeFi protocol that connects real-world debt instruments with the Ethereum ecosystem',
    actions: [
      <ButtonBase>
        <TwitterIcon />
      </ButtonBase>,
      <ButtonBase>
        <LinkedInIcon />
      </ButtonBase>
    ]
  },
  {
    photo: join_us,
    name: 'Join Us',
    role: '?',
    description:
      'Join the team and work on the future of DeFi automation with us.',
    actions: [<Button variant="outlined">Application</Button>]
  }
];

const Wrap: React.FC = (props) => {
  const isMobile = useMedia('(max-width: 959px)');

  const Component: React.ElementType = isMobile ? Carousel : 'div';

  return <Component className={styles.list}>{props.children}</Component>;
};

export const MainTeam: React.VFC<MainTeamProps> = (props) => {
  return (
    <Grid.Container className={clsx(props.className)}>
      <Typography
        variant="h2"
        family="mono"
        transform="uppercase"
        className={styles.title}
      >
        behind the scenes
      </Typography>
      <Wrap>
        {TEAM.map((teammate) => (
          <Paper className={styles.card} key={teammate.name}>
            <img src={teammate.photo} alt="" className={styles.cardPhoto} />
            <Typography
              family="mono"
              transform="uppercase"
              className={styles.cardName}
            >
              {teammate.name}
            </Typography>
            <div className={styles.cardSubtext}>
              <Typography
                family="mono"
                transform="uppercase"
                className={styles.cardRole}
              >
                {teammate.role}
              </Typography>
              <Typography variant="body2">{teammate.description}</Typography>
            </div>
            <div>
              {teammate.actions.map((action, index) =>
                React.cloneElement(action, {
                  key: String(index),
                  className: styles.cardAction
                })
              )}
            </div>
          </Paper>
        ))}
      </Wrap>
    </Grid.Container>
  );
};
