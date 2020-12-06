import React from 'react'
import { useEffect, useState } from 'react'
import SEO from '../components/seo'
import DateText from '../components/date'
import { graphql } from 'gatsby'
import Img from 'gatsby-image'

function calculateTimeLeftUntilDate(date) {
  let difference = +new Date(date) - +new Date()
  let timeLeft = {}

  if (difference > 0) {
    timeLeft = {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    }
  }

  return timeLeft
}

export default function Jan20({ data }) {
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeftUntilDate(`1/20/2021`)
  )
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeftUntilDate(`1/20/2021`))
    }, 1000)

    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <DateText>
        {timeLeft[interval]} {interval}{' '}
      </DateText>
    )
  })

  return (
    <>
      <SEO
        title="January 20th, 2021 Countdown"
        description="Countdown until January 20th"
      />
      <div>
        {timerComponents.length ? (
          timerComponents
        ) : (
          <DateText>It's time!</DateText>
        )}
        <img src="/bing-bong.jpg" />
      </div>
    </>
  )
}

export const query = graphql`
  query MyQuery {
    file(relativePath: { eq: "/bing-bong.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
