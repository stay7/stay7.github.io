import React from "react";
import styled from "styled-components";
import PostModel from "../../model/postModel";
import Link from "../atom/link";

interface Props {
  post: PostModel;
}

//TODO : title, content, todo, thumbnail?
const PostItem = ({ post }: Props) => {
  const { title, path, date } = post;
  console.log(post);
  return (
    <div>
      <Link to={path}>
        <span>{title}</span>
      </Link>
      <span>{date}</span>
    </div>
  );
};

export default PostItem;
