import styled from "styled-components";

const HeaderToggleWrapper = styled.header`
  margin-bottom: 3rem;
  & h2 {
    font-size: 3rem;
    font-family: var(--font);
    text-transform: capitalize;
    color: var(--grayish-blue);
    margin-bottom: 2.3rem;
    text-align: center;
  }

  & .toggle-container {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & label {
      color: var(--grayish-blue);
      font-weight: 700;
      font-size: 1.4rem;
      text-transform: capitalize;
      font-family: var(--font);
    }
    & input {
      margin: 0 1rem;
      appearance: none;
      position: relative;
      border: 0;
      display: flex;
      cursor: pointer;

      &::after {
        background-color: var(--very-light-grayish-blue);
        z-index: 2;
        position: absolute;
        content: "";
        display: block;
        width: 1.7rem;
        height: 1.7rem;
        border-radius: 50%;
        /* margin: 0.5rem; */
        top: 0.3rem;
        left: 0.3rem;
        cursor: pointer;
      }

      &::before {
        background-image: linear-gradient(
          to right bottom,
          var(--linear-gradient)
        );
        z-index: 1;
        content: "";
        /* position: absolute; */
        display: block;
        width: 4rem;
        height: 2.3rem;
        left: 0;
        top: 0;
        border-radius: 100px;
        cursor: pointer;
      }

      &:checked {
        &::after {
          transform: translateX(100%);
        }
      }
    }
  }
`;

export default HeaderToggleWrapper;
