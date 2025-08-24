import { describe, it, expect, vi } from 'vitest'
import { rootReducer } from './rootReducer'
import type { StateSchema } from './stateSchema'

vi.mock('../slices/formsSlice', () => ({
  formsReducer: vi.fn(() => 'formsState')
}))

vi.mock('../slices/countrySlice', () => ({
  countriesReducer: vi.fn(() => 'countriesState')
}))

describe('rootReducer', () => {
  it('should combine forms and countries reducers', () => {
    const state = rootReducer(undefined, { type: 'unknown' })
    expect(state).toEqual<StateSchema>({
      forms: 'formsState',
      countries: 'countriesState'
    })
  })

  it('should pass actions to child reducers', () => {
    const action = { type: 'TEST_ACTION' }
    const prevState = { forms: 'prevForms', countries: 'prevCountries' } as unknown as StateSchema
    const newState = rootReducer(prevState, action)
    expect(newState).toEqual({
      forms: 'formsState',
      countries: 'countriesState'
    })
  })
})
