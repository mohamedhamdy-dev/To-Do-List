import * as React from "react";

import { Button } from "../components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "../components/ui/dropdown-menu";

type Dropdown = {
  options: string[];
  label: string;
  Icon: React.Component;
};

export default function Dropdown({ options, label, Icon }: Dropdown) {
  const [option, setOption] = React.useState(options[0]);

  return (
    <label className="flex flex-col gap-2 font-medium">
      <div className="flex items-center gap-2">
        {label}{" "}
        {
          <Icon
            className={`size-5 ${option === "urgent" && "text-red-500"} ${option === "not urgent" && "text-green-500"} ${option === "important" && "text-yellow-500"} ${option === "not urgent" && "text-green-500"} ${option === "not important" && "text-gray-500"}`}
          />
        }
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-32 cursor-pointer capitalize">
            {option}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuRadioGroup value={option} onValueChange={setOption}>
            {options.map((value) => (
              <DropdownMenuRadioItem
                value={value}
                className="cursor-pointer font-normal capitalize"
              >
                {value}
              </DropdownMenuRadioItem>
            ))}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </label>
  );
}
