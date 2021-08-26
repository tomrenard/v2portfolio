import React from 'react';
import Img from 'gatsby-image';

export default function SingleProjectModule({ project }) {
  return (
    <div style={{ maxWidth: '1200px', margin: 'auto' }}>
      <Img fluid={project.image.asset.fluid} />
    </div>
  );
}
