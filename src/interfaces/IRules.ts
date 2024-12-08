import { Rule } from '../types/Rule'
import { RuleCellState } from '../types/RuleCellState'

export interface IRules {
    underPopulation: Rule,
    overPopulation: Rule,
    reproduction: RuleCellState,
    survival: Rule
}