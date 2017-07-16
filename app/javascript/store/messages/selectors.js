import {createSelector} from 'reselect'

export const allMessages = state => state.messages.all
export const visibleMessageCount = state => state.messages.visibleCount

export const visibleMessages = createSelector(
  [allMessages,visibleMessageCount],
  (all,count) => all.slice(-1 * count)
)
