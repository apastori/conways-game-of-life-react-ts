import { DirectionTuple } from '../types/DirectionTuple'

export interface IDirections extends ArrayLike<DirectionTuple> {
    readonly 0: DirectionTuple
    readonly 1: DirectionTuple
    readonly 2: DirectionTuple
    readonly 3: DirectionTuple
    readonly 4: DirectionTuple
    readonly 5: DirectionTuple
    readonly 6: DirectionTuple
    readonly 7: DirectionTuple
    readonly length: 8
}