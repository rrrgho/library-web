interface WrapperProps {
    backgroundColor: string
}

interface Props extends WrapperProps{
    children: React.ReactElement,
    onclick: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export type {
    WrapperProps,
    Props
}