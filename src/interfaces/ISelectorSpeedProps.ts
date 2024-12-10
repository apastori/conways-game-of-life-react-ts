export interface ISelectorSpeedProps {
    value: number,
    onChange: (value: React.ChangeEvent<HTMLSelectElement>) => void,
    children?: React.ReactNode
}