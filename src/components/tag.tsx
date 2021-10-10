import styled from "styled-components";

export interface TagProp {
  tag: string;
  color: string;
}

const Tag = styled.span<{ color: string }>`
  height: 28px;
  color: white;
  font-size: 16px;
  font-weight: bold;
  background-color: ${(props) => props.color};
  margin: 6px;
  padding: 4px 12px;
  border-radius: 5px;
`;

export default Tag;
