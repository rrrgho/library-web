import {ChangeEvent} from "react";

interface Props {
    label: string,
    onchange: (event: ChangeEvent<HTMLInputElement>) => void
}

export type {
    Props
}