import React from 'react'
import { render } from '@testing-library/react'
import { describe, test } from '@jest/globals'
import MainTitle from './MainTitle'

describe('Main Title tests', () => {
  test('title renders', () => {
    render(<MainTitle />)
  })
})
