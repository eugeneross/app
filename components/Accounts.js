// Libraries
import React, { Component } from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import { media } from '../../../utils/breakpoints'
import { Account, AddAccount, View } from '../../../blocks'
import { Label } from '../../../elements'
import { Bank, EditLightBlue, Add, EthereumIcon } from '../../../elements/SVG/Icons';
import account from '../../../redux/actions/AccountActions'

export default class Accounts extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    console.log('Accounts Component mounted.', this.props)
  }
  
//for rendering fiat accounts
  renderFiatAccounts = () => {
    if (!this.props.isLoadingFiat) {
      return this.props.fiat.map((account, i) => {
        let account_id = account.account_id
        return (
          <Account.Column isSize='1/2' key={ i }>
            <Account>
              <Account.Inner>
                <Account.Names>
                  <Account.Source>
                    Wells Fargo
                  </Account.Source>
                  <Account.Nickname>
                    { account_id.account_name }
                  </Account.Nickname>
                </Account.Names>
                <Account.Tag>Primary</Account.Tag>
              </Account.Inner>

              <Account.Inner>
                <Account.Number>
                  { account_id.account_number }
                </Account.Number>
                <Account.Edit>
                  <div onClick={ e => this.props.handleFiatLink(e, account) }>
                    <EditLightBlue />
                  </div>
                </Account.Edit>
              </Account.Inner>
            </Account>
          </Account.Column>
        )
      })
    }
  }

  renderEthereumAddress = () => {
    if (!this.props.isLoadingCrypto) {
      return this.props.crypto.map((account, i) => {
        return (
          <Account.Column isSize='1/2' key={ i }>
            <Account>
              <Account.Inner>
                <Account.Names>
                  <Account.Source>
                    { account.network }
                  </Account.Source>
                  <Account.Nickname>
                    { account.public_address }
                  </Account.Nickname>
                </Account.Names>
                <Account.Tag>Primary</Account.Tag>
              </Account.Inner>

              <Account.Inner>
                <Account.Number>
                  { account.wallet_type }
                </Account.Number>
                <Account.Edit>
                  <div onClick={ e => this.props.handleCryptoLink(e, account) }>
                    <EditLightBlue />
                  </div>
                </Account.Edit>
              </Account.Inner>
            </Account>
          </Account.Column>
        )
      })
    }
  }

  render() {
    return (
      <View>
        <Account.Type>
          <Account.IconContainer>
            <Bank />
          </Account.IconContainer>
          <Label>Fiat Accounts</Label>
        </Account.Type>

        <Account.List>
          <Account.Columns>
            { this.props.fiat && this.renderFiatAccounts() }
            {
              this.props.isLoadingCrypto
              ? <LoadingComponent />
              : null
            }
            <Account.Column isSize='1/2'>
              <Link href='/profile/add-fiat'>
                <AddAccount>
                  <Add />
                  Add Funding Source
                </AddAccount>
              </Link>
            </Account.Column>

          </Account.Columns>
        </Account.List>

        <Account.Type>
          <Account.IconContainer>
            <EthereumIcon />
          </Account.IconContainer>
          <Label>Eterheum Addresses</Label>
        </Account.Type>

        <Account.List>
          <Account.Columns>
            { this.props.crypto && this.renderEthereumAddress() }
            {
              this.props.isLoadingCrypto
              ? <LoadingComponent />
              : null
            }
            <Account.Column isSize='1/2'>
              <Link href='/profile/add-crypto'>
                <AddAccount>
                  <Add />
                  Add Ethereum Address
                </AddAccount>
              </Link>
            </Account.Column>
          </Account.Columns>
        </Account.List>
      </View>
    )
  }
}

const LoadingComponent = () => (
  <Account.Column>
    <Account>
      <LoadingCard>
        <LoadingLeft>
          <LoadingLeftTop />
          <LoadingLeftBottom />
        </LoadingLeft>
        <LoadingRight />
      </LoadingCard>
    </Account>
  </Account.Column>
)


