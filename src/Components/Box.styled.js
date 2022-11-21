import styled from "styled-components";

const BoxWrapper = styled.div`
  font-family: var(--font);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 4rem 6rem;

  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  /* height: 30rem; */

  &.white {
    color: var(--dark-grayish-blue);
    background-color: var(--very-light-grayish-blue);

    & .btn.box__btn {
      color: var(--very-light-grayish-blue);
      background-image: linear-gradient(
        to right bottom,
        var(--linear-gradient)
      );
      border-color: var(--grayish-blue);

      &:hover {
        color: var(--dark-grayish-blue);
      }
    }
  }

  &.purple {
    color: var(--very-light-grayish-blue);
    background-image: linear-gradient(to right bottom, var(--linear-gradient));
    transform: scale(1.1) translateY(-10px);
    @media screen and (max-width: 850px) {
      transform: scale(1) translate(0);
    }

    & .box__btn {
      background-color: var(--very-light-grayish-blue);
      color: var(--dark-grayish-blue);
      border-color: var(--very-light-grayish-blue);
    }
  }

  & .box__type {
    text-transform: capitalize;
    font-size: 1.4rem;
    letter-spacing: 1.2px;
    margin-bottom: 2rem;
  }

  & .box__price {
    font-size: 4rem;
    letter-spacing: 1.3px;
    margin-bottom: 2rem;
  }

  & .box__list {
    list-style: none;

    & li {
      border-bottom: 1px solid var(--light-grayish-blue);
      padding: 1rem 0;
      font-size: 1.1rem;
      letter-spacing: 0.6px;
    }

    & li:first-of-type {
      border-top: 1px solid var(--light-grayish-blue);
    }
  }

  & .box__btn {
    padding: 1rem 0;
    text-transform: uppercase;
    font-family: var(--font);
    letter-spacing: 1.3px;
    font-size: 1.2rem;
    width: 100%;
    margin-top: 4rem;
    border: 1px solid;
  }

  & .btn.box__btn {
    transition: all 0.2s;
    &:hover {
      background: transparent;
      color: var(--very-light-grayish-blue);
    }
  }
`;

export default BoxWrapper;
