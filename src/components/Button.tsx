import styled, { css } from "styled-components";

type ButtonProps = {
  primary?: boolean;
  secondary?: boolean;
};

const Button = styled.button<ButtonProps>`
  outline: none;
  padding: 0.2em 0.8em;
  font-size: 1.1em;
  border-radius: 7px;
  box-shadow: 1px 1px 1px 0px #c2c1c2;

  border: 1px solid #c2c1c2;
  background: #fff;

  ${(props) =>
    props.primary
      ? css`
          color: #fff;
          border 1px solid #749aec;
          background: linear-gradient(180deg, #81a4ee 0%, #3d6bed 100%);
          box-shadow: none;
        `
      : null}

  ${(props) =>
    props.secondary
      ? css`
          color: #fff;
          border 1px solid #c45086;
          background: linear-gradient(180deg, #ce72a0 0%, #c96192 100%);
          box-shadow: 1px 1px 1px 0px #c45086;
        `
      : null}
`;

export default Button;
