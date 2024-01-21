'use client'

import React, { Fragment } from 'react'
import Link from 'next/link'

import { Page, Settings } from '../../../../payload/payload-types'
import { Button } from '../../../_components/Button'
import { HR } from '../../../_components/HR'
import { LoadingShimmer } from '../../../_components/LoadingShimmer'
import { Media } from '../../../_components/Media'
import { Price } from '../../../_components/Price'
import { RemoveFromCartButton } from '../../../_components/RemoveFromCartButton'
import { useAuth } from '../../../_providers/Auth'
import { useCart } from '../../../_providers/Cart'
import CardItem from '../CardItem'

import classes from './index.module.scss'

export const CartPage: React.FC<{
  settings: Settings
  page: Page
}> = props => {
  const { settings } = props
  const { productsPage } = settings || {}

  const { user } = useAuth()

  const { cart, cartIsEmpty, addItemToCart, cartTotal, hasInitializedCart } = useCart()

  return (
    <Fragment>
      <br />
      {!hasInitializedCart ? (
        <div className={classes.loading}>
          <LoadingShimmer />
        </div>
      ) : (
        <Fragment>
          {cartIsEmpty ? (
            <div className={classes.empty}>
              Tu carrito esta vacío
              {typeof productsPage === 'object' && productsPage?.slug && (
                <Fragment>
                  {' '}
                  <Link href={`/${productsPage.slug}`}>Click Aquí</Link>
                  {` Para comprar.`}
                </Fragment>
              )}
              {!user && (
                <Fragment>
                  {' '}
                  <Link href={`/login?redirect=%2Fcart`}>Iniciar Sesión</Link>
                  {` para ver un carrito guardado.`}
                </Fragment>
              )}
            </div>
          ) : (
            <div className={classes.cartWrapper}>
              <div>
                <div className={classes.header}>
                  <p>Productos</p>
                  <div className={classes.headerItemDetails}>
                    <p></p>
                    <p></p>
                    <p>Cantidad</p>
                  </div>
                  <p className={classes.headersubtotal}>Subtotal</p>
                </div>

                <ul className={classes.itemsList}>
                  {cart?.items?.map((item, index) => {
                    if (typeof item.product === 'object') {
                      const {
                        quantity,
                        product,
                        product: { id, title, meta, stripeProductID },
                      } = item

                      const isLast = index === (cart?.items?.length || 0) - 1

                      const metaImage = meta?.image

                      return (
                        <CardItem
                          product={product}
                          title={title}
                          metaImage={metaImage}
                          qty={quantity}
                          addItemToCart={addItemToCart}
                        />
                      )
                    }
                    return null
                  })}
                </ul>
              </div>

              <div className={classes.summary}>
                <div className={classes.row}>
                  <h6 className={classes.cartTotal}>Resumen</h6>
                </div>
                <div className={classes.row}>
                  <p className={classes.cartTotal}>Cargo del envió</p>
                  <p className={classes.cartTotal}>{`$ ${
                    cartTotal.raw > 20000 ? '0' : '20.000'
                  }`}</p>
                </div>
                <div className={classes.row}>
                  <h6 className={classes.cartTotal}>Total</h6>
                  <p className={classes.cartTotal}>{cartTotal.formatted}</p>
                </div>
                <Button
                  className={classes.checkoutButton}
                  href={user ? '/checkout' : '/login?redirect=%2Fcheckout'}
                  label={user ? 'Checkout' : 'Login to checkout'}
                  appearance="primary"
                />
              </div>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  )
}
