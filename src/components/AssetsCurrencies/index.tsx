import { Currency, Token } from '@uniswap/sdk'
import React, {useCallback, useMemo} from 'react'
import { useAllTokens } from '../../hooks/Tokens'
import Column from '../Column'
import CurrenciesList from './CurrenciesList'
//import { useAllTokenData } from '../contexts/TokenData'

export function AssetsCurrencies() {

    const fixedList = undefined
    const height = 100
    const allTokens = useAllTokens()
    const showETH: boolean = true
    const otherSelectedCurrency = null
    const selectedCurrency = null

    const filteredTokens: Token[] = useMemo(() => {
        return Object.values(allTokens)
    }, [allTokens])

    const handleCurrencySelect = useCallback(
        (currency: Currency) => {
            return true
        },
        []
    )

    return (
        <Column style={{ width: '100%', flex: '1 1' }}>
            <div style={{ flex: '1' }}>
                <CurrenciesList
                            height={height}
                            showETH={showETH}
                            currencies={filteredTokens}
                            onCurrencySelect={handleCurrencySelect}
                            otherCurrency={otherSelectedCurrency}
                            selectedCurrency={selectedCurrency}
                            fixedListRef={fixedList}
                />
            </div>
        </Column>
    )
}
