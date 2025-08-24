import * as React from "react";
import { ChevronDownIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export default function DatePicker({ date, onDateChange }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col gap-3">
      <label htmlFor="date" className="px-1 font-medium">
        Due Date
      </label>
      <Popover open={open} onOpenChange={setOpen} modal={true}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-48 cursor-pointer justify-between font-normal"
          >
            {date ? date : "Select date"}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto overflow-hidden p-0" align="start">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              const stringDate = date?.toLocaleDateString();
              onDateChange(stringDate);
              setOpen(false);
            }}
          />
        </PopoverContent>
      </Popover>
    </div>
  );
}
