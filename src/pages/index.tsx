import React, { Fragment } from 'react'
import dynamic from 'next/dynamic'
import { NextPageWithLayout } from '@/interfaces/layout'
import { MainLayout } from '@/components/layout'
import { Grid } from '@mui/material'
const DynamicHomeHero = dynamic(() => import('../components/home/hero'))
const DynamicHomeOurConcepts = dynamic(() => import('../components/home/concept'))
const DynamicHomeNewsLetter = dynamic(() => import('../components/home/newsletter'))
const DynamicHomeComprendre = dynamic(() => import('../components/home/comprendre'))
const DynamicHomeTelecharger = dynamic(() => import('../components/home/telecharger'))
const DynamicHomePricing = dynamic(() => import('../components/home/pricing'))

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
