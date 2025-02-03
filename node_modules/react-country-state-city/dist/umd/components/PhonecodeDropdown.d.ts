import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { Country } from "../types";
type ComponentProps = InputHTMLAttributes<HTMLInputElement> & {
    placeHolder?: string;
    options: Array<Country>;
    inputClassName?: string;
    onTextChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: Country;
    onChange: (e: Country) => void;
    showFlag?: boolean;
};
declare const PhonecodeDropdown: ({ placeHolder, options, onChange, inputClassName, onTextChange, defaultValue, showFlag, ...props }: ComponentProps) => React.JSX.Element;
export default PhonecodeDropdown;
