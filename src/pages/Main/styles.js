import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
  max-width: 700px !important;
  background: #fff;
  padding: 20px !important;
  margin: 50px auto !important;

  h1 {
    font-size: 20px;
    display: flex;
    flex-direction: row;
    align-items: center;

    img {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  margin-top: 30px;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    padding: 10px 15px;
    font-size: 16px;
  }
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

export const SubmitButton = styled.button.attrs((props) => ({
  type: 'submit',
  disabled: props.loading,
}))`
  margin-left: 20px;
  width: 150px;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
    background: #e84848 !important;
  }

  ${(props) =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const PokeInfo = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: row;
  justify-content: left;

  img {
    margin-top: 30px;
    background: #f0f0f0;
    width: 160px;
    border: 1px solid #f0f0f0;
    border-radius: 50%;
  }

  div.right {
    margin: 0 auto;
  }
`;
