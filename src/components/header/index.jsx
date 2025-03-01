import { Link } from 'gatsby';
import get from 'lodash/get';
import React from 'react';

import profileImg from '../../images/logo.png';

const classes = {
  wrapper: 'block mb-6 md:flex',
  imageWrapper: 'w-full max-w-150',
  image: 'transform transition-all duration-150 hover:scale-105',
  contentWrapper: 'flex-none pt-6 md:pt-1 md:flex-1 md:pl-20',
  name: 'text-5xl text-gray-900 font-bold leading-tight hover:text-black',
  description: 'text-gray-600',
  list: 'mt-6 uppercase tracking-wider',
  item: 'inline list-none pr-4',
  link: 'inline-block py-2 font-semibold text-xs text-green-600 hover:text-black',
};

const Header = ({ metadata = {} }) => {
  const github = get(metadata, 'github', false);
  const linkedin = get(metadata, 'linkedin', false);
  const cv = get(metadata, 'cv', false);

  return (
    <div className={classes.wrapper}>
      <div className={classes.imageWrapper}>
        <Link to="/">
          <img className={classes.image} src={profileImg} alt={metadata.name} />
        </Link>
      </div>
      <div className={classes.contentWrapper}>
        <h1 className={classes.name}>
          <Link to="/">{metadata.name}</Link>
        </h1>
        <p className={classes.description}>{metadata.description}</p>
        <ul className={classes.list}>
          {github && (
            <li className={classes.item}>
              <a className={classes.link} href={github} target='_blank'>
                GitHub
              </a>
            </li>
          )}
          {linkedin && (
            <li className={classes.item}>
              <a className={classes.link} href={linkedin} target='_blank'>
                LinkedIn
              </a>
            </li>
          )}
          {cv && (
            <li className={classes.item}>
              <a className={classes.link} href={cv} target='_blank'>
                CV
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
};

export default Header;
