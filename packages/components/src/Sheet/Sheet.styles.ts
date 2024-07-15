import styled, { css, keyframes } from 'styled-components';
import * as SheetPrimitive from '@radix-ui/react-dialog';

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const fadeOut = keyframes`
  from { opacity: 1; }
  to { opacity: 0; }
`;

const slideInFromTop = keyframes`
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
`;

const slideOutToTop = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(-100%); }
`;

const slideInFromBottom = keyframes`
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
`;

const slideOutToBottom = keyframes`
  from { transform: translateY(0); }
  to { transform: translateY(100%); }
`;

const slideInFromLeft = keyframes`
  from { transform: translateX(-100%); }
  to { transform: translateX(0); }
`;

const slideOutToLeft = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-100%); }
`;

const slideInFromRight = keyframes`
  from { transform: translateX(100%); }
  to { transform: translateX(0); }
`;

const slideOutToRight = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(100%); }
`;

const baseStyles = css`
  position: fixed;
  z-index: 50;
  gap: 1rem;
  background: var(--color-background);
  padding: 1.5rem;
  box-shadow: var(--shadow-lg);
  transition: ease-in-out;
  &[data-state='open'] {
    animation-duration: 500ms;
    animation-fill-mode: forwards;
  }
  &[data-state='closed'] {
    animation-duration: 300ms;
    animation-fill-mode: forwards;
  }
`;

const topStyles = css`
  inset-x: 0;
  top: 0;
  border-bottom: 1px solid;
  &[data-state='open'] {
    animation-name: ${fadeIn}, ${slideInFromTop};
  }
  &[data-state='closed'] {
    animation-name: ${fadeOut}, ${slideOutToTop};
  }
`;

const bottomStyles = css`
  inset-x: 0;
  bottom: 0;
  border-top: 1px solid;
  &[data-state='open'] {
    animation-name: ${fadeIn}, ${slideInFromBottom};
  }
  &[data-state='closed'] {
    animation-name: ${fadeOut}, ${slideOutToBottom};
  }
`;

const leftStyles = css`
  inset-y: 0;
  left: 0;
  height: 100%;
  width: 75%;
  border-right: 1px solid;
  max-width: 16rem; /* equivalent to sm:max-w-sm */
  &[data-state='open'] {
    animation-name: ${fadeIn}, ${slideInFromLeft};
  }
  &[data-state='closed'] {
    animation-name: ${fadeOut}, ${slideOutToLeft};
  }
`;

const rightStyles = css`
  inset-y: 0;
  right: 0;
  height: 100%;
  width: 75%;
  border-left: 1px solid;
  max-width: 16rem; /* equivalent to sm:max-w-sm */
  &[data-state='open'] {
    animation-name: ${fadeIn}, ${slideInFromRight};
  }
  &[data-state='closed'] {
    animation-name: ${fadeOut}, ${slideOutToRight};
  }
`;

const getSideStyles = (side: string) => {
  switch (side) {
    case 'top':
      return topStyles;
    case 'bottom':
      return bottomStyles;
    case 'left':
      return leftStyles;
    case 'right':
      return rightStyles;
    default:
      return rightStyles;
  }
};

export const StyledSheetContent = styled(SheetPrimitive.Content)<{ side: string }>`
  ${baseStyles}
  ${({ side }) => getSideStyles(side)}
`;

export const StyledSheetOverlay = styled(SheetPrimitive.Overlay)`
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0, 0, 0, 0.8);

  &[data-state='open'] {
    animation: fadeIn 0.3s;
  }

  &[data-state='closed'] {
    animation: fadeOut 0.3s;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;
