import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { Country } from "../types";
type PageProps = InputHTMLAttributes<HTMLInputElement> & {
    defaultValue?: Country;
    containerClassName?: string;
    inputClassName?: string;
    onChange?: (e: Country) => void;
    onTextChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeHolder?: string;
    showFlag?: boolean;
    region?: string;
    src?: string;
};
declare const CountrySelect: ({ containerClassName, inputClassName, onTextChange, defaultValue, onChange, placeHolder, showFlag, region, src, ...props }: PageProps) => React.JSX.Element;
export default CountrySelect;
