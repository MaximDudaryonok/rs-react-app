import { describe, it, expect } from 'vitest'
import {
  getControllForm,
  getUnControllForm,
  getFormsIdentificator
} from './formsSelectors'
import { Identificator } from '../slices/formsSlice'
import type { RootState } from '../config/store'
import type { ConvertedFormInputs } from '../../../shared/types/formTypes'

const mockForm1 = {
  name: 'John Doe',
  age: 30,
  email: 'john@example.com',
  password: 'Aa1!',
  confirm: 'Aa1!',
  gender: 'male',
  terms: true,
  file: 'base64string',
  country: 'Belarus'
} as unknown as ConvertedFormInputs

const mockForm2 = {
  name: 'Jane Doe',
  age: 25,
  email: 'jane@example.com',
  password: 'Bb2@',
  confirm: 'Bb2@',
  gender: 'female',
  terms: true,
  file: 'base64string2',
  country: 'Poland'
} as unknown as ConvertedFormInputs

describe('formsSelectors', () => {
  const state: RootState = {
    forms: {
      controllForm: [mockForm1],
      unControlledForm: [mockForm2],
      lastFormId: Identificator.controlled
    }
  } as unknown as RootState

  it('getControllForm should return controllForm array', () => {
    expect(getControllForm(state)).toEqual([mockForm1])
  })

  it('getUnControllForm should return unControlledForm array', () => {
    expect(getUnControllForm(state)).toEqual([mockForm2])
  })

  it('getFormsIdentificator should return lastFormId', () => {
    expect(getFormsIdentificator(state)).toBe(Identificator.controlled)
  })

  it('getFormsIdentificator should return null if lastFormId is null', () => {
    const newState = { ...state, forms: { ...state.forms, lastFormId: null } }
    expect(getFormsIdentificator(newState as RootState)).toBeNull()
  })
})
