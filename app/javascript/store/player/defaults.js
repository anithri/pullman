import _ from 'lodash'
import {skins} from 'utils/skins'
import {seats} from 'store/game/defaults'

const names = ['Chief of the Reach', 'Elder of Darkness',
  'Prime of the Sun', 'Chief of Silver',
  'Assistant of Transport', 'Chief of Agriculture',
  'Delegate of Transport', 'Chaplain of the Undead',
  'High Priest of Bones', 'Exalted of Blood',
  'Shogun of the Dead', 'Commander of the World',
  'President of Peace', 'Headman of Development',
  'Professor of Communication', 'Head of Swords',
  'Patriarch of Relations', 'Seer of the Phoenix',
  'Lama of Shadow', 'Abbot of the South',
  'Lord of Bones', 'Commander of Faith',
  'Protector of Fire', 'Captain of Education',
  'Baron of Strategy', 'Chairman of Trade',
  'Chief of Forestry', 'Deacon of Silence',
  'Bishop of the White', 'Preacher of Birth',
  'Duke of Heaven', 'Defender of Damned',
  'General of the South', 'Lady of Transport',
  'Curator of Trade', 'Head of Immigration',
  'Director of Weapons', 'Nun of the Veil',
  'Lama of the South', 'Minister of Eternity',
  'Imperator of Men', 'General of Death',
  'Earl of Universe', 'Earl of Agriculture',
  'Patriarch of Emissaries', 'Tribune of Money',
  'Patriarch of Magic', 'Witch of the Moon',
  'Warlock of Death', 'Chancellor of Silver',
  'Governor of the Valleys', 'Governor of War',
  'Pharaoh of the People', 'Matriarch of Emissaries',
  'Minister of Merchants', 'Matriarch of Security',
  'Chief of Planning', 'High Priestess of the Dead',
  'Rabbi of the Phoenix', 'Nun of Genesis',
  'Chieftain of Nations', 'Emperor of the Ocean',
  'Prime of Damned', 'Consul of Communication',
  'Earl of Coin', 'Official of Security',
  'Lady of Gold', 'Pastor of Solitude',
  'High Priestess of Pure Hearts', 'Warlock of Silver',
  'Baron of the Dead', 'Prince of Watch',
  'Prince of Darkness', 'Minister of Medicine',
  'Lady of Weapons', 'Administrator of Natural Resources',
  'Head of Immigration', 'Preacher of Shadow',
  'Cardinal of Birth', 'Counselor of Silver',
  'King of the Fields', 'Prince of Conviction',
  'Admiral of the Realm', 'Matriarch of Steel',
  'Secretary of Energy', 'Earl of Technology',
  'Exarch of Slaves', 'Priestess of the Sun',
  'High Priestess of Bliss', 'Apostle of Eternity',
  'Headman of Nightmares', 'Grand Master of Fools',
  'Master of the Moon', 'Governor of Weapons',
  'Curator of the Marine', 'Noble of Planning',
  'Director of Bows', 'Archbishop of the Earth',
  'Deacon of Time', 'Bishop of Dreams'
]


const randomizeNames = (count) => {
  return _.sampleSize(names, count)
}

const randomizeSkins = (count) => {
  return _.sampleSize(skins, count)
}

export const getPlayersFor = (idArr) => {
  const shuffledNames = randomizeNames(idArr.length)
  const shuffledSkins = randomizeSkins(idArr.length)
  const players = {}
  idArr.forEach((id, idx) => {
    players[id] = {
      id,
      name: shuffledNames[idx],
      skin: shuffledSkins[idx],
      seat: seats[idx],
      isReady: true,
      persona: 'Adventurer',
    }
  })
  return players
}

export default getPlayersFor
