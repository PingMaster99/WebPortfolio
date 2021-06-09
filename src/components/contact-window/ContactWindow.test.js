import React from 'react'
import { render } from '@testing-library/react'
import { describe, test } from '@jest/globals'
import CommandWindow from '../command_window'

describe('Contact window tests', () => {
  test('window renders', () => {
    render(<CommandWindow />)
  })
})
