import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { Dropdown } from "./Modal.types";

export default function Dropdown({
  options,
  label,
  Icon,
  value,
  onChange,
}: Dropdown) {
  return (
    <label className="flex flex-col gap-2 font-medium">
      <div className="flex items-center gap-2">
        {label}{" "}
        {
          <Icon
            className={`size-5 ${value === "urgent" && "text-red-500"} ${value === "not urgent" && "text-green-500"} ${value === "important" && "text-yellow-500"} ${value === "not urgent" && "text-green-500"} ${value === "not important" && "text-gray-500"}`}
          />
        }
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-32 cursor-pointer capitalize">
            {value}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
          <DropdownMenuRadioGroup value={value} onValueChange={onChange}>
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
