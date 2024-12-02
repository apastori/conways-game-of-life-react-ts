import { IGridConfig } from './interfaces/IGridConfig'
import { isInteger } from './types/isIntegerType'
import { assertIsInteger } from './utils/assertIsInteger'

const ROWS: isInteger<30> = 30
const COLUMNS: isInteger<50.0> = 50

// throws error if Rows is decimal, float-point number
assertIsInteger(ROWS)

// throws error if Rows is decimal, float-point number
assertIsInteger(COLUMNS)

export const GridConfig: IGridConfig = {
  rows: ROWS,
  columns: COLUMNS
}