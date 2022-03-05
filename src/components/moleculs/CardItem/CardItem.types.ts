interface Props extends PropsStyle{
    title: string,
    date: string | any
    status: boolean,
}

interface PropsStyle {
    background: string
}

export type {
    Props,
    PropsStyle
}