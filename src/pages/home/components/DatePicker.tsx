import "react-datepicker/dist/react-datepicker.css";

import React, { useState } from "react";
import DatePicker from "react-datepicker";

export default function DateP() {
  const [date, setDate] = useState<Date | null>(new Date());



  return (
    <div className="mt-8 mx-5">
      <DatePicker
        selected={date}
        onChange={(date: Date | null) => setDate(date)}
      />
     
    </div>
  );
}
