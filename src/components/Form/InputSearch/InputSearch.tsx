import React, {
  ChangeEvent,
  memo,
  useEffect,
  useState
} from 'react';
import { useDebounce } from 'hooks/useDebounce';
import './InputSearch.scss';

interface InputSearchProps {
  onInput: (value: string) => void;
  initialValue?: string;
}

export const InputSearch = memo((props: InputSearchProps) => {
  const { onInput, initialValue = "" } = props;
  const [value, setValue] = useState(initialValue);
  const debouncedValue = useDebounce<string>(value, 500);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  }

  useEffect(() => {
    onInput(debouncedValue);
  }, [debouncedValue, onInput]);

  return (
    <div className="input-search">
      <input
        type="text"
        placeholder="Search"
        value={value}
        onChange={handleChange}
      />
    </div>
  );
});