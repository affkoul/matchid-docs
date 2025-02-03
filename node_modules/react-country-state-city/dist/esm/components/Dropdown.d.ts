import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { City, Country, Region, State } from "../types";
type ComponentProps = InputHTMLAttributes<HTMLInputElement> & {
    placeHolder?: string;
    options: Array<Region | Country | State | City>;
    inputClassName?: string;
    onTextChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: Region | Country | State | City;
    onChange: (e: Region | Country | State | City) => void;
    showFlag?: boolean;
};
declare const Dropdown: ({ placeHolder, options, onChange, inputClassName, onTextChange, defaultValue, showFlag, ...props }: ComponentProps) => React.JSX.Element;
export default Dropdown;
