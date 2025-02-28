// @flow strict
import React from 'react';
import { Link } from 'gatsby';
import type { Edges } from '../../types';
import styles from './Feed.module.scss';

type Props = {
  edges: Edges
};

const Feed = ({ edges }: Props) => (
  <div className={styles['feed']}>
    {edges.map((edge) => (
      <div className={styles['feed__item']} key={edge.node.fields.slug}>
        <div className={styles['feed__item-meta']}>
          <time className={styles['feed__item-meta-time']} dateTime={ new Date(edge.node.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}>
          { new Date(edge.node.frontmatter.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long' })}
          </time>
          <span className={styles['feed__item-meta-divider']} />
          {/*/ category */}
          <span className={styles['feed__item-meta-category']}>
          <Link to={edge.node.fields.categorySlug} >{edge.node.frontmatter.category}</Link>
          </span>
        </div>
        <h2 className={styles['feed__item-title']}>
          <Link className={styles['feed__item-title-link']} to={edge.node.fields.slug}>{edge.node.frontmatter.title}</Link>
        </h2>
       
        {/* description */}
        {/* <p className={styles['feed__item-description']}>{edge.node.frontmatter.description}</p> */}
        {/* <Link className={styles['feed__item-readmore']} to={edge.node.fields.slug}>Read</Link> */}
      </div>
    ))}
  </div>
);

export default Feed;
