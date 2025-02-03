import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { State } from "../types";
type PageProps = InputHTMLAttributes<HTMLInputElement> & {
    containerClassName?: string;
    inputClassName?: string;
    onChange?: (e: State) => void;
    onTextChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: State;
    countryid: number;
    placeHolder?: string;
    src?: string;
};
declare const StateSelect: ({ containerClassName, inputClassName, onTextChange, defaultValue, onChange, countryid, placeHolder, src, ...props }: PageProps) => React.JSX.Element;
export default StateSelect;
