import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { Language } from "../types";
type ComponentProps = InputHTMLAttributes<HTMLInputElement> & {
    placeHolder?: string;
    options: Array<Language>;
    inputClassName?: string;
    onTextChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: Language;
    onChange: (e: Language) => void;
    displayNative?: boolean;
};
declare const LanguageDropdown: ({ placeHolder, options, onChange, inputClassName, onTextChange, defaultValue, displayNative, ...props }: ComponentProps) => React.JSX.Element;
export default LanguageDropdown;
