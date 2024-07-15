import * as React from 'react';
import * as Sheets from './Sheet';
import { Button } from '../index';

export default {
  title: 'Components/Sheet',
  component: Sheets,
};

const {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} = Sheets;

export const Basic = () => {
  <Sheet>
    <SheetTrigger asChild>
      <Button variant="outline">Open</Button>
    </SheetTrigger>
    <SheetContent>
      <SheetHeader>
        <SheetTitle>Edit profile</SheetTitle>
        <SheetDescription>
          Make changes to your profile here. Click save when you are done.
        </SheetDescription>
      </SheetHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="name" className="text-right">
            Name
            <input id="name" value="Pedro Duarte" className="col-span-3" />
          </label>
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <label htmlFor="username" className="text-right">
            Username
            <input id="username" value="@peduarte" className="col-span-3" />
          </label>
        </div>
      </div>
      <SheetFooter>
        <SheetClose asChild>
          <Button type="submit">Save changes</Button>
        </SheetClose>
      </SheetFooter>
    </SheetContent>
  </Sheet>;
};
