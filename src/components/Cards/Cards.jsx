import React from 'react';
import { Card, Typography, Grid, CardContent } from '@material-ui/core'
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }
  // console.log(`recovered API #: ${recovered.value}`);
  if (recovered.value === 0) {
    recovered.value = confirmed.value - deaths.value;
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justifyContent='center'>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.card.infected)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Infected</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={confirmed.value} duration={2.5} separator=',' />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>Number of Active Cases of COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.card.recovered)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Recovered</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={recovered.value} duration={2.5} separator=',' />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>Number of recoveries from COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.card.deaths)}>
          <CardContent>
            <Typography color='textSecondary' gutterBottom>Deaths</Typography>
            <Typography variant='h5'>
              <CountUp start={0} end={deaths.value} duration={2.5} separator=',' />
            </Typography>
            <Typography color='textSecondary'>{new Date(lastUpdate).toDateString()}</Typography>
            <Typography variant='body2'>Number of deaths caused by COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>

    </div>
  )
}

export default Cards;