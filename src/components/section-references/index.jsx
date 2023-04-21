import React from 'react';

import Section from '../section';
import SummaryItem from '../summary-item';

const SectionReference = ({ references }) => {
  return (
    <Section title="References">
      {references.map((item) => (
        <SummaryItem
          key={item.name}
          name={item.name}
          description={item.description}
          link={item.link}
        />
      ))}
    </Section>
  );
};

export default SectionReference;
