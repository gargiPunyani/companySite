import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerHeader,
} from "@/components/ui/drawer";
import ContactUsForm from "../ContactForm";

export function ContactDrawer({
  isOpen,
  handleChange,
}: {
  isOpen: boolean;
  handleChange: any;
}) {
  return (
    <Drawer open={isOpen} onOpenChange={handleChange}>
      <DrawerContent className="">
        <DrawerHeader className="">
          <DrawerClose>
            <Button className="absolute right-4 px-8">Close</Button>
          </DrawerClose>
        </DrawerHeader>
        <ContactUsForm type="drawer" />
      </DrawerContent>
    </Drawer>
  );
}
