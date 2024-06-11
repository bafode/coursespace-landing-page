import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import { Grid } from '@mui/material'
const DynamicHomeHero = dynamic(() => import('../screens/hero'))
const DynamicHomeOurConcepts = dynamic(() => import('../screens/concept'))
const DynamicHomeNewsLetter = dynamic(() => import('../screens/newsletter'))
const DynamicHomeComprendre = dynamic(() => import('../screens/comprendre'))
const DynamicHomeTelecharger = dynamic(() => import('../screens/telecharger'))
const DynamicHomePricing = dynamic(() => import('../screens/pricing'))

const Home: NextPageWithLayout = () => {
  return (
    <Fragment>
      <Grid spacing={2}>
        <Grid item xs={12}>
          <DynamicHomeHero />
        </Grid>
        <Grid item xs={12}>
          <DynamicHomeOurConcepts />
        </Grid>
        <Grid item xs={12}>
          <DynamicHomeComprendre />
        </Grid>
        <Grid item xs={12}>
          <DynamicHomePricing />
        </Grid>
        <Grid item xs={12}>
          <DynamicHomeNewsLetter />
        </Grid>
        <Grid item xs={12}>
          <DynamicHomeTelecharger />
        </Grid>
      </Grid>
    </Fragment>
  )
}

Home.getLayout = (page) => <MainLayout>{page}</MainLayout>

export default Home
