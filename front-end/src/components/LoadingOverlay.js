import React from 'react';
import styled from 'styled-components';
import Spinner from 'react-bootstrap/Spinner';
import useContextValue from '../context';

const StyledOverlay = styled.div`
  position: fixed;
  display: ${({ isLoading }) => (isLoading ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 2;
`;

const LoadingOverlay = () => {
  const { isLoading } = useContextValue();
  return (
    <StyledOverlay isLoading={isLoading}>
      <div>
        <Spinner animation="grow" variant="danger" />
        <Spinner animation="grow" variant="warning" />
        <Spinner animation="grow" variant="info" />
      </div>
    </StyledOverlay>
  );
};

export default LoadingOverlay;
