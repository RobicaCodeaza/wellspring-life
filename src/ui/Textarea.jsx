import styled from 'styled-components';

const Textarea = styled.textarea`
  padding: 0.8rem 1.2rem;
  border: 1px solid var(--color-grey-300);
  border-radius: 5px;
  background-color: var(--color-grey-0);
  box-shadow: var(--shadow-sm);
  width: 100%;
  height: 8rem;
  @media (max-width: 768px) {
    height: 12rem;
    width: 90%;
  }
`;

export default Textarea;
