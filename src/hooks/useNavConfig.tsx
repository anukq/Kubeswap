import { CaretDownOutlined } from '@ant-design/icons'
import { useMemo } from 'react'
import { Link } from 'react-router-dom'

import WalletButtons from '../components/web3/WalletButtons'
import {
  ENABLE_KLIMA_STAKE_SHOWCASE,
  VITE_ENABLE_CLAIMING,
  VITE_ENABLE_OFFSET_CARBON_SHOWCASE,
} from '../constants/featureFlags'
import { useIsMobile } from './useIsMobile'

export const useNavConfig = () => {
  const isMobile = useIsMobile()

  const navConfig = useMemo(() => {
    return [
      { label: <Link to="/swap">Swap & Bridge</Link>, key: '/swap' },
      VITE_ENABLE_CLAIMING
        ? {
            label: (
              <a href="/claiming" rel="nofollow noreferrer">
                Claiming
              </a>
            ),
            key: '/claiming',
          }
        : null,
      { label: <Link to="/dashboard">Dashboard</Link>, key: '/dashboard' },
      {
        label: (
          <a href="https://docs.google.com/" target="_blank" rel="nofollow noreferrer">
            Careers
          </a>
        ),
        key: 'dev-list',
      },
      {
        label: (
          <span className="lifi-more-submenu-title-wrapper">
            More <CaretDownOutlined className="lifi-more-submenu-title-icon" />
          </span>
        ),
        key: 'lifi-more-submenu',
        disabled: false,
        children: [
          {
            label: 'Showcases',
            key: 'lifi-showcase-submenu',
            children: [
              {
                key: '/showcase/ukraine',
                label: (
                  <>
                    <span className="ukraine-flag">&#127482;&#127462;</span>
                    <Link to="/showcase/ukraine">Help Ukraine!</Link>
                  </>
                ),
              },
              {
                type: 'group',
                label: 'Showcases',
                key: '/showcase',
                children: [
                  {
                    key: '/showcase/etherspot-klima',
                    label: <Link to="/showcase/etherspot-klima">Cross-Chain Klima Staking</Link>,
                  },
                  {
                    key: '/showcase/carbon-offset',
                    label: <Link to="/showcase/carbon-offset">Cross-Chain Carbon Offsetting</Link>,
                  },
                  VITE_ENABLE_OFFSET_CARBON_SHOWCASE
                    ? {
                        key: '/showcase/carbon-offset-v2',
                        label: (
                          <Link to="/showcase/carbon-offset-v2">
                            Cross-Chain Carbon Offsetting V2
                          </Link>
                        ),
                      }
                    : null,

                  ENABLE_KLIMA_STAKE_SHOWCASE
                    ? {
                        key: '/showcase/klima-stake-v2',
                        label: (
                          <Link to="/showcase/klima-stake-v2">Cross-Chain Klima Staking V2</Link>
                        ),
                      }
                    : null,
                ],
              },
            ],
          },
          {
            label: (
              <a href="https://medium.com/" target="_blank" rel="nofollow noreferrer">
                Blog
              </a>
            ),
            key: 'blog',
          },

          {
            label: (
              <a href="https://planetsomewhere.com/" target="_blank" rel="nofollow noreferrer">
                About
              </a>
            ),
            key: 'about',
          },
          {
            label: (
              <a
                href="https://github.com/Astrotuf/PlanetSWH/"
                target="_blank"
                rel="nofollow noreferrer">
                Github
              </a>
            ),
            key: 'github',
          },
          {
            label: (
              <a href="https://twitter.com/planet_swh" target="_blank" rel="nofollow noreferrer">
                Twitter
              </a>
            ),
            key: 'twitter',
          },
          {
            label: 'Legals',
            key: 'legals-submenu',
            children: [
              {
                label: (
                  <a href="https://google.com" target={'_blank'} rel="noreferrer">
                    Privacy Policy
                  </a>
                ),
                key: 'privacy',
              },
              {
                label: (
                  <a
                    href="https://li.fi/knowledge-hub/what-is-lifi/"
                    target={'_blank'}
                    rel="noreferrer">
                    What is LI.FI?
                  </a>
                ),
                key: 'imprint',
              },
              {
                label: (
                  <a href="https://google.com/" target={'_blank'} rel="noreferrer">
                    Terms & Conditions
                  </a>
                ),
                key: 'termsAndConditions',
              },
            ],
          },
        ],
      },
      isMobile
        ? {
            key: 'wallet-button',
            label: <WalletButtons></WalletButtons>,
          }
        : null,
    ]
  }, [isMobile])

  return navConfig
}
