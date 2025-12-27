'use client'

import { Suspense } from 'react'
import dynamic from 'next/dynamic'
import { Box, Spinner, Center } from '@chakra-ui/react'

const MapWithNoSSR = dynamic(() => import('../components/LayersControlExample'), {
  ssr: false,
  loading: () => (
    <Center h="100vh">
      <Spinner size="xl" color="blue.500" />
    </Center>
  ),
})

function MapLoader() {
  return <MapWithNoSSR />
}

export default function Home() {
  return (
    <Suspense
      fallback={
        <Center h="100vh">
          <Spinner size="xl" color="blue.500" />
        </Center>
      }
    >
      <MapLoader />
    </Suspense>
  )
}
