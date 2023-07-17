import { DatePicker } from "antd";
const { RangePicker } = DatePicker;

type Props = {
  setStartDate: (startDate: Date | null) => void;
  setEndDate: (endDate: Date | null) => void;
};

export const DateSelection = ({ setStartDate, setEndDate }: Props) => {
  const onChangeDate = (
    startDate: Date | undefined,
    endDate: Date | undefined
  ) => {
    if (!(startDate && endDate)) {
      setStartDate(null);
      setEndDate(null);
      return;
    }
    setStartDate(startDate);
    setEndDate(endDate);
  };

  return (
    <RangePicker
      picker="quarter"
      onChange={(values, _) =>
        values
          ? onChangeDate(values[0]?.toDate(), values[1]?.toDate())
          : setStartDate(null)
      }
    />
  );
};

export default DateSelection;
