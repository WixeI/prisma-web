import { FC } from "react";
import Button from "../Button";
import { CaretCircleRight, Icon } from "phosphor-react";

type Props = {
  Icon: Icon;
  ariaTitle: string;
  contact: string;
  href: string;
};

const Contact: FC<Props> = ({ Icon, ariaTitle, contact, href }) => {
  return (
    <div className="flex cursor-text items-center justify-between rounded-lg border border-neutral-50 px-4 py-2 hover:bg-primary-400 ">
      <div className="flex items-center gap-4">
        <Icon className="text-neutral-50" size="1.5rem" weight="light" />
        <p className="sr-only">{ariaTitle}: </p>
        <p>{contact}</p>
      </div>

      <Button
        as="a"
        size="sm"
        variant="link"
        className="select-none shadow-none hover:bg-primary-300/100"
        href={href}
        target="_blank"
      >
        <CaretCircleRight
          className="text-neutral-50"
          size="1.5rem"
          weight="light"
        />
      </Button>
    </div>
  );
};

export default Contact;
