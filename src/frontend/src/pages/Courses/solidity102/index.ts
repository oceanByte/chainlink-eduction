/* eslint import/no-webpack-loader-syntax: off */
// @ts-ignore
import data from '!raw-loader!./module.md'

import { Course } from '../../Course/Course.controller'

export const course: Course = {
    path: "solidity102",
    description: data,
    amountOfTime: '45 minutes', 
}
