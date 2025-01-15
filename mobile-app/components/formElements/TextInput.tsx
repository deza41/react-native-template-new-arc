import React, { useState } from 'react';
import { StyleSheet, TextInput,TextProps } from 'react-native';

export type ThemedTextProps = TextProps & {
  onChange?: (text: string) => void;
  value?:string;
};

const TextInputComponent = ({
  className,
  style,
  onChange,
  value,
}: ThemedTextProps) => {
  const [internalValue, setInternalValue] = useState<string | null | undefined>("");

  return (
    <TextInput
     className={className||'bg-white border border-gray-300 rounded-lg pl-3'}
     style={style}
     onChangeText={onChange||setInternalValue}
     value={value ?? internalValue ?? undefined}
    />
  );
};

export default TextInputComponent;

const styles = StyleSheet.create({
  dropdown: {
    height: 50,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
  },
  icon: {
    marginRight: 5,
  },
  placeholderStyle: {
    fontSize: 16,
  },
  selectedTextStyle: {
    fontSize: 16,
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
  },
});