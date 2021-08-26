import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import Icone from './Icone';

const SectionProjectStyles = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .none {
    margin-top: 4rem;
  }
  .projects {
    display: flex;
    justify-content: start;
    @media (max-width: 900px) {
      align-items: center;
      p {
        font-size: 0.5rem;
      }
    }
    h3 {
      text-transform: uppercase;
      padding-left: 1rem;
      font-size: 7vw;
      @media (max-width: 400px) {
        font-size: 11vw;
        font-weight: 600;
      }
    }
  }
  @media (max-width: 400px) {
    flex-direction: column;
    justify-content: center;
    .none {
      margin: 4rem 0;
    }
  }
`;

const ProjectsStyles = styled.div`
  .featured {
    margin-bottom: 4rem;
    p {
      text-transform: lowercase;
    }
  }
  display: flex;
  align-items: center;
  flex-direction: column;
  .list-container {
    display: flex;
    justify-content: center;
    align-items: space-between;
    flex-direction: column;
  }
  .numbers {
    display: flex;
    align-items: flex-end;
  }
`;

export default function Projects({ projects, scrollY }) {
  return (
    <SectionProjectStyles className="proj">
      <div className="none">
        <Icone scrollY={scrollY} />
      </div>
      <ProjectsStyles>
        <div className="featured">
          <p>
            {`00${projects.nodes.length} / 00${projects.nodes.length} projects`}
          </p>
        </div>
        <div className="list-container">
          {projects.nodes.map((project, i) => (
            <div className="projects" key={`${i}-projects`}>
              <div className="numbers">
                <p>{`00${i + 1}`}</p>
              </div>
              <Link to={`project/${project.slug.current}`}>
                <h3>{project.name}</h3>
              </Link>
            </div>
          ))}
        </div>
      </ProjectsStyles>
      <div className="none">
        <Icone scrollY={scrollY} />
      </div>
    </SectionProjectStyles>
  );
}
