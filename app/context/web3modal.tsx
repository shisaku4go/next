
// context/AppKit.tsx

'use client'

import { createAppKit } from '@reown/appkit/react'
import { EthersAdapter } from '@reown/appkit-adapter-ethers'
import { mainnet, arbitrum } from '@reown/appkit/networks'

// 1. Get projectId at https://cloud.reown.com
const projectId = '07cb30a85030872bd6d6740cb3cbc6dd'

// 2. Create a metadata object
const metadata = {
  name: 'appkittest',
  description: 'AppKit Example',
  url: 'https://reown.com/appkit', // origin must match your domain & subdomain
  icons: ['https://assets.reown.com/reown-profile-pic.png']
}

// 3. Create the AppKit instance
createAppKit({
  adapters: [new EthersAdapter()],
  metadata,
  networks: [mainnet, arbitrum],
  projectId,
  features: {
    analytics: true // Optional - defaults to your Cloud configuration
  }
})

export function AppKit() {
  return (
    <YourApp /> //make sure you have configured the <w3m-button> inside
  )
}
