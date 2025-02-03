import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { Region } from "../types";
type PageProps = InputHTMLAttributes<HTMLInputElement> & {
    defaultValue?: Region;
    containerClassName?: string;
    inputClassName?: string;
    onChange?: (e: Region) => void;
    onTextChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeHolder?: string;
    src?: string;
};
declare const RegionSelect: ({ containerClassName, inputClassName, onTextChange, defaultValue, onChange, placeHolder, src, ...props }: PageProps) => React.JSX.Element;
export default RegionSelect;
