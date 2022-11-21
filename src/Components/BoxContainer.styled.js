import styled from "styled-components";

const BoxContainerWrapper = styled.section`
  display: flex;
  align-items: center;

  margin-top: 3rem;

  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export default BoxContainerWrapper;
