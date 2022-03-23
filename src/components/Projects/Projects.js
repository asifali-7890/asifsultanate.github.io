import React from "react";

import {
    BlogCard,
    CardInfo,
    ExternalLinks,
    GridContainer,
    HeaderThree,
    Hr,
    Tag,
    TagList,
    TitleContent,
    UtilityList,
    Img,
} from "./ProjectsStyles";
import {
    Section,
    SectionDivider,
    SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
    <Section nopadding id="projects">
        <SectionDivider />
        <SectionTitle main>Projects</SectionTitle>
        <GridContainer>
            {projects.map(
                ({ title, description, source, image, id, visit, tags }) => (
                    <BlogCard key={id}>
                        <Img src={image} />
                        <TitleContent>
                            <HeaderThree>{title}</HeaderThree>
                            <Hr />
                        </TitleContent>
                        <CardInfo>{description}</CardInfo>
                        <div>
                            <TitleContent>Stack</TitleContent>
                            <TagList>
                              {tags.map(tag => (
                                <Tag>{tag}</Tag>
                              ))}
                            </TagList>
                            <UtilityList>
                              <ExternalLinks href={visit}>Code</ExternalLinks>
                              <ExternalLinks href={source}>Source</ExternalLinks>
                            </UtilityList>

                        </div>
                    </BlogCard>
                )
            )}
        </GridContainer>
    </Section>
);

export default Projects;
