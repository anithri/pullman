// import {createSelector} from 'reselect'

export const allPersonas = state => Object.values(state.persona.all)

export const personasById = state => state.persona.all