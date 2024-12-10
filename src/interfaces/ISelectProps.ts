export interface ISelectProps {
    value: number,
    onChange: (value: React.ChangeEvent<HTMLSelectElement>) => void,
    children: React.ReactNode,
    label: string
}