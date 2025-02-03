import React, { ChangeEvent, InputHTMLAttributes } from "react";
import { Language } from "../types";
type PageProps = InputHTMLAttributes<HTMLInputElement> & {
    defaultValue?: Language;
    containerClassName?: string;
    inputClassName?: string;
    onChange?: (e: Language) => void;
    onTextChange?: (e: ChangeEvent<HTMLInputElement>) => void;
    placeHolder?: string;
    displayNative?: boolean;
    src?: string;
};
declare const LanguageSelect: ({ containerClassName, inputClassName, onTextChange, defaultValue, onChange, placeHolder, displayNative, src, ...props }: PageProps) => React.JSX.Element;
export default LanguageSelect;
