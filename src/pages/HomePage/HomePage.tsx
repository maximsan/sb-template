import styled from 'styled-components'

import { categories } from '../../stub/categories'

import { RestaurantsSection } from './components/RestaurantsSection'
import { CategoriesSection } from './components/CategoriesSection/CategoriesSection'
import { Banner } from './components/Banner'
import { AwardWinningSection } from './components/AwardWinningSection'

const Spacing = styled.div`
  margin-bottom: 4.5rem;
`

export const HomePage = () => (
  <>
    <Banner />
    <Spacing />
    <RestaurantsSection title="Our favorite picks" />
    <Spacing />
    <AwardWinningSection />
    <Spacing />
    <CategoriesSection categories={categories} />
    <Spacing />
  </>
)
