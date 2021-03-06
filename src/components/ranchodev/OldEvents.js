import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { css } from "styled-components/macro";

// ASSETS
import event2016Image from "images/event2016.jpeg";
import event2017Image from "images/event2017.jpeg";
import event2018Image from "images/event2018.jpeg";
import event2019Image from "images/event2019.jpeg";

// COMPONENTS
import { SectionHeading } from "components/misc/Headings";

// HELPERS
import AnimationRevealPage from "helpers/AnimationRevealPage.js";

// STYLES
import 'styles/overrideOldEvents.css';

const SectionTitle = tw(SectionHeading)``;
const HighlightedText = tw.span`bg-primary-500 border-2 border-primary-500 text-gray-100 px-4 transform -skew-x-12 inline-block`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/4 sm:pr-8`}
  ${props =>
    props.featured &&
    css`
      ${tw`w-full!`}
      ${Post} {
        ${tw`sm:flex-row! h-full sm:pr-4`}
      }
      ${Image} {
        ${tw`sm:h-96 sm:min-h-full sm:w-1/2 lg:w-2/4 sm:rounded-t-none sm:rounded-l-lg`}
      }
      ${Info} {
        ${tw`sm:-mr-4 sm:pl-8 sm:flex-1 sm:rounded-none sm:rounded-r-lg sm:border-t-2 sm:border-l-0`}
      }
      ${Description} {
        ${tw`text-sm mt-3 leading-loose text-gray-600 font-medium`}
      }
    `}
`;
const Post = tw.div`cursor-pointer flex flex-col bg-gray-100 rounded-lg`;
const Image = styled.div`
  ${props => css`background-image: url("${props.imageSrc}");`}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8 border-2 border-t-0 rounded-lg rounded-t-none`;
const Category = tw.div`uppercase text-primary-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-primary-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Description = tw.div``;

export default ({
  posts = [
    {
      imageSrc: event2016Image,
      category: "2016",
      date: "16 de setembro, 2016",
      url: "#",
    },
    {
      imageSrc: event2017Image,
      category: "2017",
      date: "19 de setembro, 2017",
      url: "#",
    },
    {
      imageSrc: event2018Image,
      category: "2018",
      date: "29 de setembro, 2018",
      url: "#",
    },
    {
      imageSrc: event2019Image,
      category: "2019",
      date: "28 de setembro, 2019",
      url: "#",
    },
  ]
}) => {
  return (
    <AnimationRevealPage>
      <SectionTitle>
        Eventos <HighlightedText>Anteriores</HighlightedText>
      </SectionTitle>
      <Posts id="old-events">
        {posts.map((post, index) => (
          <PostContainer key={index} featured={post.featured}>
            <Post className="group" as="a" href={post.url}>
              <Image imageSrc={post.imageSrc} />
              <Info>
                <Category>{post.category}</Category>
                <CreationDate>{post.date}</CreationDate>
              </Info>
            </Post>
          </PostContainer>
        ))}
      </Posts>
    </AnimationRevealPage>
  );
};
