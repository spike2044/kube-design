'use client';

import * as React from 'react';
import * as SheetPrimitive from '@radix-ui/react-dialog';
import styled from 'styled-components';
import { CloseDuotone } from '@kubed/icons';

import { StyledSheetContent, StyledSheetOverlay } from './Sheet.styles';
import { Button } from '../index';

const Sheet = SheetPrimitive.Root;
const SheetTrigger = SheetPrimitive.Trigger;
const SheetClose = SheetPrimitive.Close;
const SheetPortal = SheetPrimitive.Portal;

const SheetOverlay = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <StyledSheetOverlay {...props} ref={ref} className={className} />
));
SheetOverlay.displayName = SheetPrimitive.Overlay.displayName;

interface SheetContentProps
  extends React.ComponentPropsWithoutRef<typeof SheetPrimitive.Content>,
    React.ComponentPropsWithoutRef<typeof StyledSheetContent> {
  side?: 'right' | 'top' | 'left' | 'bottom';
}

const SheetContent = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Content>,
  SheetContentProps
>(({ side = 'right', className, children, ...props }, ref) => (
  <SheetPortal>
    <SheetOverlay />
    <StyledSheetContent ref={ref} side={side} className={className} {...props}>
      <SheetPrimitive.Close>
        <Button
          variant="filled"
          color="secondary"
          radius="sm"
          size="sm"
          leftIcon={<CloseDuotone />}
        />
      </SheetPrimitive.Close>
      {children}
    </StyledSheetContent>
  </SheetPortal>
));
SheetContent.displayName = SheetPrimitive.Content.displayName;

const StyledSheetHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 0.125rem;
  text-align: center;

  @media (min-width: 640px) {
    text-align: left;
  }
`;

const SheetHeader = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledSheetHeader {...props} className={className} />
);
SheetHeader.displayName = 'SheetHeader';

const StyledSheetFooter = styled.div`
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 640px) {
    flex-direction: row;
    justify-content: flex-end;
    margin-left: 0.125rem;
  }
`;

const SheetFooter = ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) => (
  <StyledSheetFooter {...props} className={className} />
);
SheetFooter.displayName = 'SheetFooter';

const StyledSheetTitle = styled(SheetPrimitive.Title)`
  font-size: 1.125rem;
  font-weight: 600;
  color: var(--color-foreground);
`;

const SheetTitle = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Title>
>(({ className, ...props }, ref) => (
  <StyledSheetTitle ref={ref} className={className} {...props} />
));
SheetTitle.displayName = SheetPrimitive.Title.displayName;

const StyledSheetDescription = styled(SheetPrimitive.Description)`
  font-size: 0.875rem;
  color: var(--color-muted-foreground);
`;

const SheetDescription = React.forwardRef<
  React.ElementRef<typeof SheetPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof SheetPrimitive.Description>
>(({ className, ...props }, ref) => (
  <StyledSheetDescription ref={ref} className={className} {...props} />
));
SheetDescription.displayName = SheetPrimitive.Description.displayName;

export {
  Sheet,
  SheetPortal,
  SheetOverlay,
  SheetTrigger,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetFooter,
  SheetTitle,
  SheetDescription,
};
