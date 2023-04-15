import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionProjects = ({ projects }) => {
  return (
    <Section title="Projects">
      {projects.map((project) => (
        <SummaryItem
          key={project.node.fields.slug}
          name={project.node.frontmatter.title}
          description={project.node.frontmatter.description}
          link={project.node.fields.slug}
          internal
        />
      ))}
    </Section>
  );
};

export default SectionProjects;
