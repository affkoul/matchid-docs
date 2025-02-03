import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { City } from "../types";
type PageProps = InputHTMLAttributes<HTMLInputElement> & {
    containerClassName?: string;
    inputClassName?: string;
    onChange?: (e: City) => void;
    onTextChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: City;
    countryid: number;
    stateid: number;
    placeHolder?: string;
    src?: string;
};
declare const CitySelect: ({ containerClassName, inputClassName, onTextChange, defaultValue, onChange, countryid, stateid, placeHolder, src, ...props }: PageProps) => React.JSX.Element;
export default CitySelect;
