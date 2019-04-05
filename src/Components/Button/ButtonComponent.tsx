import React from 'react';
import styled from '../../typed-components';

const Container = styled.input`
  all: unset;
  background: ${props => props.theme.cyanColor};
  border-radius: 4px;
  cursor: pointer;
  color: #fff;
  font-weight: 550;
  width: 16vw;
  height: 4vh;
  line-height: 0.875rem;
  font-size: 0.775rem;
`;

interface IProps {
  value?: string;
  onSubmit?: any;
  onClick?: any;
  disabled?: boolean;
  className?: string;
  type?: string;
  style?: any;
}

const ButtonComponent: React.SFC<IProps> = ({
  value,
  onSubmit,
  onClick,
  disabled = false,
  className,
  type = 'submit',
  style,
}) => (
  <Container
    value={value}
    onSubmit={onSubmit}
    onClick={onClick}
    disabled={disabled}
    className={className}
    type={type}
    style={style}
  />
);

export default ButtonComponent;
