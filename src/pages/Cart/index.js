import {useState} from 'react'
import { Switch } from '@material-ui/core'

import {
  LESS_THAN_10, 
  MORE_THAN_10
} from '../../data'

import {
  ContainerCart,
  ContentCart,
  ProductsCart,
  TotalCart,
  ButtonCheckout
} from './styles'

export function Cart() {
  const [cartProducts, setCartProducts] = useState(LESS_THAN_10)
  const [changeOrder, setChangeOrder] = useState(null)

  const handleChange = (event) => {
    setChangeOrder(event.target.checked);

    if (event.target.checked) {
      setCartProducts(MORE_THAN_10)
    } else {
      setCartProducts(LESS_THAN_10)
    }
  };

  return (
    <ContainerCart>
      <ContentCart>
        <div className="title-cart">
          <h1>Meu carrinho</h1>

          <Switch
            checked={changeOrder}
            onChange={handleChange}
            color="primary"
          />
        </div>

        <ProductsCart>
          <ul>
            {cartProducts.items.map(item => (
              <li key={item.uniqueId}>
                <img src={item.imageUrl} alt={item.detailUrl} />
                <div>
                  <h1>{item.name}</h1>
                  <span>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(item.sellingPrice)}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </ProductsCart>
        
        <TotalCart>
          <div>
            <h1>Total</h1>
            <span>{new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                  }).format(cartProducts.value)}
            </span>
          </div>

          {changeOrder && (
            <div className="free-shipping">
              <span>Parabéns, sua compra tem frete grátis !</span>
            </div>
          )}
        </TotalCart>

        <ButtonCheckout>
          <button>
            Finalizar compra
          </button>
        </ButtonCheckout>
      </ContentCart>
    </ContainerCart>
  )
}